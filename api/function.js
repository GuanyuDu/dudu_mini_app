let app = require('../app');
let { domain } = app;

/**
 * 获取转换后的下载链接
 */
export function shareLinkTransform(shareLink) {

    return new Promise((resolve, reject) => {
      wx.request({
        method: 'GET',
        url: domain + '/function/tiktok_transform',
        data: {
            share_link: shareLink
        },
        success: res => resolve(res.data),
        fail: res => reject(res)
      });
    });
  }