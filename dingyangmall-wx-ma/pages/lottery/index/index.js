const api = require('../../../utils/api.js')
const app = getApp()

Page({
  data: {
    userInfo: {},
    config: {},
    recordList: [],
    loading: false
  },
  onShow() {
    this.getUserInfo()
    this.getConfig()
    this.getRecords()
  },
  getUserInfo() {
    api.memberInfo().then(res => {
      this.setData({ userInfo: res.data })
    })
  },
  getConfig() {
    api.lotteryConfig().then(res => {
      if (res.code === 0) {
        this.setData({ config: res.data })
      } else {
        // If no active config, maybe redirect or show message
        // For now, just show empty state handled by wx:if
      }
    })
  },
  getRecords() {
    api.lotteryRecord().then(res => {
      if (res.code === 0) {
        this.setData({ recordList: res.data })
      }
    })
  },
  handleDraw() {
    if (!this.data.config.id) {
       wx.showToast({ title: '活动未开启', icon: 'none' })
       return
    }
    if (this.data.userInfo.points < this.data.config.costPoints) {
      wx.showToast({ title: '积分不足', icon: 'none' })
      return
    }
    
    this.setData({ loading: true })
    api.lotteryDraw().then(res => {
      this.setData({ loading: false })
      if (res.code === 0) {
        const record = res.data
        if (record.isWin === '1') {
          wx.showModal({
            title: '恭喜中奖',
            content: `获得 ${record.prizeName}`,
            showCancel: false
          })
        } else {
          wx.showToast({ title: '很遗憾未中奖', icon: 'none' })
        }
        this.getUserInfo() // Refresh points
        this.getRecords() // Refresh records
      } else {
        wx.showToast({ title: res.msg, icon: 'none' })
      }
    }).catch(() => {
      this.setData({ loading: false })
    })
  }
})
