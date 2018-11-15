import Vue from 'vue';
import Router from 'vue-router';

import forum from './router/forum';
import user from './router/user';
import activity from './router/activity';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/activity'
  },
  ...forum,
  ...user,
  ...activity
];

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
