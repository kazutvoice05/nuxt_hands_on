<template>
  <div class="flex flex-col">
    <AppBar/>
    <Tutorial/>
    <div>
      {{ $store.state.post.title }}
    </div>
    <button v-on:click="$store.dispatch('updatePostAction')">GetPost</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
