// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    msgs: []
  },

  loadMessages: function() {
    var that = this;
    let url = "http://localhost:8080/message";
    wx.request({
      url: url,
      data: {
        page: 1,
        size: 10
      },
      success(response) {
        let pageInfo = response.data.data
        if (pageInfo != null) {
          that.setData({
            msgs: pageInfo.data
          })
        }
      }
    })
  },

  dialogCtl: function() {
    this.setData({ showDialog: !this.data.showDialog })
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
    // this.loadMessages();
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
    console.log('你触发了下拉更新啦')
    setTimeout(function() {
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('reach bottom refresh')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})