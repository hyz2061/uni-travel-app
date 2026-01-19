<template>
  <view class="page-container">
    <view class="bg-circle circle-1"></view>
    <view class="bg-circle circle-2"></view>

    <view class="navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="back-btn" @click="onBack">
        <text class="uni-icon">←</text>
        <text class="back-text">返回</text>
      </view>
    </view>

    <view class="content-wrapper">
      <view class="header-section">
        <image 
          src="/static/travel-bird.png" 
          mode="aspectFit" 
          class="bird-image"
        ></image>
        <view class="header-text-group">
          <text class="title">开启旅程</text>
          <text class="subtitle">为这次旅程添加一起旅行的同伴吧</text>
        </view>
      </view>

      <view class="card-container">
        
        <view class="form-item">
          <text class="label">团队名称</text>
          <view class="input-wrapper">
            <input 
              type="text" 
              v-model="teamName" 
              placeholder="给旅行团起个名字吧" 
              placeholder-class="input-placeholder"
              maxlength="20"
              class="custom-input"
            />
            <text class="char-count">{{ teamName.length }}/20</text>
          </view>
        </view>

        <view class="form-item">
          <view class="label-row">
            <text class="label">同行伙伴</text>
            <text class="count-badge">{{ companions.length }}人</text>
          </view>

          <view class="companion-list" v-if="companions.length > 0">
            <view class="companion-chip" v-for="(item, index) in companions" :key="index">
              <image src="/static/avatar-default.png" class="chip-avatar"></image>
              <text class="chip-name">{{ item }}</text>
              <view class="chip-close" @click="removeCompanion(index)">×</view>
            </view>
          </view>
          
          <view v-else class="empty-state">
            <text>暂时还没有添加小伙伴哦~</text>
          </view>

          <view class="add-bar">
            <view class="add-input-box">
              <input 
                type="text" 
                v-model="newCompanion" 
                placeholder="输入朋友账号/昵称" 
                class="mini-input"
                @confirm="confirmAdd"
              />
            </view>
            <button class="add-action-btn" @click="confirmAdd" :disabled="!newCompanion.trim()">
              添加
            </button>
          </view>
        </view>

        <button class="submit-btn" hover-class="btn-hover" @click="onConfirm">
          确认创建
        </button>

      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 获取状态栏高度用于适配刘海屏
const statusBarHeight = ref(20);
// #ifdef APP-PLUS || MP-WEIXIN
const sysInfo = uni.getSystemInfoSync();
statusBarHeight.value = sysInfo.statusBarHeight || 20;
// #endif

const teamName = ref('');
const companions = ref([]);
const newCompanion = ref('');

// 返回上一页
const onBack = () => {
  uni.navigateBack();
};

// 确认添加同伴
const confirmAdd = () => {
  const name = newCompanion.value.trim();
  if (!name) return;
  
  if (companions.value.includes(name)) {
    uni.showToast({ title: '这个伙伴已经在列表里啦', icon: 'none' });
    return;
  }
  
  companions.value.push(name);
  newCompanion.value = '';
};

// 移除同伴
const removeCompanion = (index) => {
  companions.value.splice(index, 1);
};

// 确定按钮点击事件
const onConfirm = () => {
  if (!teamName.value.trim()) {
    uni.showToast({
      title: '记得填写团队名称哦',
      icon: 'none'
    });
    return;
  }
  
  // 模拟提交数据
  console.log('提交数据:', {
    name: teamName.value,
    members: companions.value
  });
  
  uni.showLoading({ title: '创建中...' });

  setTimeout(() => {
    uni.hideLoading();
    // 跳转到指定页面
    uni.navigateTo({
      url: '/pages/add-name/add-name',
      success: () => {
        console.log('跳转成功');
      },
      fail: (err) => {
        console.error('跳转失败，请检查pages.json路径配置', err);
        // 如果跳转失败（比如是tabbar页面），尝试 switchTab
        // uni.switchTab({ url: '/pages/add-name/add-name' })
      }
    });
  }, 500);
};
</script>

<style scoped>
/* 页面容器 */
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #E0F7FA 0%, #F0F4F8 100%);
  position: relative;
  overflow: hidden;
}

/* 背景装饰 */
.bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
}
.circle-1 {
  width: 300rpx;
  height: 300rpx;
  background: rgba(64, 169, 255, 0.2);
  top: -50rpx;
  right: -50rpx;
}
.circle-2 {
  width: 400rpx;
  height: 400rpx;
  background: rgba(255, 214, 102, 0.15);
  bottom: 100rpx;
  left: -100rpx;
}

/* 导航栏 */
.navbar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 44px; /* 标准导航栏高度 */
  padding: 0 30rpx;
}
.back-btn {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  padding: 10rpx 24rpx;
  border-radius: 30rpx;
  backdrop-filter: blur(5px);
}
.uni-icon {
  font-size: 36rpx;
  margin-right: 8rpx;
  color: #333;
  font-weight: bold;
}
.back-text {
  font-size: 28rpx;
  color: #333;
  font-weight: 500;
}

/* 内容区域 */
.content-wrapper {
  position: relative;
  z-index: 1;
  padding: 20rpx 40rpx;
}

/* 头部 */
.header-section {
  display: flex;
  align-items: center;
  margin: 20rpx 0 50rpx;
}
.bird-image {
  width: 140rpx;
  height: 140rpx;
  margin-right: 30rpx;
  /* 如果图片有白色背景，可以加个混合模式或者圆角 */
  border-radius: 20rpx; 
}
.header-text-group {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 40rpx;
  font-weight: bold;
  color: #1A365D;
  margin-bottom: 10rpx;
}
.subtitle {
  font-size: 26rpx;
  color: #64748B;
}

/* 卡片容器 */
.card-container {
  background: #FFFFFF;
  border-radius: 40rpx;
  padding: 40rpx 30rpx;
  box-shadow: 0 20rpx 60rpx rgba(64, 169, 255, 0.1);
}

/* 表单项通用 */
.form-item {
  margin-bottom: 50rpx;
}
.label-row {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}
.label {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 16rpx;
  display: block;
}
.label-row .label {
  margin-bottom: 0;
  margin-right: 16rpx;
}
.count-badge {
  background: #E6F7FF;
  color: #1890FF;
  font-size: 24rpx;
  padding: 4rpx 16rpx;
  border-radius: 20rpx;
  font-weight: 600;
}

/* 输入框样式 */
.input-wrapper {
  background: #F5F7FA;
  border-radius: 24rpx;
  padding: 24rpx 30rpx;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  border: 2rpx solid transparent;
}
/* 输入框聚焦效果(简单的css hover模拟) */
.input-wrapper:focus-within {
  background: #FFFFFF;
  border-color: #40A9FF;
  box-shadow: 0 0 0 4rpx rgba(64, 169, 255, 0.1);
}

.custom-input {
  flex: 1;
  font-size: 30rpx;
  color: #333;
}
.input-placeholder {
  color: #B0B0B0;
}
.char-count {
  font-size: 24rpx;
  color: #999;
  margin-left: 20rpx;
}

/* 同伴列表 (Chip风格) */
.companion-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  margin-bottom: 30rpx;
}
.companion-chip {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 2rpx solid #E6E6E6;
  padding: 10rpx 16rpx 10rpx 10rpx;
  border-radius: 60rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.03);
}
.chip-avatar {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  margin-right: 12rpx;
  background: #eee;
}
.chip-name {
  font-size: 26rpx;
  color: #333;
  margin-right: 16rpx;
  max-width: 150rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chip-close {
  width: 36rpx;
  height: 36rpx;
  background: #FFECEC;
  color: #FF4D4F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  line-height: 1;
}

.empty-state {
  padding: 30rpx 0;
  text-align: center;
  font-size: 26rpx;
  color: #AAA;
  font-style: italic;
}

/* 添加同伴栏 */
.add-bar {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
}
.add-input-box {
  flex: 1;
  background: #F5F7FA;
  border-radius: 20rpx;
  padding: 18rpx 24rpx;
  margin-right: 20rpx;
}
.mini-input {
  font-size: 28rpx;
  width: 100%;
}
.add-action-btn {
  background: #333;
  color: #fff;
  font-size: 28rpx;
  border-radius: 20rpx;
  padding: 0 34rpx;
  height: 76rpx;
  line-height: 76rpx;
  border: none;
}
.add-action-btn[disabled] {
  background: #E0E0E0;
  color: #999;
}

/* 底部提交按钮 */
.submit-btn {
  background: linear-gradient(90deg, #40A9FF 0%, #1890FF 100%);
  color: #FFFFFF;
  border-radius: 60rpx;
  font-size: 34rpx;
  font-weight: 600;
  height: 100rpx;
  line-height: 100rpx;
  box-shadow: 0 10rpx 20rpx rgba(24, 144, 255, 0.3);
  margin-top: 40rpx;
}
.btn-hover {
  transform: scale(0.98);
  opacity: 0.9;
}
</style>