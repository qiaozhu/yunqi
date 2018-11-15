import * as types from './types';
// 由mutation来修改state
const mutations = {
  [types.SET_USER_DATA]: function(state, data) {
    state.userData = data;
  }
};
export default mutations;
