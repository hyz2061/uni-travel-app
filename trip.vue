methods: {
  async syncData() {
    try {
      await this.$api.syncTripData()
      uni.showToast({
        title: '同步成功！',
        icon: 'success'
      })
    } catch (error) {
      uni.showToast({
        title: '同步失败，请重试',
        icon: 'none'
      })
    }
  }
}