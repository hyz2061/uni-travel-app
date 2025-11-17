<template>
  <div class="message-app">
    <!-- 消息中心页面 -->
    <div v-if="currentPage === 'messageCenter'" class="message-center">
      <div class="header">
        <h1>消息中心</h1>
        <div class="tabs">
          <div class="tab friend" @click="switchTab('friend')">
            <img src="/static/消息1.png" alt="好友消息" class="1" />
            <span>好友消息</span>
          </div>
          <div class="tab follow" @click="switchTab('friend')">
            <img src="/static/消息2.png" alt="关注消息" class="1"/>
            <span>关注消息</span>
          </div>
          <div class="tab system" @click="switchTab('friend')">
            <img src="/static/消息3.png" alt="系统消息" class="1"/>
            <span>系统消息</span>
          </div>
        </div>
      </div>
      <div class="contact-list">
        <div 
          class="contact-item" 
          v-for="item in filteredContacts" 
          :key="item.name"
          @click="goToChat(item)"
          :class="{ 'contact-item--active': isContactActive(item) }"
        >
          <img :src="'/static/头像.png'" alt="用户头像'" class="avatar" />
          <span class="contact-name">{{ item.name }}</span>
        </div>
      </div>
    </div>

    <!-- 聊天页面 -->
    <div v-if="currentPage === 'chat' && currentContact" class="chat-page">
      <div class="chat-header">
        <button @click="goBack" class="back-button" aria-label="返回消息列表">
          <i class="arrow-left"></i>
        </button>
        <img :src="currentContact.avatar" alt="聊天对象头像" class="chat-avatar" />
        <span class="chat-name">{{ currentContact.name }}</span>
      </div>
      <div class="chat-content" ref="chatContent">
        <!-- 聊天内容区域 -->
        <div v-for="(message, index) in messages" :key="index" class="message">
          <div :class="['message-bubble', message.isMe ? 'message-bubble--me' : 'message-bubble--other']">
            {{ message.text }}
          </div>
        </div>
      </div>
     <div class="chat-input">
       <!-- 新增语音按钮 -->
       <button class="voice-btn" aria-label="语音">🎙️</button>
       <input 
         type="text" 
         placeholder="发消息..." 
         v-model="newMessage"
         @keyup.enter="sendMessage"
       />
       <button class="emoji-btn" aria-label="表情">😃</button>
       <button class="add-btn" aria-label="添加附件">+</button>
     </div>
    </div>
  </div>
</template>

<script>
// 定义类型接口，增强类型安全
interface Contact {
  name: string;
  avatar: string;
  type?: 'friend' | 'follow' | 'system';
}

interface Message {
  text: string;
  isMe: boolean;
  timestamp: Date;
}

export default {
  name: 'MessageApp',
  
  data() {
    return {
      currentPage: 'messageCenter',
      currentContact: null as Contact | null,
      newMessage: '',
      activeTab: 'friend', // 新增：当前激活的标签页
      contacts: [
        { name: 'A学长', avatar: '/static/头像.png', type: 'friend' },
        { name: 'B学长', avatar: '/static/头像.png', type: 'friend' },
        { name: 'C学长', avatar: '/static/头像.png', type: 'friend' },
      ],
      messages: [] as Message[]
    };
  },
  
  computed: {
    // 新增：根据标签页过滤联系人
    filteredContacts() {
      if (this.activeTab === 'all') return this.contacts;
      return this.contacts.filter(item => item.type === this.activeTab);
    }
  },
  
  methods: {
    goToChat(contact: Contact) {
      this.currentContact = contact;
      this.currentPage = 'chat';
      this.loadMessages(contact.name);
    },
    
    goBack() {
      this.currentPage = 'messageCenter';
    },
    
    isContactActive(contact: Contact) {
      return this.currentContact && this.currentContact.name === contact.name;
    },
    
    sendMessage() {
      if (!this.newMessage.trim() || !this.currentContact) return;
      
      this.messages.push({
        text: this.newMessage.trim(),
        isMe: true,
        timestamp: new Date()
      });
      
      this.newMessage = '';
      this.simulateReply();
      this.scrollToBottom();
    },
    
    simulateReply() {
      setTimeout(() => {
        this.messages.push({
          text: '收到，我稍后回复你~',
          isMe: false,
          timestamp: new Date()
        });
        this.scrollToBottom();
      }, 1000);
    },
    
    loadMessages(contactName: string) {
      // 模拟不同联系人的初始消息
      if (contactName.includes('系统')) {
        this.messages = [
          { text: '您有一条新的系统通知', isMe: false, timestamp: new Date() },
          { text: '请及时查看', isMe: true, timestamp: new Date() }
        ];
      } else {
        this.messages = [
          { text: `你好，我是${contactName}`, isMe: false, timestamp: new Date() },
          { text: '你好，有什么事吗？', isMe: true, timestamp: new Date() }
        ];
      }
      this.scrollToBottom();
    },
    
    scrollToBottom() {
      if (this.$refs.chatContent) {
        (this.$refs.chatContent as HTMLElement).scrollTop = (this.$refs.chatContent as HTMLElement).scrollHeight;
      }
    },
    
    // 新增：切换标签页方法
    switchTab(tab: 'friend' | 'follow' | 'system') {
      this.activeTab = tab;
    }
  }
};
</script>

<style scoped>
/* 样式保持不变，若需进一步优化可调整动画和交互细节 */
.message-app {
  min-height: 100vh;
  font-family: "微软雅黑", sans-serif;
  background-color: #00a8ff;
}

.message-center {
  background-color:#00a8ff;
  border-radius: 10px 10px 0px 0px;
  min-height: 100vh;
}

.header {
  background-color:#00a8ff;
  padding: 15px;
  color: #fff;
}

.header h1 {
  margin: 0 0 10px 0;
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
  cursor: pointer;
  transition: transform 0.2s;
}

.tab:hover {
  transform: scale(1.05);
  color: #fff;
  font-weight: 900;
}


.tab img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.tab span {
  margin-top: 5px;
  font-size: 14px;
  color: #000000;
  font-weight: 900;
}

.contact-list {
  padding: 10px;
  border-radius: 20px 20px 0px 0px;
  background-color:#ffff;
  height: 100%;
display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保父容器占满视口高度 */
  
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
  border-radius: 10px 10px 0px 0px;
}

.contact-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.contact-item--active {
  background-color: rgba(255, 255, 255, 0.3);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.contact-name {
  font-size: 18px;
  color: #000000;
  font-weight: 900;
}

.chat-page {
  background-color: #00a8ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.back-button {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.chat-name {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
}

.chat-content {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #00a8ff;
}

.message {
  margin-bottom: 15px;
  max-width: 80%;
}

.message-bubble {
  padding: 10px 15px;
  border-radius: 18px;
  position: relative;
  word-wrap: break-word;
}

.message-bubble--me {
  background-color: #95ec69;
  margin-left: auto;
}

.message-bubble--other {
  background-color: #fff;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background-color: #ffcc5c;
}

.chat-input input {
  flex: 1;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  margin-right: 10px;
  font-size: 14px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.chat-input {
  display: flex;
  align-items: center;
  background-color: #ffcc33; /* 黄色背景，与图片一致 */
  padding: 8px;
  border-radius: 8px; /* 可选：增加圆角更美观 */
}

.voice-btn, .emoji-btn, .add-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0 4px;
}

input[type="text"] {
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent; /* 输入框背景透明，继承外层黄色 */
  padding: 6px;
}

.emoji-btn, .add-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.emoji-btn:hover, .add-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>