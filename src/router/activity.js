const routes = [
  {
    path: '/activity',
    name: 'activityHome',
    component: () => import('@/views/activity/index.vue'),
    meta: {
      title: '活动'
    }
  }
];
export default routes;
