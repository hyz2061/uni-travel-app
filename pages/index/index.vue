<!--首页基本完善-,无从图片跳转-->

<template>
  <view class="app-container">
	 
    <!-- 顶部区域 -->
    <header class="top-bar">
      <!-- 用户头像 -->
      <view class="user-avatar">
        <img src="/static/头像.png" alt="用户头像" class="avatar-img">
      </view>
      <!-- 搜索框 -->
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
    
    <!-- 天气和广告横幅区域 -->
    <view class="weather-banner">
      <!-- 装饰元素 (纯视觉效果) -->
      <view class="decor-circle top-right"></view>
      <view class="decor-circle bottom-left"></view>
      
      <!-- 日期和天气信息 -->
      <view class="weather-info">
        <p class="date-text">{{ currentDate }}</p>
        <h2 class="weather-status">晴天多云</h2>
        <p class="weather-slogan">一起来旅游</p>
      </view>
	   
      
      <!-- 右侧吉祥物图片 -->
      <view class="mascot-img">
        <img src="/static/logo1.png" 
             alt="旅游吉祥物">
      </view>
    </view>
    
    <!-- 黄色背景功能区 -->
     <view class="function-area">
		 <view class="ellipse-wrap">
			 <view class="hollow-circle"></view>
		 </view>
        <view class="function-grid">
          <!-- 同城推荐 -->
          <view class="function-card city-recommend">
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
          <!-- AI助手 -->
          <view class="function-card ai-assistant">
            <h3 class="card-title">AI助手</h3>
            <p class="card-desc">有问题来找我</p>
          </view>
          
          <!-- 累计积分 -->
          <view class="function-card points-card">
            <h3 class="card-title">累计积分</h3>
            <p class="points-desc">旅程积分赢大奖</p>
          </view>
        </view>
        <!-- 吉祥物元素 -->
      </view>
    <!-- 标签切换区域 -->
    <view class="tab-container">
      <div class="tab-buttons">
        <button class="tab-btn" 
                :class="{ active: activeTab === 'recommend' }"
                @click="activeTab = 'recommend'">
          推荐
        </button>
        <button class="tab-btn" 
                :class="{ active: activeTab === 'follow' }"
                @click="activeTab = 'follow'">
          关注
        </button>
        <button class="tab-btn" 
                :class="{ active: activeTab === 'group' }"
                @click="activeTab = 'group'">
          团旅
        </button>
      </div>
      
      <!-- 推荐内容区 -->
      <view class="tab-content" v-if="activeTab === 'recommend'">
        <view class="travel-cards">
          <view v-for="(item, index) in recommendItems" :key="index" class="travel-card">
            <img :src="item.imgUrl" :alt="item.title" class="card-img"  @click="handleImageClick" >
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
      
      <!-- 关注内容区 -->
      <view class="tab-content" v-if="activeTab === 'follow'">
        <view class="empty-state">
          <p>关注的内容将显示在这里</p>
        </view>
      </view>
      
      <!-- 团旅内容区 -->
      <view class="tab-content" v-if="activeTab === 'group'">
        <view class="empty-state">
          <p>团旅的内容将显示在这里</p>
        </view>
      </view>
    </view>
   
  </view>
</template>

<script>
	import centerButton from '@/components/center-button/center-button.uvue'
export default {
  name: 'TravelApp',
  data() {
    return {
      searchQuery: '',
      currentDate: '2025年10月1日',
      activeTab: 'recommend',
      recommendItems: [
        {
          imgUrl: 'https://picsum.photos/id/1036/300/200',
          title: '南京两天一夜不费腿版保姆级逛吃攻略！！！',
          views: '2.2W'
        },
        {
          imgUrl: 'https://picsum.photos/id/1037/300/200',
          title: '武汉两天一夜不费腿版保姆级逛吃攻略！！！',
          views: '2.2W'
        },
        {
          imgUrl: 'https://picsum.photos/id/1038/300/200',
          title: '成都三日游精华路线，本地人推荐！',
          views: '1.8W'
        },
        {
          imgUrl: 'https://picsum.photos/id/1039/300/200',
          title: '西安历史文化之旅，不可错过的景点',
          views: '3.5W'
        }
      ]
    };
	components: {
		    centerButton
		  };
  },
 
  methods: {
    navigate(page) {
      // 导航逻辑可以在这里实现
      console.log('导航到:', page);
      // 实际项目中可以使用vue-router进行路由跳转
    },
	 handleImageClick(item) {
	    this.$router.push({
	      path: '/pages/detail-index/detail-index',
	      query: { id: item.id }  // 传递参数
	    })
	  }
  }
};
</script>

<style scoped>
/* 基础样式 */
.app-container {
  max-width: 450px;
  margin: 0 auto;
  background-color: #2196F3;
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
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  padding: 2px;
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
  z-index: 2;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 16px 8px 4px 25px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  align-items: center; 
  padding: 10px 15px; 
    line-height: 1.5; 
	border: 1px solid #f4e64a; 
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
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
}

/* 天气和广告横幅区域 */
.weather-banner {
  background:  #2196F3;
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
  background-color:  #fff152;
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
.water-img {
  transform: scaleX(-1); /* 水平镜像（左右翻转） */
  /* 其他样式（如宽度、圆角等）保持不变 */
  width: 130px;
  height: auto;
  border-radius: 8px;
  left: 70px;
  top:-50px;
   z-index: 999;
}
.city-recommend {
  grid-row: span 2; /* 跨两行 */
  display: flex;
  height: 140px;
  width: 190px;
  flex-direction: column;
  justify-content: space-between;
}
.location-icon {
  /* 用伪元素绘制图标（也可使用字体图标或图片） */
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
/* 椭圆容器 */
.ellipse-wrap {
  width: 70px; /* 椭圆宽度 */
  height: 30px; /* 椭圆高度（宽度的一半左右，实现椭圆） */
  border-radius: 60%; /* 50% 圆角实现椭圆（宽高比不为1时就是椭圆） */
  background-color: #ff6347; /* 椭圆背景色，如红色 */
  display: flex;
  top: -20px;
  left: 35%;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 裁剪超出椭圆的内容 */
}
.hollow-circle {
  width: 60px;        /* 圆形宽度 */
  height: 20px;       /* 圆形高度（与宽度一致，确保是正圆） */
  background-color: #73bcff; /* 边框颜色（如红色）和宽度 */
  border-radius: 60%; /* 50% 圆角实现圆形 */
}

.ai-assistant, .points-card {
     border-radius: 20px 80px 20px 20px / 20px 80px 20px 20px; /* 右下角直角，其他圆角 */
  background: linear-gradient(to bottom, #2196F3, #FFEB3B);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 6px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
	 z-index: 1;
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
  background-color:  #FFE05A;
  color: #333;
  width: fit-content;
  padding: 0px 15px;
  border-radius: 20px;
  font-size: 12px;
  top: -100px;
}

.location-tag i {
  margin-right: 4px;
}

.points-desc {
  font-size: 14px;
  margin: 0;
}

/* 吉祥物元素 */
.mascot-element {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.mascot-img {
  width: 160px;
  height: auto;
  object-fit: contain;
}
.location-tag span {
  font-size: 14px;
  font-weight: 500;
  position: relative;
  left: 15px;
  top: -10px;
}

/* 标签切换区域 */
.tab-container {
  background-color:   #fff152;
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
   justify-content: center;
    align-items: center;
  font-size: 20px;
  font-weight: bolder;
  color: #000000;
  border-radius: 20px 20px 0px 0; 
}

.tab-btn.active {
  color: white;
  background-color: #2196F3;
  border-bottom: 2px solid #2196F3;
  border: none;
}


.tab-content {
  padding: 12px;
  background-color:  #2196F3;
}

.travel-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.travel-card {
  background-color: #fff152 ;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 100%;
  height: 128px;
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

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  color: #888;
}
/* 导航栏容器样式 */
.nav-container {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  /* 可结合背景色、阴影等样式增强视觉 */
  background-color: #ff6b6b;
}
.tag-container {
  position: absolute;
 top: 30px;
 left: 25px;
  transform: translate(13%, -8%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
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
  right: 80px;
  top: -35px;
  border-radius: 12px; 
 
}

.tag-text {
  transform: rotate(-180deg);
  transform-origin: center;
}

.mascot {
  position: absolute;
  right: 20px;
  bottom: 40px;
  width: 120px;
  height: auto;
}


</style>