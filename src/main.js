// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/js/flexible' //屏幕适配

import Vuex from 'vuex'
Vue.use(Vuex)

import Vant from 'vant'
Vue.use(Vant)
import 'vant/lib/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
