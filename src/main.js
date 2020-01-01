import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //给$bus赋值（Vue实例）
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
