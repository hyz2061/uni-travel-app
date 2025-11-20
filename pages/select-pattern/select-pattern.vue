<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <view class="navbar">
      <view class="back-btn" @click="onBack">
        <text class="back-icon">←</text>
        <text class="back-text">返回</text>
      </view>
    </view>

    <!-- 主内容区 -->
    <view class="main-content">
      <!-- 卡通形象和标题 -->
      <view class="header-section">
        <image 
          src="/static/travel-bird.png" 
          mode="widthFix" 
          class="bird-image"
        ></image>
        <view class="title-text">为这次旅程添加一起旅行的同伴吧</view>
      </view>

      <!-- 团队名称输入框 -->
      <view class="input-group">
        <input 
          type="text" 
          v-model="teamName" 
          placeholder="团队旅游名称" 
          maxlength="50"
          class="team-input"
        />
        <text class="char-count">{{ teamName.length }}/50</text>
      </view>

      <!-- 同伴区域 -->
      <view class="companion-section">
        <view class="companion-header">
          <text class="companion-title">伙伴 ({{ companions.length }})</text>
          <view class="add-btn" @click="addCompanion">
            <text class="add-icon">+</text>
          </view>
        </view>

        <!-- 同伴列表 -->
        <view class="companion-list">
          <view class="companion-item" v-for="(item, index) in companions" :key="index">
            <image 
              src="/static/avatar-default.png" 
              mode="widthFix" 
              class="companion-avatar"
            ></image>
            <text class="companion-name">{{ item }}</text>
            <view class="remove-btn" @click="removeCompanion(index)">
              <text class="remove-icon">×</text>
            </view>
          </view>

          <!-- 添加同伴输入框 -->
          <view class="add-companion">
            <image 
              src="/static/avatar-default.png" 
              mode="widthFix" 
              class="add-avatar"
            ></image>
            <input 
              type="text" 
              v-model="newCompanion" 
              placeholder="朋友账号" 
              class="companion-input"
            />
            <button class="select-btn" @click="confirmAdd">选择</button>
          </view>
        </view>
      </view>

      <!-- 确定按钮 -->
      <button class="confirm-btn" @click="onConfirm">确定</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';


// 团队名称
const teamName = ref('');

// 同伴列表
const companions = ref([]);
const newCompanion = ref('');

// 返回上一页
const onBack = () => {
  uni.navigateBack();
};

// 添加同伴
const addCompanion = () => {
  // 可以在这里打开选择好友的弹窗
  console.log('准备添加同伴');
};

// 确认添加同伴
const confirmAdd = () => {
  if (newCompanion.value.trim() && !companions.value.includes(newCompanion.value.trim())) {
    companions.value.push(newCompanion.value.trim());
    newCompanion.value = '';
  }
};

// 移除同伴
const removeCompanion = (index) => {
  companions.value.splice(index, 1);
};

// 确定按钮点击事件
const onConfirm = () => {
  if (!teamName.value.trim()) {
    uni.showToast({
      title: '请输入团队旅游名称',
      icon: 'none'
    });
    return;
  }
  
  // 在这里处理表单提交逻辑
  console.log('团队名称:', teamName.value);
  console.log('同伴列表:', companions.value);
  
  uni.showToast({
    title: '提交成功',
    icon: 'success'
  });
  
  // 提交成功后返回上一页
  setTimeout(() => {
    uni.navigateBack();
  }, 1500);
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: #40A9FF;
  padding-top: 20rpx;
  box-sizing: border-box;
}

.navbar {
  padding: 20rpx 30rpx;
}

.back-btn {
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

.back-icon {
  font-size: 36rpx;
  margin-right: 10rpx;
}

.back-text {
  font-size: 32rpx;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30rpx;
}

.header-section {
  display: flex;
  align-items: center;
  margin: 40rpx 0 60rpx 0;
}

.bird-image {
  width: 200rpx;
  height: auto;
  margin-right: 20rpx;
}

.title-text {
  font-size: 34rpx;
  color: #FFFFFF;
  font-weight: 500;
  line-height: 50rpx;
}

.input-group {
  width: 100%;
  background-color: #FFD666;
  border-radius: 60rpx;
  padding: 25rpx 30rpx;
  margin-bottom: 30rpx;
  position: relative;
  box-shadow: 0 4rpx 0 #E6B800;
}

.team-input {
  width: 100%;
  font-size: 30rpx;
  color: #333333;
  background-color: transparent;
  padding-right: 100rpx;
  box-sizing: border-box;
}

.char-count {
  position: absolute;
  right: 30rpx;
  top: 50%;
  transform: translateY(-50%);
  font-size: 26rpx;
  color: #888888;
}

.companion-section {
  width: 100%;
  background-color: #FF5722;
  border-radius: 30rpx;
  overflow: hidden;
  margin-bottom: 60rpx;
}

.companion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 30rpx;
}

.companion-title {
  font-size: 30rpx;
  color: #FFFFFF;
  font-weight: 500;
}

.add-btn {
  width: 50rpx;
  height: 50rpx;
  background-color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-icon {
  color: #FF5722;
  font-size: 30rpx;
  font-weight: bold;
}

.companion-list {
  background-color: #FFE6CC;
  padding: 20rpx 30rpx;
}

.companion-item {
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 40rpx;
  padding: 15rpx 20rpx;
  margin-bottom: 20rpx;
}

.companion-avatar {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.companion-name {
  flex: 1;
  font-size: 28rpx;
  color: #333333;
}

.remove-btn {
  width: 40rpx;
  height: 40rpx;
  background-color: #FFEEEE;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-icon {
  color: #FF5722;
  font-size: 24rpx;
}

.add-companion {
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 40rpx;
  padding: 15rpx 20rpx;
}

.add-avatar {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.companion-input {
  flex: 1;
  font-size: 28rpx;
  color: #333333;
  background-color: transparent;
}

.select-btn {
  background-color: #FFD666;
  color: #333333;
  border-radius: 30rpx;
  font-size: 26rpx;
  padding: 10rpx 25rpx;
  line-height: normal;
}

.confirm-btn {
  width: 100%;
  background-color: #FFD666;
  color: #333333;
  border-radius: 60rpx;
  font-size: 32rpx;
  padding: 25rpx 0;
  font-weight: 500;
  box-shadow: 0 4rpx 0 #E6B800;
}
</style>