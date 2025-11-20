<template>
  <div class="journey-detail-page">
    <!-- 头部区域 -->
	
	<div @click="uni.navigateTo({url: '/pages/trip/trip'})"><span>< 返回</span></div>
    <!-- 城市与时间信息 -->
    <div class="city-info">
      <h1 class="city">西安</h1>
      <p class="time" style="color: white;">2025.12.22—2025.12.24 待出发</p>
      <div class="tag">3天2夜</div>
    </div>

    <!-- 导航栏：行程/行李/经费切换 -->
    <div class="nav">
      <button 
        class="nav-btn" 
        :class="{ active: currentTab === 'trip' }"
        @click="switchTab('trip')"
      >
        行程
      </button>
      <button 
        class="nav-btn" 
        :class="{ active: currentTab === 'luggage' }"
        @click="switchTab('luggage')"
      >
        行李
      </button>
      <button 
        class="nav-btn" 
        :class="{ active: currentTab === 'budget' }"
        @click="switchTab('budget')"
      >
        经费
      </button>
    </div>

    <!-- 行程模块（默认显示） -->
    <div v-show="currentTab === 'trip'">
      <!-- 天数标签：第1-3天切换 -->
      <div class="day-tags">
        <button 
          class="day-tag" 
          :class="{ red: currentDay === 1 }"
          @click="switchDay(1)"
        >
          第1天
        </button>
        <button 
          class="day-tag" 
          :class="{ red: currentDay === 2 }"
          @click="switchDay(2)"
        >
          第2天
        </button>
        <button 
          class="day-tag" 
          :class="{ red: currentDay === 3 }"
          @click="switchDay(3)"
        >
          第3天
        </button>
      </div>

      <!-- 第一天内容 -->
      <div class="day-section" v-show="currentDay === 1">
        <h2>第一天</h2>
        <div class="blue-box"></div>
        <div class="time-tabs">
          <button class="time-tab active">上午</button>
          <button class="time-tab">下午</button>
          <button class="time-tab">晚上</button>
        </div>
        <div class="timeline">
          <p class="time">09：00</p>
          <div class="card yellow">
            <p class="card-title">明城墙</p>
            <p>出发时间：09:00</p>
            <p>出行方式：地铁2号线</p>
          </div>
          <p class="time right">11：00</p>
          <div class="card blue right">
            <p class="card-title">回民街</p>
            <p>用餐时间：11:30-13:00</p>
            <p>推荐美食：肉夹馍、泡馍</p>
          </div>
        </div>
      </div>

      <!-- 第二天内容 -->
      <div class="day-section" v-show="currentDay === 2">
        <h2>第二天</h2>
        <div class="blue-box"></div>
        <div class="time-tabs">
          <button class="time-tab active">上午</button>
          <button class="time-tab">下午</button>
          <button class="time-tab">晚上</button>
        </div>
        <div class="timeline">
          <p class="time">08：30</p>
          <div class="card yellow">
            <p class="card-title">兵马俑博物馆</p>
            <p>出发时间：08:30</p>
            <p>出行方式：旅游专线</p>
          </div>
          <p class="time right">14：00</p>
          <div class="card blue right">
            <p class="card-title">华清宫</p>
            <p>游览时间：14:30-16:30</p>
            <p>备注：提前预约门票</p>
          </div>
        </div>
      </div>

      <!-- 第三天内容 -->
      <div class="day-section" v-show="currentDay === 3">
        <h2>第三天</h2>
        <div class="blue-box"></div>
        <div class="time-tabs">
          <button class="time-tab active">上午</button>
          <button class="time-tab">下午</button>
          <button class="time-tab">晚上</button>
        </div>
        <div class="timeline">
          <p class="time">09：00</p>
          <div class="card yellow">
            <p class="card-title">大雁塔</p>
            <p>出发时间：09:00</p>
            <p>出行方式：打车</p>
          </div>
          <p class="time right">15：00</p>
          <div class="card blue right">
            <p class="card-title">返程</p>
            <p>返程时间：15:30</p>
            <p>交通方式：高铁G876</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 行李模块 -->
    <div v-show="currentTab === 'luggage'" class="tab-content">
       <!-- 行李模块内容 -->
           <div class="luggage-section">
               <div class="luggage-status">
                 <span class="text">已整理0/1件行李</span>
                 <span class="sort">排序</span>
               </div>
               <div class="category-container">
                 <div class="category-header">
                   <span class="category-name">证件 (0)</span>
                   <span class="add-btn" @click="gotoluggage">+</span>
                 </div>
                 <div class="category-body"></div>
               </div>
             </div>
    </div>

    <!-- 经费模块 -->
    <div v-show="currentTab === 'budget'" class="tab-content">
    <!-- 经费模块内容 -->
        <div class="expense-section">
          <div class="budget-card">
            <div class="budget-header">
              <span class="budget-title">预计旅游经费</span>
              <button class="add-budget-btn">
                添加旅游预算 <span class="plus-icon">+</span>
              </button>
            </div>
            <div class="budget-amount">2,000.00</div>
            <div class="budget-details">
              <div class="detail-item">
                <span class="detail-label">已预计旅游经费</span>
                <span class="detail-value">1,000.00</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">可预计旅游经费</span>
                <span class="detail-value">1,000.00</span>
              </div>
            </div>
          </div>
    
          <div class="info-card">
            地点：西安 出发日期：2025/11/23
          </div>
    
          <div class="expense-category">出行</div>
          <div class="expense-category yellow">住宿</div>
          <div class="expense-category">门票</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleChatPage",
  data() {
    return {
      currentTab: "trip", // 当前激活的顶部标签：trip-行程、luggage-行李、budget-经费
      currentDay: 1 // 当前激活的天数：1-3
    };
  },
  methods: {
    goback() {
      uni.redirectTo({
        url: "/pages/trip/trip"
      });
    },
	 gotoluggage() {
	       this.$router.push("/pages/luggage/luggage");
	    },
    // 切换顶部标签（行程/行李/经费）
    switchTab(tabName) {
      this.currentTab = tabName;
    },
    // 切换天数（第1-3天）
    switchDay(day) {
      this.currentDay = day;
    }
  }
};
</script>

<style scoped>
/* 页面整体 */
.travel-page {
  font-family: "Microsoft Yahei", sans-serif;
  background-color: #fff;
 }

/* 顶部标题区 */
.header {
  background-color: #25B0F0;
  color: #fff;
  padding: 20px;
}

.header h1 {
  font-size: 24px;
  margin: 0;
}

.date {
  font-size: 14px;
  margin: 5px 0;
}

.tag {
  background-color: #F6CD4B;
  color: #333;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: bold;
  display: inline-block;
   border: 2px solid #000; /* 新增黑色边框 */
}

/* 导航栏 */
.nav {
  background-color: #25B0F0;
  display: flex; /* 新增：弹性布局，子元素横向排列 */
}

.nav-btn {
  background-color: transparent;
  border: none;
  padding: 0px 15px;
  font-size: 20px;
  font-weight: 900;
  border-radius: 20px 20px 0px 0px;
  cursor: pointer;
  margin-right: 5px; /* 可选：设置项之间的间距 */
}
/* 针对蓝色行程卡片的 ::after 伪元素（三角）强制消除 */
.nav-btn::after {
  content: none !important; /* 清空内容（伪元素核心，优先级最高） */
  display: none !important; /* 强制隐藏 */
  width: 0 !important; /* 宽度置0 */
  height: 0 !important; /* 高度置0 */
  border: 0 !important; /* 边框置0（消除三角的边框构成） */
}

.nav-btn.active {
  background-color: #fff;
  font-weight: bold;
}

/* 天数标签 */
.day-tags {
  display: flex;
  gap: 5px; /* 按钮之间的间距 */
   margin: 12px 10px;
}

.day-tag {
  padding: 0px 11px;
  border: 1px solid #000;
  border-radius: 18px;
  cursor: pointer;
  font-size: 8px;
   border: 2px solid #000; /* 黑色边框 */
  background-color: #fff;
  font-weight: 900;
 }

.day-tag.red {
  background-color: #f44336;
  color: #fff;
  border-color: #000000;
}
/* 第一天内容区 */
.day-section h2 {
  font-size: 25px;
  margin: 10px 10px;
}

.blue-box {
  background-color: #25B0F0;
  height: 60px;
  border-radius: 20px;
  margin: 10px 10px;
  border: 3px solid #000; /* 黑色边框 */
}

/* 时段标签 */
/* 时段标签父容器：横向排列 + 外边距 */
.time-tabs {
  display: flex; /* 核心：启用弹性布局，子元素横向排列 */
  margin: 10px 4px;
}

.time-tab {
  background-color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  /* 可选：添加按钮之间的间距 */
  margin-right: 8px;
}
.time-tab::after {
  content: none !important; /* 清空内容（伪元素核心，优先级最高） */
  display: none !important; /* 强制隐藏 */
  width: 0 !important; /* 宽度置0 */
  height: 0 !important; /* 高度置0 */
  border: 0 !important; /* 边框置0（消除三角的边框构成） */
}


.time-tab.active {
  color: #e91e63;
  font-weight: bold;
  border-bottom: 3px solid #e91e63;
}

/* 时间轴与行程卡片 */
.timeline {
  position: relative;
  margin: 10px 10px;
}

.time {
  font-size: 18px;
  font-weight: 900;
  margin: 5px 0;
}

.time.right {
  text-align: right;
}

.card {
  border-radius: 10px;
  padding: 18px;
  margin: 5px 30px;
  font-size: 16px;
  font-weight: 900;
}

.card.yellow {
  background-color: #F6CD4B;
  width: fit-content;
  border-radius: 14px 14px 14px 14px; /* 模拟聊天框三角 */
  position: relative;
  width: 300px;
  height: 90px;
}

.card.yellow::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 8px solid #F6CD4B;
  border-bottom: 8px solid transparent;
}

.card.blue {
  background-color: #25B0F0;
  width: fit-content;
 border-radius: 14px 14px 14px 14px; /* 模拟聊天框三角 */
  position: relative;
  float: right;
  width: 300px;
  height: 90px;
}

.card.blue::after {
  content: "";
  position: absolute;
  right: -8px;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid #25B0F0;
  border-bottom: 8px solid transparent;
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
  
}
.top{
	height: 20px;
	background-color: #25B0F0;
}

/* 顶部导航栏 */
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  color:  #ffffff;
  background-color: #25B0F0;
}
.luggage-section {
  padding: 10px;
}

.luggage-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

.sort {
  color: #2196f3;
  cursor: pointer;
}

.category-container {
  border-radius: 8px;
  overflow: hidden; /* 隐藏内部超出的圆角 */
}

.category-header {
  background-color: #f44336;
  color: #fff;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-name {
  font-size: 16px;
  font-weight: bold;
}

.add-btn {
  background-color: #fff;
  color: #f44336;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
}

.category-body {
  background-color: #25B0F0;
  min-height: 40px; /* 保证蓝色区域高度 */
  padding: 10px;
}
.expense-section {
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.budget-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.budget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #25B0F0;
  color: #fff;
}

.budget-title {
  font-size: 16px;
  font-weight: bold;
}

.add-budget-btn {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 1px 8px;
  border-radius: 0px 20px 20px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.plus-icon {
  font-size: 18px;
  font-weight: bold;
}

.budget-amount {
  font-size: 28px;
  font-weight: bold;
  padding: 10px;
  color: #333;
  background-color: #25B0F0;
}

.budget-details {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-top: 1px solid #eee;
  background-color: #25B0F0;
}

.detail-item {
  text-align: center;
  background-color: #25B0F0;
}

.detail-label {
  font-size: 12px;
  color: #666;
  display: block;
  margin-bottom: 5px;
}

.detail-value {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.info-card {
  background-color: #25B0F0;
  color: #fff;
  padding: 20px;
  border-radius: 30px;
  font-size: 16px;
}

.expense-category {
  background-color: #25B0F0;
  color: #fff;
  padding: 40px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
}

.expense-category.yellow {
  background-color: #ffc107;
  color: #333;
}

</style>