import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'


import http  from './api/api'
import DBHelper from './api/DBHelper'
import md5 from 'js-md5'


import '../src/assets/css/style.css'

import '../src/assets/css/bootstrap.min.css'

Vue.prototype.$http = http;
Vue.prototype.$DBHelper = DBHelper;
Vue.prototype.$MD5 = md5;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
