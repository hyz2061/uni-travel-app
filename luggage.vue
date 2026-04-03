methods: {
  showLuggageDetail() {
    uni.showModal({
      title: '行李详情',
      content: `物品名称：${this.item.name}\n重量：${this.item.weight}kg\n备注：${this.item.note}`,
      confirmText: '确定',
      cancelText: '取消',
      showCancel: true,
      confirmColor: '#007aff', // 根据Figma设计调整颜色
      cancelColor: '#808080'   // 根据Figma设计调整颜色
    })
  }
}