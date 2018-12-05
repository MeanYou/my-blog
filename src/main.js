import Vue from 'vue'
import store from './store'
import { sync } from 'vuex-router-sync'
import { http } from './http'
import router from './router'
import auth from './auth'
import App from './App'
import myMock from './mock/mock'
import registDirective from './util/directive'

Vue.config.productionTip = false

// 路由与vuex保持同步
sync(store, router)

// 安装http和auth
Vue.use(http)
Vue.use(auth)

// mockJS拦截API请求
myMock.intercept()
myMock.setup()

// 注册自定义指令
registDirective()

// 注册全局组件
// Vue.component('AppFooter', AppFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
