<template>
  <view class="tab-bar-container">
    <view class="tab-bar-bg"></view>

    <view class="tab-item" style="left: 15%;" @click="goTo('/pages/index/index', true)">
            <text class="text">主页</text>
    </view>

    <view class="tab-item" style="left: 35%;" @click="goTo('/pages/trip/trip', true)">
            <text class="text">旅程</text>
    </view>

    <view class="add-btn" @click="goTo('/pages/add-name/add-name', false)">
      <text class="plus">+</text>
    </view>

    <view class="tab-item" style="left: 65%;" @click="goTo('/pages/message/message', true)">
            <text class="text">消息</text>
    </view>

    <view class="tab-item" style="left: 85%;" @click="goTo('/pages/profile/profile', true)">
            <text class="text">我的</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goTo(url, isTab) {
        uni.navigateTo({ url })
    }
  }
}
</script>

<style scope>
.tab-bar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  height: 130rpx;
}

.tab-bar-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 95rpx;
  background-color: #ff3b30;
  border-radius: 30rpx 30rpx 0 0;
}

.tab-item {
  position: absolute;
  bottom: 0;
  width: 150rpx;
  height: 95rpx; 
  transform: translateX(-50%);
  display: flex;
  flex-direction: column; 
  align-items: center;   
  justify-content: center; 
  transition: opacity 0.2s;
}

.tab-item:active {
  opacity: 0.8;
  transform: translateX(-50%) scale(0.95);
}

.icon {
  font-size: 36rpx;
  color: #ffffff;
}

.text {
  font-size: 24rpx;
  color: #ffffff; 
  font-weight: 500;
  line-height: 1.2;
  margin-top: 2rpx;
}

.add-btn {
  position: absolute;
  left: 50%;
  bottom: 30rpx;
  transform: translateX(-50%);
  width: 100rpx;
  height: 100rpx;
  background-color: #ffcc00;
  border-radius: 50%;
  border: 5rpx solid #ffffff;
  box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.add-btn:active {
  transform: translateX(-50%) scale(0.95);
  box-shadow: 0 3rpx 10rpx rgba(0, 0, 0, 0.3);
}

.plus {
  font-size: 56rpx;
  color: #ff3b30;
  font-weight: 300;
}
</style>