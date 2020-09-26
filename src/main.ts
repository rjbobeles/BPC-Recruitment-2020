import Vue from 'vue'
import Vuelidate from 'vuelidate'
import lax from 'lax.js'
import xmodal from 'xmodal-vue'
import VueTilt from 'vue-tilt.js'
import App from './App.vue'
import router from './router'

import '@/assets/scss/tailwind.scss'
import '@/assets/scss/styles.scss'

require('dotenv').config()

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(lax)
Vue.use(xmodal)
Vue.use(VueTilt)
Vue.prototype.$lax = lax

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
