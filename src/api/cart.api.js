import baseApi from './base.api';

const baseURL = baseApi.baseURL;
let api = { ...baseApi };

/* ----------煤炭商城---------- */

// 企业登入 GET
api.login = baseURL + '/company/login';
// 煤炭商城列表
api.coalSupplyList = baseURL + '/goods/findHomeGoodsList';
// 煤炭商城详情
api.businessInfoList = baseURL + '/company/pageCompanyList';
// 确定关注
api.createFlw = baseURL + '/relationship/createFocus';
// 取消关注
api.delFlw = baseURL + '/relationship/deleteFocusByCondition';

export default api;
