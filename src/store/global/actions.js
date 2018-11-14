import * as types from './types';

// 这是修改state的入口
// 定义方法  读取type   提交conmit
// conmit操作对象指向mutation  mutation修改state
export default {
  setgGlobalData({ commit }, data) {
    commit(types.SET_GLOBAL_DATA, data);
  }
};
