import Vuex from 'vuex'
import axios from 'axios'

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
            isAdminUser:  state => !!state.authUser.isAdmin,
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
                    photoURL: claims.photoURL,
                    isAdmin: claims.isAdmin
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
            async nuxtServerInit({ dispatch }, ctx) {
                if (this.$fire.auth === null) {
                    throw 'nuxtServiceInit Example not working - this.$fire.auth cannot be accessed.'
                }

                if (ctx.$fire.auth === null) {
                    throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
                }

                if (ctx.app.$fire.auth === null) {
                    throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
                }

                if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
                    const { allClaims: claims, ...authUser } = ctx.res.locals.user

                    console.info(
                        'Auth User verified on server-side. User: ',
                        authUser,
                        'Claims:',
                        claims
                    )
                    
                    await dispatch('onAuthStateChanged', {
                        authUser,
                        claims,
                    })
                }
            },
            async onAuthStateChanged({ commit }, { authUser, claims }) {
                if (!authUser) {
                    // move to login page when logout
                    await this.$router.push("/login")
                    commit('UNSET_USER')
                    return
                }

                if (authUser && claims) {
                    try {
                        // move to profile page when login
                        await this.$router.push("/profile")
                    } catch (e) {
                        console.error(e)
                    }
                }

                commit('SET_USER', { authUser, claims })
            }
        }
    })
}

export default createStore
