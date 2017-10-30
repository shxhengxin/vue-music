/* 打补丁 */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
/* 移动端点击 */
import fastclick from 'fastclick'

import './common/stylus/index.styl'
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
