import baseApi from './base.api';

const baseURL = baseApi.baseURL;
let api = { ...baseApi };

/* ----------供需管理---------- */

// 关注公司列表
api.flwCompanyList = baseURL + '/relationship/focusCompany';
// 关注公司详情
api.companyDetail = baseURL + '/company/companyDetail';
// 关注的商品列表
api.flwGoodList = baseURL + '/relationship/focusGoods';
// 关注的商品详情
api.flwGoodsDtl = baseURL + '/goods/findHomeDetail';

// 添加的商户列表all
api.allCompanyList = baseURL + '/company/pageCompanyList';
// 确定关注
api.createFlw = baseURL + '/relationship/createFocus';
// 取消关注
api.delFlw = baseURL + '/relationship/deleteFocusByCondition';

export default api;
