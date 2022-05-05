// pages/tiktokExport/tiktokExport.js
const functionApi = require('../../api/function');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    focusInput: false,
    clipboard: '',
    displayUrls: [],
    urls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 检测分享链接
   */
  checkShareLink: function() {
    // 如果能读取到用户剪切板再往下走
    this.readClipboard().then(clipboard => {
      clipboard.indexOf('douyin')
      if (clipboard.indexOf('douyin') >= 0) {
        this.setData({ clipboard: clipboard });
        this.showDialog('发现抖音分享链接是否使用？\n\n' + clipboard);
      }
    });
  },

  /**
   * 读取用户剪切板
   */
  readClipboard: function() {
    return new Promise((resolve, reject) => {
      wx.getClipboardData({
        success: res => resolve(res.data),
        fail: res => reject(res)
      });
    });
  },

  /**
   * dialog 提示框
   * @param {string} message message content
   */
  showDialog: function(message) {
    let that = this;
    wx.showModal({
      title: '提示',
      content: message,
      success(res) {
        if (res.confirm) {
          that.setData({ inputValue: that.data.clipboard });
          // 请求链接转换接口
          that.transformShareLink();
        } else if (res.cancel) {
          that.setData({ focusInput: true });
          console.log(that.data.focusInput);
        }
      }
    });
  },

  /**
   * 分享链接转换
   */
  transformShareLink: function() {
    let that = this;
    let shareLink = that.data.inputValue;
    if (shareLink == null || shareLink === '') {
      wx.showToast({
        title: '要填链接啦，大笨蛋',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    wx.vibrateShort({ type: 'medium' });
    wx.showLoading({
      title: '拼命转换中',
    })
    functionApi.shareLinkTransform(shareLink).then(res => {
      wx.hideLoading({ success: (res) => {}, })
      let code = res.code;
      if (code == 0) {
        let urlArray = res.data;
        that.setData({ urls: urlArray });
        let displayArray = [];
        urlArray.forEach((item, index, array) => {
          displayArray.push(urlArray.length > 1 ? item.slice(0, 70) + '...' : item);
        });
        that.setData({ displayUrls: displayArray });

      } else if (code == 2001) {
        wx.showToast({
          title: '主人的链接有问题哦',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.showToast({
          title: '糟糕，服务酱没有理你，还向你丢了一只 🐞',
          icon: 'none',
          duration: 3000
        })
      }
    })
    that.setData({ inputValue: '' });
  },

  /**
   * 复制链接到剪切板
   * @param {Object} event 事件
   */
  copyUrlToClipboard: function(event) {
    wx.vibrateShort({ type: 'light' });
    let that = this;
    let index = event.target.dataset.idx;
    let url = that.data.urls[index];
    wx.setClipboardData({
      data: url,
      success: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.checkShareLink();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})