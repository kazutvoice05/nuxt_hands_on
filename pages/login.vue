<template>
    <div class="root">
        <div class="title">Login Page</div>
        <button class="button" @click="signInWithGoogle">Sign in with Google</button>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'login',
    layout: 'default',
    setup() {
    },
    methods: {
        async signInWithGoogle() {
            const provider = new this.$fireModule.default.auth.GoogleAuthProvider();
            await this.$fire.auth.signInWithPopup(provider).then(res => {
                res.user.getIdToken(true).then(idToken => {
                    localStorage.setItem('access_token', idToken.toString())
                    localStorage.setItem('refresh_token', res.user.refreshToken.toString())
                })
            })

            console.log('login succeeded')

            this.$router.push({
                path: '/profile'
            })
        }
    }
})
</script>

<style lang="postcss" scoped>
.root {
    @apply flex flex-col items-center;
}

.title {
    @apply flex bg-blue-200 h-8 p-2 items-center rounded-full;
}

.button {
    @apply flex bg-blue-100 h-8 p-2 m-2 items-center rounded-xl font-semibold;
}

.button:hover {
    @apply bg-blue-700 text-white;

}

.button:active {
    @apply bg-blue-900 text-gray-200;
}
</style>
