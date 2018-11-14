const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: () => import('@/views/goods/index.vue'),
    meta: {
      title: '商品详情'
    }
  }
];
export default routes;
