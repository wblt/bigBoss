// pages/customer/customer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    hiddenmodalput: true,
        //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框 
    ary:[1,2,3,4,5,6,7,8],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击按钮痰喘指定的hiddenmodalput弹出框  
    modalinput: function () {
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput
      })
    },
    //取消按钮  
    cancel: function () {
      this.setData({
        hiddenmodalput: true
      });
    },
    //确认  
    confirm: function () {
      this.setData({
        hiddenmodalput: true
      })
    },
    lookmore:function(e) {
      var index = parseInt(e.currentTarget.dataset.index);
      console.log(index);

      wx.navigateTo({
        url: '../customer/dynamic/dynamic?index='+index
      })
    }
  }
})
