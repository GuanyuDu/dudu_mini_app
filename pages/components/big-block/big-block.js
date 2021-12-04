Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    category: {
      type: String,
      value: '小工具'
    },
    title: {
      type: String,
      value: '干饭生成器',
    },
    des: {
      type: String,
      value: '今天吃什么，这是个问题'
    },
    image: {
      type: String,
      value: ''
    }
  },
  data: {
    
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})