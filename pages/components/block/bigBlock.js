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
    description: {
      type: String,
      value: '今天吃什么，这是个问题'
    }
  },
  data: {
    
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})