import Vue from 'vue';
import Vuex from 'vuex';

import global from './store/global';
import user from './store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...global.state,
    ...user.state
  },
  mutations: {
    ...global.mutations,
    ...user.mutations
  },
  actions: {
    ...global.actions,
    ...user.actions
  }
});
