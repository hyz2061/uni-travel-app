<template>
  <view class="luggage-item" @click="showLuggageDetail">
    <text>{{ item.name }}</text>
    <!-- ... existing code ... -->
  </view>
</template>

<script>
export default {
  methods: {
    showLuggageDetail() {
      uni.showModal({
        title: '行李详情',
        content: `物品名称：${this.item.name}\n重量：${this.item.weight}kg\n备注：${this.item.note}`,
        confirmText: '确定',
        cancelText: '取消'
      })
    }
  }
}
</script>