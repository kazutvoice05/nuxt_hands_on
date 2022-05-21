import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state() {
            return {
                message: 'Hello Vuex!!!',
                post: {},
            }
        },
        mutations: {
            updateMessage(state, payload) {
                state.message = payload
            },
            updatePost(state, payload) {
                state.post = payload
            }
        },
        actions: {
            updateMessageAction(context, payload) {
                context.commit('updateMessage', payload)
            },
            async updatePostAction(context) {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
                const payload = res.data

                context.commit('updatePost', payload)
            }
        }
    })
}

export default createStore
