<template>
  <view class="app-container">
    
    <header class="top-bar">
      <view class="user-avatar">
        <img src="/static/头像.png" alt="用户头像" class="avatar-img" @click="gotome">
      </view>
      <view class="search-container">
        <input type="text" v-model="searchQuery" placeholder="旅游推荐" class="search-input">
        <button class="search-btn">搜索</button>
      </view>
      <view class="tag-container">
        <view class="tag-item1" :style="{ transform: 'rotate(112deg)' }">
          <view class="tag-text">XUNLV APP XUNLV APP XUNLV APP</view>
        </view>
        <view class="tag-item2" :style="{ transform: 'rotate(90deg)' }">
          <view class="tag-text">XUNLV APP XUNLV APP XUNLV APP</view>
        </view>
      </view>
    </header>
    
    <view class="weather-banner">
      <view class="decor-circle top-right"></view>
      <view class="decor-circle bottom-left"></view>
      
      <view class="weather-info">
        <p class="date-text">{{ currentDate }}</p>
        <h2 class="weather-status">晴天多云</h2>
        <p class="weather-slogan">一起来旅游</p>
      </view>
      
      <view class="mascot-img">
        <img src="/static/logo1.png" alt="旅游吉祥物">
      </view>
    </view>
    
    <view class="function-area">
      <view class="ellipse-wrap">
        <view class="hollow-circle"></view>
      </view>
      <view class="function-grid">
        <view class="function-card city-recommend" @click="switchToCityTab">
          <h3 class="card-title">同城推荐</h3>
          <p class="card-desc">向着世界发出城市的呐喊</p>
          <view class="water-img">
            <img src="/static/冲浪.png">
          </view>
          <view class="location-tag">
            <i class="location-icon"></i>
            <span>定位：</span>
          </view>
        </view>
        
        <view class="function-card ai-assistant" @click="goToAiMessage">
          <h3 class="card-title">AI助手</h3>
          <p class="card-desc">有问题来找我</p>
        </view>
        
        <view class="function-card points-card">
          <h3 class="card-title">累计积分</h3>
          <p class="points-desc">旅程积分赢大奖</p>
        </view>
      </view>
    </view>
    
    <view class="tab-container" id="tabContainer">
      <div class="tab-buttons">
        <button class="tab-btn" 
                :class="{ active: activeTab === 'recommend' }"
                @click="activeTab = 'recommend'">
          推荐
        </button>
        <button class="tab-btn" 
                :class="{ active: activeTab === 'follow' }"
                @click="activeTab = 'follow'">
          同城
        </button>
        <button class="tab-btn" 
                :class="{ active: activeTab === 'group' }"
                @click="activeTab = 'group'">
          团旅
        </button>
      </div>
      
      <view class="tab-content" v-if="activeTab === 'recommend'">
        <view class="travel-cards">
          <view v-for="(item, index) in recommendItems" :key="index" class="travel-card">
            <img :src="item.imgUrl" :alt="item.title" class="card-img"  @click="handleImageClick(item)" >
            <view class="card-text">
              <h4 class="card-title">{{ item.title }}</h4>
              <view class="card-meta">
                <span class="meta-detail">查看详情</span>
                <span class="meta-count">{{ item.views }}</span>
              </view>
            </view>
          </view>
        </view>
      </view>
      
      <view class="tab-content" v-if="activeTab === 'follow'">
         <view class="travel-cards">
           <view v-for="(item, index) in recommendItems" :key="index" class="travel-card">
             <img :src="item.imgUrl" :alt="item.title" class="card-img"  @click="handleImageClick(item)" >
             <view class="card-text">
               <h4 class="card-title">{{ item.title }}</h4>
               <view class="card-meta">
                 <span class="meta-detail">查看详情</span>
                 <span class="meta-count">{{ item.views }}</span>
               </view>
             </view>
           </view>
         </view>
       </view>
      
      <view class="tab-content" v-if="activeTab === 'group'">
        <view class="travel-cards">
          <view v-for="(item, index) in recommendItems" :key="index" class="travel-card">
            <img :src="item.imgUrl" :alt="item.title" class="card-img"  @click="handleImageClick(item)" >
            <view class="card-text">
              <h4 class="card-title">{{ item.title }}</h4>
              <view class="card-meta">
                <span class="meta-detail">查看详情</span>
                <span class="meta-count">{{ item.views }}</span>
              </view>
            </view>
          </view>
        </view>
      </view>
   </view>
 </view>
 <tabbar></tabbar>
</template>

<script>
import centerButton from '@/components/center-button/center-button.uvue'
import tabbar from '@/components/tabbar/tabbar.vue'

export default {
  name: 'TravelApp',
  components: {
    centerButton,
    tabbar
  },
  data() {
    return {
      searchQuery: '',
      currentDate: '2025年10月1日',
      activeTab: 'recommend',
      recommendItems: [
        {
          id: 1,
          imgUrl: 'https://picsum.photos/id/1036/300/200',
          title: '南京两天一夜不费腿版保姆级逛吃攻略！！！',
          views: '2.2W'
        },
        {
          id: 2,
          imgUrl: 'https://picsum.photos/id/1037/300/200',
          title: '武汉两天一夜不费腿版保姆级逛吃攻略！！！',
          views: '2.2W'
        },
        {
          id: 3,
          imgUrl: 'https://picsum.photos/id/1038/300/200',
          title: '成都三日游精华路线，本地人推荐！',
          views: '1.8W'
        },
        {
          id: 4,
          imgUrl: 'https://picsum.photos/id/1039/300/200',
          title: '西安历史文化之旅，不可错过的景点',
          views: '3.5W'
        }
      ]
    };
  },
  methods: {
    // 跳转到个人中心
    gotome(){
      uni.reLaunch({
        url: '/pages/profile/profile'
      });  
    },
    // 跳转到详情页
    handleImageClick(item) {
      uni.navigateTo({
        url: `/pages/detail-index/detail-index?id=${item.id}`
      });
    },
    
    // 点击“同城推荐”，切换Tab到“同城”
    switchToCityTab() {
      this.activeTab = 'follow'; // 切换到同城Tab
      // 可选：滚动到 Tab 区域
      uni.createSelectorQuery().select('#tabContainer').boundingClientRect(data => {
        if (data) {
          uni.pageScrollTo({
            scrollTop: data.top,
            duration: 300
          });
        }
      }).exec();
    },

    // 点击“AI助手”，跳转到消息页面
    goToAiMessage() {
      uni.navigateTo({
        url: '/pages/message/message',
        fail: (err) => {
          console.error("跳转失败，请检查路径是否正确或是否为tabbar页面", err);
          // 如果 message 是 tabbar 页面，需要使用 switchTab
          // uni.switchTab({ url: '/pages/message/message' });
        }
      });
    }
  }
};
</script>

<style scoped>
/* 基础样式 */
.app-container {
  max-width: 450px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px; /* 为底部导航留出空间 */
}

/* 顶部区域 */
.top-bar {
  background-color: #2196F3;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  position: relative; /* 确保层级上下文 */
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  padding: 2px;
  z-index: 2;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.search-container {
  flex: 1;
  margin: 0 9px;
  z-index: 2; /* 提高层级，确保在装饰 Tag 之上 */
  position: relative;
}

.search-input {
  width: 100%;
  padding: 10px 15px; 
  border-radius: 10px;
  border: 1px solid #f4e64a; 
  font-size: 15px;
  background-color: transparent; /* 或者 rgba(255,255,255,0.2) 增加可读性 */
  box-sizing: border-box;
  display: flex;
  align-items: center; 
  line-height: 1.5; 
  color: #fff; /* 输入文字颜色，根据背景调整 */
}
/* 增加 placeholder 颜色适配 */
.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
}

.search-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f4e64a;
  color: black;
  border: none;
  padding: 0px 18px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  z-index: 3;
}

/* 装饰 Tag 样式 */
.tag-container {
  position: absolute;
  top: 30px;
  left: 25px;
  transform: translate(13%, -8%);
  z-index: 1; /* 低于搜索框 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  pointer-events: none; /* 防止遮挡点击 */
}

.tag-item1 {
  background-color: #000;
  color: #ffd700;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 30px;
  margin: 0 10px;
  white-space: nowrap;
  transform-origin: center;
  position: relative;
  top: 5px;
  right: 20px;
}
.tag-item2 {
  background-color: #000;
  color: #ffd700;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 30px;
  margin: 0 10px;
  white-space: nowrap;
  transform-origin: center;
  position: relative;
  right: 80px;
  top: -35px;
  border-radius: 12px; 
}

.tag-text {
  transform: rotate(-180deg);
  transform-origin: center;
}

/* 天气和广告横幅区域 */
.weather-banner {
  background: #2196F3;
  padding: 30px;
  color: black;
  position: relative;
  overflow: hidden;
}

.decor-circle {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.top-right {
  width: 160px;
  height: 160px;
  top: -40px;
  right: -40px;
}

.bottom-left {
  width: 80px;
  height: 80px;
  bottom: -20px;
  left: 40px;
}

.weather-info {
  position: relative;
  z-index: 10;
  top: -20px;
  left: -10px;
}

.date-text {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

.weather-status {
  font-size: 24px;
  font-weight: bold;
  margin: 4px 0 0 0;
}

.weather-slogan {
  font-size: 18px;
  margin: 4px 0 0 0;
}

.mascot-img {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.mascot-img img {
  width: 140px;
  height: 140px;
  position: relative;
  left: 30px;
  object-fit: contain;
}

/* 黄色背景功能区 */
.function-area {
  background-color: #ffffff;
  padding: 20px 12px;
  position: relative;
  border-radius: 20px 20px 0px 0px;
}

.function-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.function-card {
  background-color: #2196F3;
  border-radius: 20px 80px 20px 20px / 20px 80px 20px 20px;
  padding: 10px;
  color: white;
  position: relative;
  z-index: 1;
}

/* 加上点击反馈效果 */
.function-card:active {
  opacity: 0.9;
  transform: scale(0.98);
}

.water-img {
  transform: scaleX(-1);
  width: 130px;
  height: auto;
  border-radius: 8px;
  position: relative;
  left: 70px;
  top: -50px;
  z-index: 999;
  pointer-events: none; /* 图片不阻挡点击 */
}

.city-recommend {
  grid-row: span 2;
  display: flex;
  height: 140px;
  width: 190px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.location-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  position: relative;
  right: 20px;
  top: 2px;
}
.location-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
}
.location-icon::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 50%;
}

.ellipse-wrap {
  width: 70px;
  height: 30px;
  border-radius: 60%;
  background-color: #ff6347;
  display: flex;
  position: relative;
  top: -20px;
  left: 35%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hollow-circle {
  width: 60px;
  height: 20px;
  background-color: #73bcff;
  border-radius: 60%;
}

.ai-assistant, .points-card {
  border-radius: 20px 80px 20px 20px / 20px 80px 20px 20px;
  background: linear-gradient(to bottom, #2196F3, #ffffff);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 6px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 4px;
}

.card-desc {
  font-size: 10px;
  opacity: 0.9;
  margin: 0 0 12px 0;
}

.location-tag {
  display: flex;
  align-items: center;
  background-color: #FFE05A;
  color: #333;
  width: fit-content;
  padding: 0px 15px;
  border-radius: 20px;
  font-size: 12px;
  position: relative;
  top: -100px;
}

.location-tag span {
  font-size: 14px;
  font-weight: 500;
  position: relative;
  left: 15px;
  top: -10px;
}

.points-desc {
  font-size: 14px;
  margin: 0;
}

/* 标签切换区域 */
.tab-container {
  background-color: #ffffff;
  gap: 0;
  border: none;
}

.tab-buttons {
  display: flex;
  border-bottom: 1px solid #eee;
  border: none;
}

.tab-btn {
  flex: 1;
  padding: 5px 0;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  color: #000000;
  border-radius: 20px 20px 0px 0;
}
.tab-btn::after {
  border: none;
}

.tab-btn.active {
  color: red;
  background-color: #ffffff;
  border-bottom: 4px solid #ff0000;
}

.tab-content {
  padding: 12px;
  background-color: #ffffff;
}

.travel-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.travel-card {
  background-color: #f6cd4b;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-text {
  padding: 8px;
}

.card-text .card-title {
  font-size: 14px;
  display: -webkit-box;
  color: #000;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
}

.meta-detail, .meta-count {
  color: #000;
}
</style>