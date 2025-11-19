<template>
  <div class="chat-page">
	  <div class="top"></div>
    <!-- 顶部导航栏 -->
    <header class="chat-header">
      <div class="back-area">
        <span class="back-icon" @click="goback">< 返回</span>
        <img src="/static/头像.png" alt="A学长头像" class="avatar" />
        <span class="username">A学长</span>
      </div>
      <span>· · ·</span>
    </header>

    <!-- 聊天内容区（暂空，可后续扩展） -->
    <main class="chat-content"></main>

    <!-- 底部输入栏 -->
    <footer class="chat-input">
      <img src="/static/one.png" alt="表情" class="emoji-icon" />
      <input type="text" placeholder="发消息..." class="input-box" />
      <img src="/static/one2.png" alt="加号" class="add-icon" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "SimpleChatPage",
    methods: {
      goback() {
      uni.redirectTo({
        url: "/pages/message/message"
      })
      }
    }
};

</script>

<style scoped>
.chat-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #00a8ff; /* 整体蓝色背景 */
}
.top{
	height: 20px;
}

/* 顶部导航栏 */
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  color: #fff;
}

.back-area {
  display: flex;
  align-items: center;
}
.back-icon{
	color: #fff; /* 文字改为白色 */
	  display: flex; /* 水平横向排列（若需包含其他元素可配合 flex 布局） */
	  align-items: center; /* 垂直居中（可选） */
	  gap: 5px; /* 图标与文字间距（若有图标） */
	  /* 可补充字体大小、边距等样式 */
	  font-size: 16px;
	  padding: 8px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 5px;
}

.username {
  font-size: 16px;
  font-weight: 500;
}

/* 聊天内容区 */
.chat-content {
  flex: 1;
  padding: 10px;
}

/* 底部输入栏 */
.chat-input {
  display: flex;
  align-items: center;
  padding: 2px;
  background-color: #F6CD4B; /* 黄色输入栏 */
  border-radius: 50px;
  position: relative;
  bottom: 20px;
  
}

.emoji-icon, .add-icon {
  width: 25px;
  height: 25px;
  margin: 0 8px;
}

.input-box {
  flex: 1;
  height: 36px;
  border: none;
  border-radius: 18px;
  padding: 0 15px;
  outline: none;
  background-color: #F6CD4B;
  font-size: 14px;
}
/* 表情图标放大 */
.emoji-icon {
  width: 32px; /* 原尺寸基础上增大，如从24px改为32px */
  height: 32px;
  object-fit: contain; /* 保持图片比例，防止拉伸变形 */
}

/* 加号图标放大 */
.add-icon {
  width: 64px; 
  height: 64px;
  object-fit: contain;
}
</style>