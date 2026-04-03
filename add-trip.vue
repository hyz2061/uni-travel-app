<template>
  <view class="add-trip-page">
    <!-- ... existing code ... -->
    <uni-form :model="form" ref="formRef">
      <uni-form-item label="行程名称">
        <uni-input v-model="form.tripName" placeholder="请输入行程名称" />
      </uni-form-item>
      <!-- ... existing code ... -->
      <button @click="submitTrip">提交</button>
    </uni-form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tripName: ''
      }
    }
  },
  methods: {
    submitTrip() {
      if (!this.form.tripName.trim()) {
        uni.showToast({
          title: '请输入行程名称',
          icon: 'none'
        })
        return
      }
      // 调用 API 或保存到本地
      this.$emit('submit', { name: this.form.tripName })
      uni.navigateTo({ url: '/pages/trip/add-trip' }) // 跳转到行程添加页面
    }
  }
}
</script>