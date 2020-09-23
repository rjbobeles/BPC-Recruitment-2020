<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    window.requestAnimationFrame(this.updateLax)
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
