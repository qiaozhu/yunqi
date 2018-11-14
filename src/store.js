import Vue from 'vue';
import Vuex from 'vuex';

import global from './store/global';
import cart from './store/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...global.state,
    ...cart.state
  },
  mutations: {
    ...global.mutations,
    ...cart.mutations
  },
  actions: {
    ...global.actions,
    ...cart.actions
  }
});
