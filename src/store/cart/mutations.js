import * as types from './types';
// 由mutation来修改state
const mutations = {
  [types.SET_CART_DATA]: function(state, data) {
    state.CARTData = data;
  }
};
export default mutations;
