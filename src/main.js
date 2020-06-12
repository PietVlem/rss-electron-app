import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/main.pcss';

import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
