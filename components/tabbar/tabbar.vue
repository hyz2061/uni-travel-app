<template>
  <!-- 底部TabBar容器：绝对固定在屏幕底部 -->
  <view class="tab-bar-container">
    <!-- 红色背景底条 -->
    <view class="tab-bar-bg"></view>

    <!-- 1. 主页 -->
    <view class="tab-item" style="left: 15%;" @click="goTo('/pages/index/index')">
      <text class="text">主页</text>
    </view>

    <!-- 2. 旅程 -->
    <view class="tab-item" style="left: 35%;" @click="goTo('/pages/trip/trip')">
      <text class="text">旅程</text>
    </view>

    <!-- 3. 中间加号按钮 -->
    <view class="add-btn" @click="goTo('/pages/add-name/add-name')">
      <text class="plus">+</text>
    </view>

    <!-- 4. 消息 -->
    <view class="tab-item" style="left: 65%;" @click="goTo('/pages/message/message')">
      <text class="text">消息</text>
    </view>

    <!-- 5. 我的 -->
    <view class="tab-item" style="left: 85%;" @click="goTo('/pages/profile/profile')">
      <text class="text">我的</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goTo(url) {
      const tabUrls = ['/pages/index/index', '/pages/trip/trip', '/pages/message/message', '/pages/profile/profile']
      
        uni.navigateTo({ url })
    }
  }
}
</script>

<style>
/* 核心修正：position: fixed 固定在屏幕底部，z-index 确保不被遮挡 */
.tab-bar-container {
  position: fixed; /* 关键！固定在视口底部，不是相对定位 */
  bottom: 0;       /* 贴紧屏幕最底部 */
  left: 0;
  right: 0;
  z-index: 9999;   /* 最高层级，避免被页面内容覆盖 */
  width: 100%;
  height: 100rpx;
}

/* 红色背景底条：贴紧容器底部 */
.tab-bar-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80rpx;
  background-color: #ff3b30;
  border-radius: 20rpx 20rpx 0 0;
}

/* 单个Tab项：绝对定位，在容器内垂直居中 */
.tab-item {
  position: absolute;
  bottom: -10rpx; /* 距离背景底条底部10rpx，垂直居中 */
  width: 80rpx;
  height: 80rpx;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.icon {
  font-size: 36rpx;
  color: #ffffff;
  display: block;
}

/* 文字强制显示 */
.text {
  font-size: 24rpx;
  color: #ffffff !important;
  font-weight: bold !important;
  line-height: 1.2 !important;
  display: block !important;
  margin-top: 5rpx !important;
  text-shadow: 0 0 2rpx #000000;
}

/* 中间加号按钮：居中+凸起 */
.add-btn {
  position: absolute;
  left: 50%;
  bottom: 20rpx; /* 凸起20rpx，不遮挡文字 */
  transform: translateX(-50%);
  width: 80rpx;
  height: 80rpx;
  background-color: #ffcc00;
  border-radius: 50%;
  border: 3rpx solid #ff3b30;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plus {
  font-size: 48rpx;
  color: #ffffff;
  font-weight: bold;
}
</style>