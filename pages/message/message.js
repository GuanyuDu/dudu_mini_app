// pages/message/message.js
const messageApi = require('../../api/message');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    currentPage: 1,
    pageSize: 5,
    msgs: []
  },

  /**
   * 加载消息列表
   */
  loadMessages: function() {
    let that = this;
    let currentPage = that.data.currentPage;
    let pageSize = that.data.pageSize;
    // 请求消息列表接口
    messageApi.getMessageList(currentPage, pageSize).then(res => {
      // 创建一个新的消息集合
      let newMsgs = res.data.data;
      if (newMsgs.length == 0) {
        wx.showToast({
          title: '没有啦',
          icon: 'none',
          duration: 1000
        })
      }
      let expandMsgs = that.data.msgs.concat(newMsgs);
      that.setData({
        msgs: expandMsgs
      })
    }).catch(res => {
      console.log('Oh! http request encounter a error! msg = ' + JSON.stringify(res));
    })
  },

  dialogCtl: function() {
    this.setData({ showDialog: !this.data.showDialog });
  },

  confirmEvent: function() {
    this.setData({ showDialog: false })
    console.log('trigger confirm event')
  },

  cancelEvent: function() {
    this.setData({ showDialog: false })
    console.log('trigger cancel event')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载消息列表
    this.loadMessages();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    // 重新加载消息列表，这里做的比较搓，应该先拿数据等一定时间后再渲染页面
    setTimeout(() => {
      // 清空当前消息列表，并重置当前页为第一页
      this.setData({ msgs: [], currentPage: 1 });
      this.loadMessages();
      wx.stopPullDownRefresh();
    }, 1000);
    setTimeout(() => {
      wx.showToast({
        title: '更新成功',
        icon: 'success',
        duration: 1000
      })
    }, 800);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 更新当前页，再请求消息列表
    let nextPage = this.data.currentPage + 1;
    this.setData({
      currentPage: nextPage
    })
    this.loadMessages()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})