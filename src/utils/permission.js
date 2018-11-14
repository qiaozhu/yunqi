// 获取权限
import axios from '@/utils/axios';
import api from '@/api/base.api';

let permission = {};

permission.getPermission = (
  options = {
    currentPage: '', // 当前选中的页面
    showLoading: false, // 是否显示loading
    isBackError: true // 请求出错是否resolve
  }
) => {
  return new Promise((resolve, reject) => {
    let res = axios.get(api.getUserMenu, {
      params: { roleId: '' },
      silence: !options.showLoading
    });
    res
      .then(response => {
        let currentPageID = ''; // 当前选中的页面ID
        let navData = []; // 头部nav
        let sideData = []; // 侧栏menu
        let permissionList = []; // 平行结构权限
        response.data = response.data || [];
        response.data.forEach(element1 => {
          if (element1.childrenList.length > 0) {
            if (!element1.ishide) {
              const navItem = { ...element1 };
              delete navItem.childrenList;
              navData.push(navItem);
              if (navItem.target == options.currentPage) currentPageID = navItem.id;
            }

            element1.childrenList.forEach(element2 => {
              if (element2.childrenList.length > 0) {
                if (element2.parentId == currentPageID) {
                  const menuItem = { ...element2 };
                  delete menuItem.childrenList;
                  sideData.push(menuItem);
                }
                element2.childrenList.forEach(element3 => {
                  permissionList.push(element3.permission);
                });
              }
            });
          }
        });
        resolve({ navData, sideData, permissionList });
      })
      .catch(error => {
        // window.location.href = './static/500.html';
        if (options.isBackError) {
          resolve({ error: true, message: error });
        } else {
          reject({ error: true, message: error });
        }
      });
  });
};
export default permission;
