<template>
  <view class="trip-page">
    <!-- ... existing code ... -->
    <view v-if="syncStatus" class="sync-status">
      {{ syncStatus }}
    </view>
    <!-- ... existing code ... -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      syncStatus: ''
    }
  },
  methods: {
    async syncData() {
      try {
        await this.$api.syncTripData()
        this.syncStatus = '同步成功！'
        setTimeout(() => {
          this.syncStatus = ''
        }, 2000)
      } catch (error) {
        this.syncStatus = '同步失败，请重试'
        setTimeout(() => {
          this.syncStatus = ''
        }, 3000)
      }
    }
  }
}
</script>