<template>
  <div class="flex flex-col">
    <AppBar/>
    <div>
      {{ $store.state.post.title }}
    </div>
    <button class="bg-blue-500" v-on:click="$store.dispatch('updatePostAction')">GetPost</button>
    <Tutorial/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
