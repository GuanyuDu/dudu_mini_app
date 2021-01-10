// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgs: [
      {
        cover: "https://dududu.top/upload/2020/10/28436141-2a955da73c8d4279bc7864dcc34b59df.jpg",
        nickName: "Guanyu",
        message: "今天天气真不戳！( •̀ ω •́ )y",
        createdTime: "2020/01/10 20:01:39",
        top: 1
      },
      {
        cover: "https://dududu.top/upload/2021/01/cartoon-cover-03-6ba9d7692984462891c3bb7f16af9d55.png",
        nickName: "Neko",
        message: "miao wow ~，マスターは今日家にいません",
        createdTime: "2020/01/10 20:01:39",
        top: 0
      },
      {
        cover: "https://dududu.top/upload/2021/01/cartoon-cover-01-7824e8c6b020495b952b5bb7255c03ab.png",
        nickName: "Sakura",
        message: "新年快乐",
        createdTime: "2020/01/1 00:00:01",
        top: 0
      },
      {
        cover: "https://dududu.top/upload/2021/01/cartoon-cover-02-459a6561af1148448ef02656d6a5bcc3.png",
        nickName: "Kuri Sama",
        message: "鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。",
        createdTime: "2020/01/1 00:00:01",
        top: 0
      },
      {
        cover: "https://dududu.top/upload/2021/01/cartoon-cover-01-7824e8c6b020495b952b5bb7255c03ab.png",
        nickName: "Sakura",
        message: "从今四海永为家，不用长江限南北",
        createdTime: "2020/01/1 00:00:01",
        top: 0
      },
      {
        cover: "https://dududu.top/upload/2021/01/cartoon-cover-01-7824e8c6b020495b952b5bb7255c03ab.png",
        nickName: "Sakura",
        message: "竹影和诗瘦，梅花入梦香",
        createdTime: "2020/01/1 00:00:01",
        top: 0
      }
    ],
    finalMsgs: []
  },

  pickupColor: function() {
    let arr = this.data.msgs;
    arr.forEach((item) => {
      item.cardColor = '#d0d0d0'
    })
    this.setData({
      msgs: arr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pickupColor()
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