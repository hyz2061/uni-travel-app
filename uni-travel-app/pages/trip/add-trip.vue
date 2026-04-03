<template>
  <view class="add-trip-page">
    <!-- ... existing code ... -->
    <view class="input-container">
      <input
        v-model="tripName"
        placeholder="请输入行程名称"
        class="input-field"
      />
    </view>
    <!-- ... existing code ... -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      tripName: ''
    }
  },
  methods: {
    // 提交行程
    submitTrip() {
      if (!this.tripName.trim()) {
        uni.showToast({
          title: '请输入行程名称',
          icon: 'none'
        })
        return
      }
      // 调用 API 或保存到本地
      this.$emit('submit', { name: this.tripName })
    }
  }
}
</script>