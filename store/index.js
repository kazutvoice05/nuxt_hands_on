import Vuex from 'vuex'
import axios from 'axios'

 function getAuthUserParam(state, key) {
    if (state.authUser && key in state.authUser.keys()) {
        return state.authUser.get(key)
    }

    return null
    
}

const createStore = () => {
    return new Vuex.Store({
        state() {
            return {
                authUser: null,
                message: 'Hello Vuex!!!',
                post: {},
            }
        },
        getters: {
            isLoggedIn: state => !!state.authUser,
            isAdmin: state => {
                if (state.authUser) {
                    if (state.authUser.role === 'admin')
                        return true
                }
                return false
            }
        },
        mutations: {
            UPDATE_MESSAGE(state, payload) {
                state.message = payload
            },
            UPDATE_POST(state, payload) {
                state.post = payload
            },
            UNSET_USER(state) {
                state.authUser = null
            },
            SET_USER(state, { authUser, claims }) {
                state.authUser = {
                    uid: authUser.uid,
                    email: authUser.email,
                    emailVerified: authUser.emailVerified,
                    displayName: authUser.displayName,
                    role: authUser.role,
                    photoURL: claims.photoURL,
                }
            }
        },
        actions: {
            updateMessageAction(context, payload) {
                context.commit('UPDATE_MESSAGE', payload)
            },
            async updatePostAction(context) {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
                const payload = res.data

                context.commit('UPDATE_POST', payload)
            },
            async onAuthStateChanged({ getters, dispatch, commit }, { authUser, claims }) {
                // ログアウト or 認証失敗
                if (!authUser) {
                    // ログイン画面に遷移
                    await this.$router.push("/login")

                    // vuex store 上のユーザ情報をリセット
                    commit('UNSET_USER')

                    return
                }

                // ログイン or 認証成功
                if (authUser && claims) {
                    try {
                        const uid = authUser.uid
                        console.log("1: " + uid)

                        // ユーザ情報が firestore に存在しない場合は新規ユーザ登録
                        const existsUser = await dispatch('existsUser', uid)
                        if (!existsUser) {
                            const res = await dispatch('addUser', authUser)
                            console.log(res)
                        }

                        const user = await dispatch('getUser', uid)     
                        authUser.role = user.role;

                        // プロフィール画面に遷移
                        await this.$router.push("/profile")
                    } catch (e) {
                        console.error(e)
                    }
                }

                // 認証されたユーザ情報を vuex store へ保存
                commit('SET_USER', { authUser, claims })
            },
            async existsUser(context, uid) {
                const record = await this.$fire.firestore.collection('users').doc(uid).get()

                if (record.exists) {
                    console.log("found user: " + uid)
                    return true
                }

                console.log("record not found.")
                return false

            },
            async getUser(context, uid) {
                console.log("get user: " + uid)

                const user = await this.$fire.firestore.collection('users').doc(uid).get()

                return user.data()
                
            },
            async addUser(context, authUser) {
                const { uid, displayName, email } = authUser
                
                console.log("add user: " + authUser.uid)

                const userData = {
                    uid: uid,
                    name: displayName,
                    email: email,
                    role: 'user'
                }

                const res = await this.$fire.firestore.collection('users').doc(uid).set(userData)

                return res
            }
        }
    })
}

export default createStore
