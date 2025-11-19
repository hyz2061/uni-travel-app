<template>
  <div class="message-center">
	  <div class="top"></div>
    <!-- 顶部导航栏 -->
   <div class="header">
     <!-- 新增：带背景图的顶部容器 -->
     <div class="header-bg">
       <h1 class="title">消息中心</h1>
       <div class="tabs">
         <div 
           class="tab-item friend" 
           @click="switchTab('friend')"
           :class="{ active: currentTab === 'friend' }"
		   
         >
		   <span>好友消息</span>
           <img src="/static/消息1.png" alt="好友消息" class="tab-icon" />
         </div>
         <div 
           class="tab-item follow" 
           @click="switchTab('follow')"
           :class="{ active: currentTab === 'follow' }"
         >
		   <span>关注消息</span>
           <img src="/static/消息2.png" alt="关注消息" class="tab-icon" />
         </div>
         <div 
           class="tab-item system" 
           @click="switchTab('system')"
           :class="{ active: currentTab === 'system' }"
         >
		   <span>关注消息</span>
           <img src="/static/消息3.png" alt="系统消息" class="tab-icon" />
         </div>
       </div>
     </div>
   </div>

    <!-- 好友消息列表 -->
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

    <!-- 关注消息列表 -->
    <div v-if="currentTab === 'follow'" class="message-list">
      <div class="message-item" v-for="item in followMessages" :key="item.id">
        <img :src="item.avatar" alt="头像" class="avatar" />
        <div class="info">
          <h3 class="name">{{ item.name }} <span class="tag">关注</span></h3>
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
    </div>

    <!-- 系统消息列表 -->
    <div v-if="currentTab === 'system'" class="message-list">
      <div class="message-item" v-for="item in systemMessages" :key="item.id">
        <img :src="item.avatar" alt="头像" class="avatar" />
        <div class="info">
          <h3 class="name">{{ item.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        { id: 1, avatar: '/static/头像.png', name: '小迹' }
      ]
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
    },
    goToChat(item) {
      uni.navigateTo({
        url: `/pages/chat/chat`
      });
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
   margin-top: 0px; /* 新增：设置顶部外边距，数值可根据需求调整 */
  
}

.title {
  font-size: 36rpx;
  margin: 0 0 20rpx;
}


.friend {
  background-color: #67bfff;
  width: 92px;
  height: 92px;
  border: 3px solid #000000; 
}
.follow {
  background-color: #fed976;
   width: 92px;
   height: 92px;
   border: 3px solid #000000; 
}

.system {
  background-color: #ff6b6b;
   width: 92px;
   height: 92px;
   border: 3px solid #000000; 
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
   border: 1px solid #aaaaaa; /* 1px 黑色实线边框，可根据需要调整颜色、粗细、样式（如dashed虚线） */
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
/* 顶部背景容器：设置背景图、高度、排版 */
/* 顶部容器：设置背景图 + Flex 垂直布局 */
/* 顶部背景容器：蓝色背景 + 内容分层 */
.header-bg {
  padding: 0px 15px;
  color: #fff; /* 标题文字白色 */
}

/* 标题样式：居左，字号加大 */
.title {
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 18px 0; /* 标题与下方选项卡的间距 */
}
.tab-icon{
	vertical-align: bottom; /* 图片紧贴底部 */
	 width: 90px; /* 图片大小，可调整 */
	 height : 90px;
	 object-fit: contain; /* 不拉伸图片 */
	 position: relative;
	 top: 6px;
	
}
 /* 单个选项卡：文字左 + 图片右，水平排列 */
    .tab-item {
      display: flex; /* 文字与图片横向对齐 */
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
	  gap: 20px; /* 选项卡之间的间距，可根据需求调整 */
	  align-items: center; /* 垂直居中对齐 */
	}



</style>