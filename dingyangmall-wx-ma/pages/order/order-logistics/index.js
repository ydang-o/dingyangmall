const app = getApp()

Page({
  data: {
    orderLogistics: {}
  },
  onLoad: function (options) {
    this.getLogistics(options.id)
  },
  getLogistics(id) {
    app.api.orderLogistics(id).then(res => {
      this.setData({
        orderLogistics: res.data
      })
    })
  },
  copyNo() {
    wx.setClipboardData({
      data: this.data.orderLogistics.logisticsNo,
      success: function () {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }
})
