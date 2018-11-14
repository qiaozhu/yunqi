import * as types from './types';
// 由mutation来修改state
const mutations = {
  [types.SET_GLOBAL_DATA]: function(state, data) {
    state.globalData = data;
  }
};
export default mutations;
