import Vue from 'vue'
import Vuelidate from 'vuelidate'
import xmodal from 'xmodal-vue'
import VueTilt from 'vue-tilt.js'
import VueRellax from 'vue-rellax'
import VueSmoothScroll from 'vue2-smooth-scroll'
import App from './App.vue'
import router from './router'

import '@/assets/scss/tailwind.scss'
import '@/assets/scss/styles.scss'

require('dotenv').config()

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(xmodal)
Vue.use(VueTilt)
Vue.use(VueRellax)
Vue.use(VueSmoothScroll, {
  duration: 1000,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
