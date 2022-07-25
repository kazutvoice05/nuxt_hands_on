<template>
  <div class="f-col h-screen">
    <header>Header</header>
    <div class="f-row h-screen">
      <nav>left</nav>
      <main>center</main>
      <aside>right</aside>
    </div>
    <footer>Footer</footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  name: 'admin',
  middleware: ['loginAuth', 'roleAuth'],
  setup() {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="postcss" scoped>
.tmp-outline {
  outline: 1px solid;
}

.f-row {
  @apply flex tmp-outline justify-between
}

.f-col {
  @apply flex flex-col tmp-outline justify-between
}

header {
  @apply bg-green-300 tmp-outline h-12;
}

nav {
  @apply hidden bg-yellow-300 tmp-outline w-48 md:flex;
}

main {
  @apply 
    flex flex-1 bg-yellow-300 justify-around
    tmp-outline;
}

aside {
  @apply hidden bg-yellow-300 tmp-outline w-60 lg:flex;
}

footer {
  @apply bg-blue-300 tmp-outline h-12;
}
</style>
