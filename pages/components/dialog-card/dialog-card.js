// pages/components/dialog-card/dialog-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showDialog: {
      type: Boolean,
      value: false
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
