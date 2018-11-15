const routes = [
  {
    path: '/forum',
    name: 'forumHome',
    component: () => import('@/views/forum/index.vue'),
    meta: {
      title: '论坛'
    }
  }
];
export default routes;
