const app = getApp()

Page({
  data: {
    phone: '',
    amount: '',
    code: '',
    loading: false,
    smsText: '获取验证码',
    smsDisabled: false,
    timer: null,
    userInfo: {}
  },

  onLoad() {
    this.getUserInfo()
  },

  getUserInfo() {
    app.api.memberInfo().then(res => {
      this.setData({
        userInfo: res.data
      })
    })
  },

  onPhoneInput(e) {
    this.setData({ phone: e.detail.value })
  },

  onAmountInput(e) {
    this.setData({ amount: e.detail.value })
  },

  onCodeInput(e) {
    this.setData({ code: e.detail.value })
  },

  sendSms() {
    if (this.data.smsDisabled) return
    
    // 这里发送验证码给当前登录用户，而不是接收方
    // 假设后端 validateSmsCode 校验的是当前用户的手机号
    // 前端需要先获取当前用户手机号，或者后端直接发给当前用户
    // 根据 API 设计，sendSmsCode 需要 phone 参数
    
    if (!this.data.userInfo.phone) {
      wx.showToast({ title: '无法获取您的手机号', icon: 'none' })
      return
    }

    app.api.sendSmsCode(this.data.userInfo.phone).then(res => {
      wx.showToast({ title: '验证码已发送', icon: 'none' })
      this.startTimer()
    })
  },

  startTimer() {
    let time = 60
    this.setData({
      smsDisabled: true,
      smsText: time + 's'
    })
    this.data.timer = setInterval(() => {
      time--
      if (time <= 0) {
        clearInterval(this.data.timer)
        this.setData({
          smsDisabled: false,
          smsText: '获取验证码'
        })
      } else {
        this.setData({
          smsText: time + 's'
        })
      }
    }, 1000)
  },

  sendPacket() {
    if (!this.data.phone || this.data.phone.length !== 11) {
      wx.showToast({ title: '请输入正确的接收方手机号', icon: 'none' })
      return
    }
    if (!this.data.amount || this.data.amount <= 0) {
      wx.showToast({ title: '请输入正确的积分数量', icon: 'none' })
      return
    }
    if (!this.data.code) {
      wx.showToast({ title: '请输入验证码', icon: 'none' })
      return
    }
    
    if (this.data.amount > this.data.userInfo.points) {
      wx.showToast({ title: '积分余额不足', icon: 'none' })
      return
    }

    this.setData({ loading: true })
    app.api.sendPacket({
      phone: this.data.phone,
      amount: Number(this.data.amount),
      code: this.data.code
    }).then(res => {
      this.setData({ loading: false })
      if (res.code === 0) {
        wx.showModal({
          title: '发送成功',
          content: res.msg || '红包已发送',
          showCancel: false,
          success: () => {
            wx.navigateBack()
          }
        })
      } else {
        wx.showToast({ title: res.msg, icon: 'none' })
      }
    }).catch(() => {
      this.setData({ loading: false })
    })
  }
})
