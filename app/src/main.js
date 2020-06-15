import Vue from 'vue'
import VModal from 'vue-js-modal'

import App from './App.vue'
import router from './router'
import './assets/style/main.pcss';

Vue.config.productionTip = false

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')