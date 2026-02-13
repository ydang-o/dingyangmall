const app = getApp()
Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    tabList: [{
      id: 1,
      name: '未使用'
    }, {
      id: 2,
      name: '已使用'
    }, {
      id: 3,
      name: '已过期'
    }],
    coupons: [],
    status: 1 // 默认显示未使用
  },
  onLoad(options) {
    this.getCoupons()
  },
  tabSelect(e) {
    let index = e.currentTarget.dataset.id;
    this.setData({
      TabCur: index,
      scrollLeft: (index - 1) * 60,
      status: this.data.tabList[index].id,
      coupons: []
    }, () => {
      this.getCoupons()
    })
  },
  getCoupons() {
    app.api.couponMy(this.data.status)
      .then(res => {
        if(res.code == 0){
          this.setData({
            coupons: res.data
          })
        }
      })
  }
})