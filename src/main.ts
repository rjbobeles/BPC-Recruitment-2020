import Vue from "vue";
import lax from "lax.js";
import App from "./App.vue";
import router from "./router";

import "@/assets/scss/tailwind.scss";
import "@/assets/scss/styles.scss";

Vue.config.productionTip = false;

declare module "vue/types/vue" {
  interface Vue {
    $lax: any;
  }
}

Vue.prototype.$lax = lax;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
