<template>
  <view class="chat-container">
    <!-- 顶部导航栏 -->
    <view class="navbar">
      <view class="back-btn" @click="onBack">
        <text class="back-icon">←</text>
      </view>
      <view class="user-info">
        <image 
          src="/static/friend-avatar.png" 
          mode="widthFix" 
          class="avatar"
        ></image>
        <text class="username">{{ friendInfo.name }}</text>
      </view>
      <view class="more-btn" @click="showMoreOptions">
        <text class="more-icon">...</text>
      </view>
    </view>

    <!-- 聊天内容区域 -->
    <view class="chat-content">
      <!-- 这里将显示聊天消息列表 -->
      <!-- 暂时为空，实际项目中会通过v-for渲染消息记录 -->
    </view>

    <!-- 输入区域 -->
    <view class="input-area">
      <button class="voice-btn" @click="switchToVoice">
        <text class="voice-icon">🎤</text>
      </button>
      <input 
        type="text" 
        v-model="message" 
        placeholder="发消息..." 
        class="message-input"
        @confirm="sendMessage"
      />
      <button class="emoji-btn" @click="showEmojiPanel">
        <text class="emoji-icon">😊</text>
      </button>
      <button class="add-btn" @click="showAddOptions">
        <text class="add-icon">+</text>
      </button>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { navigateBack, getCurrentPages } from '@dcloudio/uni-app';

// 好友信息（实际项目中可通过路由参数传递）
const friendInfo = ref({
  id: 1,
  name: 'A学长',
  avatar: '/static/friend-avatar.png'
});

// 消息输入
const message = ref('');

// 页面加载时获取好友信息
onMounted(() => {
  // 获取路由参数
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  if (currentPage.options.friendId) {
    // 实际项目中这里会根据friendId请求接口获取详细信息
    console.log('好友ID:', currentPage.options.friendId);
  }
});

// 返回上一页
const onBack = () => {
  navigateBack();
};

// 发送消息
const sendMessage = () => {
  if (!message.value.trim()) return;
  
  // 实际项目中这里会调用发送消息的接口
  console.log('发送消息:', message.value);
  
  // 清空输入框
  message.value = '';
};

// 切换到语音输入
const switchToVoice = () => {
  uni.showToast({
    title: '切换到语音输入',
    icon: 'none'
  });
};

// 显示表情面板
const showEmojiPanel = () => {
  uni.showToast({
    title: '显示表情面板',
    icon: 'none'
  });
};

// 显示更多选项
const showAddOptions = () => {
  uni.showActionSheet({
    itemList: ['图片', '文件', '位置', '视频通话'],
    success: (res) => {
      console.log('选择了:', res.tapIndex);
    }
  });
};

// 显示更多操作
const showMoreOptions = () => {
  uni.showActionSheet({
    itemList: ['好友详情', '设置备注', '删除好友'],
    success: (res) => {
      console.log('选择了:', res.tapIndex);
    }
  });
};
</script>

<style scoped>
.chat-container {
  width: 100%;
  height: 100vh;
  background-color: #40A9FF;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background-color: #40A9FF;
  color: #FFFFFF;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.back-btn {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  font-size: 36rpx;
}

.user-info {
  flex: 1;
  display: flex;
  align-items: center;
}

.avatar {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.username {
  font-size: 32rpx;
  font-weight: 500;
}

.more-btn {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.more-icon {
  font-size: 36rpx;
}

/* 聊天内容区域 */
.chat-content {
  flex: 1;
  overflow-y: auto;
  padding: 30rpx;
  box-sizing: border-box;
}

/* 输入区域 */
.input-area {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background-color: #40A9FF;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.voice-btn, .emoji-btn, .add-btn {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  background-color: #FFD666;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20rpx;
  padding: 0;
  line-height: normal;
}

.add-btn {
  margin-right: 0;
  margin-left: 20rpx;
}

.voice-icon, .emoji-icon, .add-icon {
  font-size: 32rpx;
}

.message-input {
  flex: 1;
  height: 70rpx;
  background-color: #FFD666;
  border-radius: 35rpx;
  padding: 0 20rpx;
  font-size: 28rpx;
  color: #333333;
}
</style>