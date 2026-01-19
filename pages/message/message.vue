<template>
  <div class="message-center">
    <div class="top"></div>
    <div class="header">
      <div class="header-bg">
        <h1 class="title">消息中心</h1>
        <div class="tabs">
          <div 
            class="tab-item friend" 
            @click="switchTab('friend')"
            :class="{ active: currentTab === 'friend' }"
          >
            <img src="/static/消息1.png" alt="好友消息" class="tab-icon" />
          </div>
          <div 
            class="tab-item follow" 
            @click="switchTab('follow')"
            :class="{ active: currentTab === 'follow' }"
          >
            <img src="/static/消息2.png" alt="关注消息" class="tab-icon" />
          </div>
          <div 
            class="tab-item system" 
            @click="switchTab('system')"
            :class="{ active: currentTab === 'system' }"
          >
            <img src="/static/消息3.png" alt="系统消息" class="tab-icon" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentTab === 'friend'" class="message-list">
      <div 
        class="message-item" 
        v-for="item in friendMessages" 
        :key="item.id" 
        @click="goToChat(item)"
      >
        <img :src="item.avatar" alt="头像" class="avatar" />
        <div class="info">
          <h3 class="name">{{ item.name }}</h3>
          <p class="content">{{ item.content }}</p>
        </div>
        <span class="time">{{ item.time }}</span>
      </div>
    </div>

    <div v-if="currentTab === 'follow'" class="message-list">
      <div class="message-item" v-for="item in followMessages" :key="item.id">
        <img :src="item.avatar" alt="头像" class="avatar" />
        <div class="info">
          <h3 class="name">{{ item.name }} <span class="tag">关注</span></h3>
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
    </div>

    <div v-if="currentTab === 'system'" class="message-list">
      <div class="message-item" v-for="item in systemMessages" :key="item.id" @click="goToChat(item)">
        <img :src="item.avatar" alt="头像" class="avatar" />
        <div class="info">
          <h3 class="name">{{ item.name }}</h3>
        </div>
      </div>
    </div>
    
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar.vue' // 确保引入tabbar组件

export default {
  components: {
    tabbar
  },
  data() {
    return {
      currentTab: 'friend', // 默认选中好友消息
      friendMessages: [
        { id: 1, avatar: '/static/头像.png', name: 'A学长', content: '你好', time: '11-13' },
        { id: 2, avatar: '/static/头像.png', name: 'B学长', content: '你好', time: '11-13' },
        { id: 3, avatar: '/static/头像.png', name: 'B学长', content: '你好', time: '11-13' }
      ],
      followMessages: [
        { id: 1, avatar: '/static/头像.png', name: 'A学长', content: '您的关注更新了' },
        { id: 2, avatar: '/static/头像.png', name: 'B学长', content: '您的关注更新了' },
        { id: 3, avatar: '/static/头像.png', name: 'C学长', content: '您的关注更新了' },
        { id: 4, avatar: '/static/头像.png', name: 'D学长', content: '您的关注更新了' }
      ],
      systemMessages: [
        { id: 1, avatar: '/static/头像.png', name: '小迹' } // 这里的name必须是 '小迹' 才能触发跳转
      ]
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
    },
    // 修改点2：更新跳转逻辑
    goToChat(item) {
      // 判断是否是 AI 助手小迹
      if (item.name === '小迹') {
        uni.navigateTo({
          url: '/pages/message1/message1' // 跳转到 AI 对话页面
        });
      } else {
        // 跳转到普通聊天页面
        uni.navigateTo({
          url: `/pages/chat/chat`
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.top{
  height: 40px;
  background-color: #25B0F0;
}
.message-center {
  min-height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
}
span{
  font-weight: 900;
}

/* 顶部导航栏样式 */
.header {
  background-color: #25B0F0;
  padding: 10rpx 40rpx;
  color: #fff;
  margin-top: 0px; 
}

.title {
  font-size: 36rpx;
  margin: 0 0 20rpx;
}

.friend {
  width: 85px;
  height: 80px;
  margin-right: 5px;
}
.follow {
   width: 85px;
   height: 80px;
   margin-right: 5rpx;
}

.system {
   width: 85px;
   height: 80px;
   margin-right: 5rpx;
}

/* 激活态样式 */
.tab-item.active {
  transform: scale(1.05);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #000;
}

/* 消息列表样式 */
.message-list {
  padding: 20rpx;
}

.message-item {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
}

.avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.info {
  flex: 1;
}

.name {
  font-size: 32rpx;
  margin: 0 0 10rpx;
  font-weight: 900;
}

.tag {
  background-color: transparent;
  color: #aaaaaa;
  border: 1px solid #aaaaaa; 
  font-size: 24rpx;
  padding: 2rpx 10rpx;
  border-radius: 16rpx;
  margin-left: 10rpx;
}

.content {
  font-size: 28rpx;
  color: #666;
  margin: 0;
}

.time {
  font-size: 24rpx;
  color: #999;
}

/* 顶部背景容器 */
.header-bg {
  padding: 0px 15px;
  color: #fff; 
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 18px 0; 
}
.tab-icon{
  vertical-align: bottom; 
  width: 145px; 
  height : 90px;
  object-fit: contain; 
  position: relative;
  top: 2px;
}

.tab-item {
  display: flex; 
  align-items: center;
  cursor: pointer;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.tabs {
  display: flex;
  gap: 20px; 
  align-items: center; 
}
</style>