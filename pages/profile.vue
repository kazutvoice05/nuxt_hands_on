<template>
    <div class="flex flex-col">
        <AppBar/>
        <div class="flex flex-col bg-gray-200 items-center">
            <h1 class="">User Profile</h1>
            <p class="" v-if="User != null">Your e-mail is {{ User.email }}</p>
            <button @click="logout">Logout</button>
        </div>
        <div class="flex flex-col">
            <div class="text-center">TEST</div>
            <div class="card">
                <form class="form-main" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeChsfyWbS74SgQO_EZRXvSqMOy4wqrNk--mIYz1c_kz8rYdg/formResponse" target="_self" method="POST" id="mG61Hd">
                    <h1 class="form-header">出欠フォーム</h1>
                    <div class="form-box">
                        <h2>質問1: 参加されますか？</h2>
                        <div>
                            <input type="radio" name="entry.877086558" value="はい、参加します">はい、参加します
                        </div>
                        <div>
                            <input type="radio" name="entry.877086558" value="いいえ、参加できません">いいえ、参加できません
                        </div>
                        <h2>質問2: 参加者の名前をご記入ください。</h2>
                        <input type="text" name="entry.1498135098"><br>
                        <h2>質問3: 何期生ですか？</h2>
                        <select name="entry.2029020894">
                            <option value="1期生">1期生</option>
                            <option value="2期生">2期生</option>
                            <option value="3期生">3期生</option>
                            <option value="4期生">4期生</option>
                            <option value="5期生">5期生</option>
                            <option value="6期生">6期生</option>
                            <option value="7期生">7期生</option>
                            <option value="8期生">8期生</option>
                            <option value="9期生">9期生</option>
                            <option value="10期生">10期生</option>
                        </select>
                        <br>
                    </div>
                    <button class="submit-button" type="submit">送信</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    layout: 'default',
    name: 'profile',
    middleware: 'loginAuth',
    setup() {
    },
    data() {
        return {
            User: this.$store.state.authUser
        }
    },
    methods: {
        async logout () {
            await this.$fire.auth.signOut()
        }
    }
})
</script>

<style scoped>
.card {
    @apply flex flex-col;
}

.form-header {
    @apply font-bold bg-green-500 flex justify-center w-full
}

.form-main {
    @apply flex flex-col items-center bg-gray-300
}

.form-box{
    @apply md:w-96 md:px-8
}

h2 {
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 20%; /*--幅--*/
	margin: 1em 0;
	padding: .5em 1em;
	font-size: 16px;
	border-radius: 30px;
	border: solid 2px rgb(204, 204, 204);
	background-repeat: no-repeat;
	background-size: 18px 10px;
    background-position: right 20px center;
	background-color: #fff;
}

.submit-button {
    @apply font-bold bg-green-500 flex justify-center w-full
}
</style>
