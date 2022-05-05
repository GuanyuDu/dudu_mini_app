//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})

/**
 * 小程序后端服务请求路径
 */
export const domain = 'http://127.0.0.1';

/**
 * 颜色选择器参数
 */
let index = 0;
const colors = [
  "rgba(136, 136, 136, 0.3)",
  "rgba(255, 141, 18, 0.3)",
  "rgba(56, 194, 63, 0.3)",
  "rgba(17, 140, 255, 0.3)",
  "rgba(255, 140, 179, 0.3)",
  "rgba(77, 120, 185, 0.3)"
]
/**
 * 顺序颜色选择器方法
 */
export function getColor() {
  index++;
  if (index >= colors.length) {
    index = 0;
  }
  return colors[index];
}

export function getColorByHash(hashCode) {
  let hashCodeStr = hashCode.toString();
  let num = hashCodeStr.substring(hashCodeStr.length - 2, hashCodeStr.length - 1);
  if (num >= colors.length) {
    num = 0;
  }
  console.log(num)
  return colors[num];
}

export function hashCode() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};