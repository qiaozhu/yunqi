const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/index.vue'),
    meta: {
      title: '购物车'
    }
  }
];
export default routes;
