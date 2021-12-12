// pages/components/dialog-card/dialog-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showDialog: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '提示'
    },
    confirmText: {
      type: String,
      value: '确定'
    },
    cancelText: {
      type: String,
      value: '取消'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm: function() {
      this.triggerEvent('confirm')
    },
    cancel: function() {
      this.triggerEvent('cancel')
    }
  }
})
