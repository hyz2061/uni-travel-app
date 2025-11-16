<!--消息，直接点A学长可以跳转-->

<template>
  <div class="message-app">
    <!-- 消息中心页面 -->
    <div v-if="currentPage === 'messageCenter'" class="message-center">
      <div class="header">
        <h1>消息中心</h1>
        <div class="tabs">
          <div class="tab friend">
            <img src="" alt="好友消息" />
            <span>好友消息</span>
          </div>
          <div class="tab follow">
            <img src="" alt="关注消息" />
            <span>关注消息</span>
          </div>
          <div class="tab system">
            <img src="https://via.placeholder.com/60/FFD700/000000?text=系统" alt="系统消息" />
            <span>系统消息</span>
          </div>
        </div>
      </div>
      <div class="contact-list">
        <div 
          class="contact-item" 
          v-for="(item, index) in contacts" 
          :key="index"
          @click="goToChat(item.name)"
        >
          <img :src="avatarImg" alt="头像" class="avatar" />
          <span class="contact-name">{{ item.name }}</span>
        </div>
      </div>
    </div>

    <!-- 聊天页面 -->
    <div v-if="currentPage === 'chat'" class="chat-page">
      <div class="chat-header">
        <button @click="goBack">
          <i class="arrow-left"></i>
        </button>
      <img :src="avatarImg" alt="头像" class="chat-avatar" />
        <span class="chat-name">{{ currentContact.name }}</span>
      </div>
      <div class="chat-content"></div>
      <div class="chat-input">
        <input type="text" placeholder="发消息..." />
        <button class="emoji">😃</button>
        <button class="add">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 'messageCenter',
      currentContact: null,
	  avatarImg: '/static/头像.png',
      contacts: [
        { name: 'A学长', avatar: 'https://via.placeholder.com/40/FFD700/000000?text=A' },
        { name: 'B学长', avatar: 'https://via.placeholder.com/40/FFD700/000000?text=B' },
        { name: 'C学长', avatar: 'https://via.placeholder.com/40/FFD700/000000?text=C' },
      ],
    };
  },
  methods: {
    goToChat(name) {
      this.currentContact = this.contacts.find(item => item.name === name);
      this.currentPage = 'chat';
    },
    goBack() {
      this.currentPage = 'messageCenter';
    },
  },
};
</script>

<style scoped>
.message-app {
  min-height: 100vh;
  font-family: "微软雅黑", sans-serif;
  background-color: #ffcc5c;
}

/* 消息中心样式 */
.message-center {
  background-color: #ffcc5c;
}

.header {
  background-color: #00a8ff;
  padding: 15px;
  color: #fff;
}

.header h1 {
  margin-bottom: 10px;
  font-size: 24px;
}

.tabs {
  display: flex;
  justify-content: space-around;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}

.tab span {
  margin-top: 5px;
  font-size: 14px;
}

.contact-list {
  padding: 10px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.contact-name {
  font-size: 18px;
  color: #fff;
}

/* 聊天页面样式 */
.chat-page {
  background-color: #00a8ff;
  min-height: 100vh;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #fff;
}

.chat-header button {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

.arrow-left {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #fff;
}

.chat-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-name {
  font-size: 16px;
  color: #fff;
}

.chat-content {
  flex: 1;
  padding: 15px;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #fff;
  background-color: #ffcc5c;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: none;
  margin-right: 10px;
}

.chat-input button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>