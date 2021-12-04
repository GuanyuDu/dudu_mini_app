let app = require('../app');
let { domain } = app;

/**
 * 获取可见消息列表
 */
export function getMessageList(currentPage, pageSize) {

  return new Promise((resolve, reject) => {
    wx.request({
      method: 'GET',
      url: domain + '/message',
      data: {
        page: currentPage,
        size: pageSize
      },
      success: res => resolve(res.data),
      fail: res => reject(res)
    });
  });
}