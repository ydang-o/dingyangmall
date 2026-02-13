const app = getApp()

Page({
  data: {
    username: '',
    password: '',
    code: '',
    uuid: '',
    captchaImg: '',
    captchaEnabled: true,
    loading: false
  },

  onLoad() {
    this.getCaptcha()
  },

  getCaptcha() {
    app.api.getCaptcha().then(res => {
      if (res.captchaEnabled === undefined || res.captchaEnabled) {
        this.setData({
          captchaEnabled: true,
          captchaImg: 'data:image/gif;base64,' + res.img,
          uuid: res.uuid
        })
      } else {
        this.setData({
          captchaEnabled: false
        })
      }
    })
  },

  onUsernameInput(e) {
    this.setData({ username: e.detail.value })
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value })
  },

  onCodeInput(e) {
    this.setData({ code: e.detail.value })
  },

  login() {
    if (!this.data.username || !this.data.password) {
      wx.showToast({ title: '请输入账号和密码', icon: 'none' })
      return
    }
    if (this.data.captchaEnabled && !this.data.code) {
      wx.showToast({ title: '请输入验证码', icon: 'none' })
      return
    }

    this.setData({ loading: true })
    
    app.api.merchantLogin({
      username: this.data.username,
      password: this.data.password,
      code: this.data.code,
      uuid: this.data.uuid
    }).then(res => {
      this.setData({ loading: false })
      if (res.code === 200) { // AjaxResult success code is 200
        wx.setStorageSync('merchantToken', res.token)
        wx.showToast({ title: '登录成功' })
        setTimeout(() => {
          wx.redirectTo({ url: '/pages/merchant/index/index' })
        }, 1000)
      } else {
        wx.showToast({ title: res.msg || '登录失败', icon: 'none' })
        if (this.data.captchaEnabled) {
          this.getCaptcha()
        }
      }
    }).catch(err => {
      this.setData({ loading: false })
      if (this.data.captchaEnabled) {
        this.getCaptcha()
      }
    })
  }
})
