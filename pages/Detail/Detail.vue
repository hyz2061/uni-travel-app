<!--详情-->

<template>
  <div class="journey-detail-page">
    <!-- 头部区域 -->

    <!-- 城市与时间信息 -->
    <div class="city-info">
      <h1 class="city">西安</h1>
      <p class="time" style="color: black;">2025.12.22—2025.12.24 待出发</p>
      <div class="tag">3天2夜</div>
    </div>

    <!-- 标签栏 -->
    <div class="tabs">
      <div class="tab" :class="{ active: currentTab === '行程' }" @click="currentTab = '行程'">行程</div>
      <div class="tab" :class="{ active: currentTab === '行李' }" @click="currentTab = '行李'">行李</div>
      <div class="tab" :class="{ active: currentTab === '经费' }" @click="currentTab = '经费'">经费</div>
    </div>

    <!-- 行程标签页 -->
    <div v-if="currentTab === '行程'" class="tab-content">
      <!-- 第一个框架：黄色背景 -->
      <div class="frame yellow">
        <div class="day-tags">
          <span class="day-tag active">第1天</span>
          <span class="day-tag">第2天</span>
          <span class="day-tag">第3天</span>
        </div>
        <div class="day-section">
          <h2 class="day-title">第一天</h2>
          <div class="card blue"></div>
        </div>
      </div>

      <!-- 第二个框架：蓝色背景 -->
      <div class="frame blue">
        <div class="time-tabs">
          <span class="time-tab active">上午</span>
          <span class="time-tab">下午</span>
          <span class="time-tab">晚上</span>
        </div>
        <div class="schedule">
          <div class="time-slot">
            <p class="time">09:00</p>
            <div class="spot-card yellow">
              <img src="/static/placeholder.png" alt="明城墙" class="spot-img" />
              <div class="spot-info">
                <p class="spot-name">明城墙</p>
                <p class="spot-detail">出发时间：</p>
                <p class="spot-detail">出行方式：</p>
              </div>
            </div>
          </div>
          <div class="time-slot">
            <p class="time">11:00</p>
            <div class="spot-card red"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 行李标签页 -->
    <div v-if="currentTab === '行李'" class="tab-content">
      <div class="frame yellow">
        <span>已整理0/1件行李</span>
        <span class="sort-btn">排序</span>
       
           <!-- 行李分类 -->
           <div class="category-card" @click="goToluggage">
                 <div class="card-header">
                   <span>证件 (0)</span>
                   <button class="add-btn" >+</button>
                 </div>
                 <div class="card-content">
                   <i class="arrow-up"></i>
                 </div>
               </div>
      </div>
    </div>
	
    <!-- 经费标签页 -->
    <div v-if="currentTab === '经费'" class="tab-content">
      <div class="frame yellow">
        <div class="fund-header">
          <p>预计旅游经费</p>
          <div class="add-fund">添加旅游经费 </div>
        </div>
        <div class="fund-stats">
          <div class="fund-stat">
            <p class="amount">2,000.00</p>
            <p>已预计旅游经费</p>
          </div>
          <div class="fund-stat">
            <p class="amount">2,000.00</p>
            <p>可预计旅游经费</p>
          </div>
        </div>
        <div class="fund-list">
          <div class="fund-item blue"></div>
          <div class="fund-item blue"></div>
          <div class="fund-item red"></div>
          <div class="fund-item blue"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: '行程'
    };
  },
   name: 'LuggagePage',
    methods: {
      goToluggage() {
         this.$router.push('/pages/luggage/luggage');
    
      }
    }
};
</script>

<style scoped>
.journey-detail-page {
  min-height: 100vh;
  background-color: #25B0F0;
  padding: 15px;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 头部区域 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.header button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.right-icons {
  display: flex;
  gap: 15px;
}
.icon {
  width: 24px;
  height: 24px;
}

/* 城市与时间信息 */
.city-info {
  margin-bottom: 20px;
  color: #000;
}
.city {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
}
.time {
  font-size: 14px;
  opacity: 0.8;
  color: #000;
  margin-bottom: 10px;
}
.tag {
  display: inline-block;
  background-color:transparent;
  color: #000000;
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 900;
   border: 3px solid #000; /* 黑色边框 */
}

/* 标签栏 */
.tabs {
  display: flex;
  gap: 0; /* 标签之间无间距 */
  margin-bottom: 0; /* 取消底部间距 */
}
.tab {
  padding: 6px 12px;
  background-color: #00a8ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  border: none; /* 去除边框 */
  border-radius: 10px 10px 8px 8px;
  
}
.tab:last-child {
  border-right: none; /* 最后一个标签也去除右侧边框 */
}
.tab.active {
  background-color: #ffd700;
  color: #333;
}

/* 标签页公共样式 */
.tab-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 框架通用样式 */
.frame {
  border-radius: 8px;
  padding: 15px;
}

/* 行程 - 第一个框架：黄色背景 */
.frame.yellow {
  background-color: #ffd700;
  color: #333;
}
.day-tags {
  display: flex;
  gap: 0;
  margin-bottom: 15px;
  overflow: hidden;
}
.day-tag {
  padding: 4px 10px;
  background-color: #ff0000;
  color: #fff;
  border-radius: 0;
  font-size: 12px;
  border: #000;
  }
.day-tag:last-child {
  border-right: none; /* 最后一个标签也去除右侧边框 */
}
.day-tag.active {
  background-color: #ffd700;
  color: #333;
  border: #000;
}
.day-section {
  background-color: #ffd700;
  padding: 0;
  margin-bottom: 0;
  border: #000;
}
.day-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 10px 0;
}
.card.blue {
  background-color: #00a8ff;
  height: 60px;
  border-radius: 8px;
  border: 1px solid #000; /* 增加黑色边框 */
}

/* 行程 - 第二个框架：蓝色背景 */
.frame.blue {
  background-color: #00a8ff;
  color: #fff;
}
.time-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 15px;
}
.time-tab {
  padding: 4px 10px;
  background-color: #00a8ff;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #fff;
}
.time-tab.active {
  background-color: #fff;
  color: #00a8ff;
}
.schedule {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.time-slot {
  display: flex;
  flex-direction: column;
}
.time {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #fff; /* 时间文字颜色为白色 */
}
.spot-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #000; /* 增加黑色边框 */
}
.spot-img {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: #eee;
}
.spot-info {
  flex: 1;
}
.spot-name {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}
.spot-detail {
  font-size: 12px;
  opacity: 0.8;
}
.spot-card.yellow {
  background-color: #ffd700;
  color: #333;
}
.spot-card.red {
  background-color: #e63946;
  height: 60px;
}

/* 行李标签页 */
.luggage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.sort {
  color: #00a8ff;
  font-size: 12px;
}
.luggage-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.luggage-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
}
.luggage-item.red {
  background-color: #e63946;
  color: #fff;
}
.add-icon {
  width: 20px;
  height: 20px;
}

/* 经费标签页 */
.fund-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.add-fund {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #e63946;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
}
.fund-stats {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.fund-stat {
  flex: 1;
  text-align: center;
}
.amount {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
}
.fund-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fund-item {
  height: 60px;
  border-radius: 8px;
}
.fund-item.blue {
  background-color: #00a8ff;
}
.fund-item.red {
  background-color: #e63946;
}
.add{
  background-color: #00a8ff;
  color: #fff;
  border: none;
  padding:  10px;
  border-radius: 4px;
  cursor: pointer;
  border: 0em;
}
.trip-detail-page {
  background-color: #ffcc5c;
  min-height: 100vh;
  font-family: "微软雅黑", sans-serif;
}

/* 顶部导航栏 */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #00a8ff;
  color: #fff;
}

.back-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.right-icons {
  display: flex;
  gap: 15px;
}

.icon-user, .icon-share, .icon-edit {
  font-size: 20px;
  cursor: pointer;
}

/* 旅程基本信息 */
.trip-info {
  padding: 15px;
  background-color: #00a8ff;
  color: #fff;
}

.city {
  font-size: 24px;
  margin-bottom: 5px;
}

.date {
  font-size: 14px;
  margin-bottom: 10px;
}

.duration {
  background-color: #ffcc5c;
  color: #000;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 12px;
}

/* 标签栏 */
.tab-bar {
  display: flex;
  background-color: #ffcc5c;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
}

.tab {
  flex: 1;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.tab.active {
  color: #ff5c5c;
  font-weight: bold;
}

/* 行李统计 */
.luggage-stat {
  padding: 10px 15px;
  font-size: 14px;
  color: #666;
}

/* 行李分类 */
.luggage-category {
  margin: 0 15px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff5c5c;
  color: #fff;
  padding: 10px;
  border-radius: 8px 8px 0 0;
}

.category-name {
  font-size: 16px;
}

.add-btn {
  background: none;
  border: 2px solid #fff;
  color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
}

.category-content {
  background-color: #00a8ff;
  color: #fff;
  padding: 10px;
  border-radius: 0 0 8px 8px;
}

</style>