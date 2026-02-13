const app = getApp()

Page({
  data: {
    showUserModal: false,
    userInfo: {},
    pointsToGive: '',
    memberCode: ''
  },

  onLoad() {
    let token = wx.getStorageSync('merchantToken')
    if (!token) {
      wx.redirectTo({ url: '/pages/merchant/login/index' })
    }
  },

  scanUser() {
    wx.scanCode({
      success: (res) => {
        // 假设扫码结果即为 memberCode
        let code = res.result
        // 有些码可能包含前缀，需按需处理，这里假设纯code
        this.fetchUserInfo(code)
      }
    })
  },

  fetchUserInfo(code) {
    wx.showLoading({ title: '查询中' })
    app.api.merchantScanUser(code).then(res => {
      wx.hideLoading()
      if (res.code === 200) {
        this.setData({
          userInfo: res.data,
          memberCode: code,
          showUserModal: true
        })
      } else {
        wx.showToast({ title: res.msg || '无效的会员码', icon: 'none' })
      }
    }).catch(() => wx.hideLoading())
  },

  scanCoupon() {
    wx.scanCode({
      success: (res) => {
        let code = res.result
        this.verifyCoupon(code)
      }
    })
  },

  verifyCoupon(code) {
    wx.showModal({
      title: '确认核销',
      content: '确定要核销该商品券吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showLoading({ title: '核销中' })
          app.api.merchantVerifyCoupon({ couponCode: code }).then(res => {
            wx.hideLoading()
            if (res.code === 200) {
              wx.showToast({ title: '核销成功' })
            } else {
              wx.showToast({ title: res.msg || '核销失败', icon: 'none' })
            }
          }).catch(() => wx.hideLoading())
        }
      }
    })
  },

  hideUserModal() {
    this.setData({ showUserModal: false, pointsToGive: '' })
  },

  onPointsInput(e) {
    this.setData({ pointsToGive: e.detail.value })
  },

  givePoints() {
    if (!this.data.pointsToGive || this.data.pointsToGive <= 0) {
      wx.showToast({ title: '请输入有效积分', icon: 'none' })
      return
    }
    
    wx.showLoading({ title: '处理中' })
    app.api.merchantGivePoints({
      memberCode: this.data.memberCode,
      points: Number(this.data.pointsToGive)
    }).then(res => {
      wx.hideLoading()
      if (res.code === 200) {
        wx.showToast({ title: '赠送成功' })
        this.hideUserModal()
      } else {
        wx.showToast({ title: res.msg || '赠送失败', icon: 'none' })
      }
    }).catch(() => wx.hideLoading())
  },

  logout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('merchantToken')
          wx.reLaunch({ url: '/pages/merchant/login/index' })
        }
      }
    })
  }
})
