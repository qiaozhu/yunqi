const routes = [
  {
    path: '/user',
    name: 'userHome',
    component: () => import('@/views/user/index.vue'),
    meta: {
      title: '我的'
    }
  }
];
export default routes;
