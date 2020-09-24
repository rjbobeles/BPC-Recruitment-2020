<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WOW } from 'wowjs'

export default Vue.extend({
  mounted() {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    })
    window.requestAnimationFrame(this.updateLax)
    wow.init()
  },
  methods: {
    updateLax(): void {
      Vue.prototype.$lax.update(window.scrollY)
      window.requestAnimationFrame(this.updateLax)
    },
  },
  created() {
    Vue.prototype.$lax.setup()
  },
})
</script>
