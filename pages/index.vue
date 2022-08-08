<template>
  <div class="flex flex-col">
    <AppBar/>
    <div>
      {{ $store.state.post.title }}
    </div>
    <button class="bg-blue-500" v-on:click="$store.dispatch('updatePostAction')">GetPost</button>
    <div>
        firestore Data: {{ message }}
    </div>
    <button v-on:click="getFirebase">AccessFirebase</button>
    <Tutorial/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  setup() {
  },
  data() {
    return {
      message: "asdfdsa"
    }
  },
  methods: {
    async getFirebase() {
      try {
        console.log("env: " + process.env.NODE_ENV)
        const query = await this.$fire.firestore.collection('data').get()

        const docs = []
        query.forEach((doc) => {
          var data = doc.data()
          var record = [doc.id, data.name, data.user_id]
          console.log(record)
          docs.push(record)
        })

        this.message = docs
      } catch (err) {
        console.log(err)
        console.log('failed to fetch data from firebase.')
      }
    }
  }
}
</script>
