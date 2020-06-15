import Vue from 'vue'
import VModal from 'vue-js-modal'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import router from './router'
import apolloClient from "./vue-apollo";
import './assets/style/main.pcss';

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)

Vue.config.productionTip = false

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')