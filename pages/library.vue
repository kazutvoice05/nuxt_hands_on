<template>
  <div class="flex flex-col justify-center bg-image" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
    <AppBar/>
    <div class="flex justify-center">
      <div>
        <!-- left mergin -->
      </div>
      <div class="flex flex-col justify-center">
        <div class="flex justify-center">
          <youtube :video-id="videoId" ref="youtube" :playerVars="playerVars" @playing="playing"></youtube>
        </div>
        <div class="flex justify-center">
          <button class="player-button" @click="playVideo">Play</button>
          <button class="player-button" @click="pauseVideo">Pause</button>
        </div>
      </div>
      <div>
        <!-- right mergin -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  name: 'library',
  async setup() {
    // this.bgImageUrl = await this.getBackgroundImageUrl()
  },
  data() {
    return {
      videoId: 'spa88tPh2HE',
      playerVars: {
        autoplay: 1,
      },
      bgImageUrl: 'https://firebasestorage.googleapis.com/v0/b/nuxt-hands-on.appspot.com/o/bg.jpeg?alt=media&token=abedd2ab-f401-454a-88ff-248b6392ee6e',
    }
  },
  methods: {
    async getBackgroundImageUrl () {
      let ref = this.$fire.storage.ref('bg.jpeg')
      let url = await ref.getDownloadURL()
      console.log(url)
      return url
    },
    playVideo() {
      this.player.playVideo()
    },
    pauseVideo() {
      this.player.pauseVideo()
    },
    playing() {
      console.log("\o/ we are watching!!!")
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  }
}
</script>

<style lang="postcss" scoped>
.bg-image {
  background-size: cover;
}

.player-button {
  @apply w-1/2 font-serif text-white font-medium text-center;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,24,1) 34%, rgba(0,212,255,1) 100%);
}
</style>