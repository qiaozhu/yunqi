const routes = [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index.vue'),
    meta: {
      title: '会员中心'
    }
  }
];
export default routes;
