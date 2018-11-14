import Vue from 'vue';
import Router from 'vue-router';

import goods from './router/goods';
import cart from './router/cart';
import user from './router/user';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/goods'
  },
  ...goods,
  ...cart,
  ...user
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
