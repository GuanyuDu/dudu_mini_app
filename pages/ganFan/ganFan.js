// pages/ganFan/ganFan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    removeEated: false,
    result: '开封菜',
    thisWeek: [
      {
        week: '周一',
        name: '黄山菜饭'
      },
      {
        week: '周二',
        name: '开封菜'
      },
      {
        week: '周三',
        name: '麻辣烫'
      },
      {
        week: '周四',
        name: '喵喵智选'
      },
      {
        week: '周五',
        name: '-'
      }
    ],
    totalRank: [
      {
        order: 1, 
        name: '喵喵智选',
        count: 10
      },
      {
        order: 2, 
        name: '开封菜',
        count: 8
      },
      {
        order: 3, 
        name: '鱼',
        count: 5
      }
    ]
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