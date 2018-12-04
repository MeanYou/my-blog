const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/features/login/main.vue'),
    title: '登录',
    layout: 'PublicLayout',
    isPublic: true
  },
  {
    name: 'home',
    path: '/',
    component: () => import('@/features/resume/main.vue'),
    title: '我的博客',
    layout: 'DefaultLayout',
    isPublic: true
  },
  {
    name: 'blog',
    path: '/blog',
    component: () => import('@/features/blog/main.vue'),
    title: '我的博客',
    layout: 'DefaultLayout',
    isPublic: true
  },
  {
    name: 'resume',
    path: '/resume',
    component: () => import('@/features/resume/main.vue'),
    title: '我的简历',
    layout: 'DefaultLayout',
    isPublic: true
  },
  {
    name: 'account',
    path: '/account',
    component: () => import('@/features/account/main.vue'),
    title: '个人中心',
    layout: 'DefaultLayout',
    isPublic: false
  }
]

export default routes
