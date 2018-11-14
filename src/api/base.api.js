// 公用部分api

import config from '@/config/config';
let api = {};

const baseURL = config.baseURL;
api.baseURL = baseURL;

/* ----------公共接口---------- */

// 文件上传 DELETE
api.upload = config.uploadURL + '/common/api/file/upload';

// 是否设置了支付密码
api.isSetting = baseURL + '/account/passwordIsSetting';

// 查询余额 GET
api.balanceSearch = baseURL + '/company/balance';

// 获得企业信息
api.company = baseURL + '/company/companyDetail';

// 获取验证码 POST
api.send = baseURL + '/common/message/send';

// 验证码校验 POST
api.valid = baseURL + '/common/message/valid';

// 获取全部字典数据
api.getSysDictByTypeList = baseURL + '/common/getSysDictByTypeList';

// 获取指定字典数据 参数key
api.getSysDict = baseURL + '/common/getSysDict';

// 关注公司
api.followCompany = baseURL + '/relationship/createFocus';

// 查询省市区数据
api.address = baseURL + '/common/address';

// 获取登陆人权限
api.getUserMenu = baseURL + '/role/getUserMenu';

// 查询消息
api.sysMsgList = baseURL + '/common/sysmsg/list';

export default api;
