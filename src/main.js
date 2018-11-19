import Vue from 'vue'
import App from './App.vue'

import loader from './components/shared/loader'
Vue.component('loader', loader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
