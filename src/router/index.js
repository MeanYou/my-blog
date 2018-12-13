import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(Router)

/**
 * 未认证用户无法访问的守卫路由
 */
function guardRoute (to, from, next) {
  const auth = router.app.$options.store.state.auth

  if (!auth.isLoggedIn) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
}

const router = new Router({
  base: '/',
  routes: routes.map(route => {
    if (route.redirect) {
      return {
        name: route.name,
        path: route.path,
        redirect: route.redirect
      }
    } else {
      return {
        name: route.name,
        path: route.path,
        component: route.component,
        children: route.children || null,
        beforeEnter: (to, from, next) => {
          // 进入路由之前的钩子，进行一些设置
          // document.title = route.title
          store.dispatch('common/updateTitle', route.title)
          store.dispatch('common/updateLayout', route.layout)

          // 未认证页面进入守卫路由跳转到登录页
          if (!route.isPublic) return guardRoute(to, from, next)

          next()
        }
      }
    }
  })
})

export default router
