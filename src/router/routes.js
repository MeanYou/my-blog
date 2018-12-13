/**
 * webpackChunkName: "login" 这段注释为webpack3的新特性，可以单独为该模块生成对应的chunk
 * 减少应用初次加载的大小
 */
const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/features/login/main.vue'),
    title: '登录',
    layout: 'PublicLayout',
    isPublic: true
  },
  {
    name: 'home',
    path: '/',
    redirect: '/blog'
  },
  {
    path: '/blog',
    component: () => import(/* webpackChunkName: "blog" */ '@/features/blog/main.vue'),
    title: '我的博客',
    layout: 'DefaultLayout',
    isPublic: true,
    children: [
      {
        name: 'blogList',
        path: '',
        component: () => import(/* webpackChunkName: "blog" */ '@/features/blog/BlogList.vue')
      },
      {
        name: 'blogDetail',
        path: ':id',
        component: () => import(/* webpackChunkName: "blog" */ '@/features/blog/BlogDetail.vue')
      }
    ]
  },
  {
    name: 'resume',
    path: '/resume',
    component: () => import(/* webpackChunkName: "resume" */ '@/features/resume/main.vue'),
    title: '我的简历',
    layout: 'DefaultLayout',
    isPublic: true
  },
  {
    name: 'account',
    path: '/account',
    component: () => import(/* webpackChunkName: "account" */ '@/features/account/main.vue'),
    title: '个人中心',
    layout: 'DefaultLayout',
    isPublic: false
  }
]

export default routes
