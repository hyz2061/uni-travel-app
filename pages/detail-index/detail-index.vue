<template>
  <div class="container">
    <!-- 主页面 -->
    <div class="main-page">
      <div class="header">
        <h1 class="title">【攻略】长安不夜城西安三天两夜寻宝之旅</h1>
        <div class="tags">
          <span class="tag">3天2夜</span>
          <span class="tag">西安</span>
          <span class="tag">约12.21KM</span>
        </div>
      </div>

      <!-- 标签栏：行程、行李意见切换 -->
      <div class="tab-bar">
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'schedule' }"
          @click="activeTab = 'schedule'"
        >
          行程
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'luggage' }"
          @click="activeTab = 'luggage'"
        >
          行李意见
        </button>
      </div>

      <!-- 行程内容 -->
      <div class="tab-content" v-if="activeTab === 'schedule'">
        <!-- 天数切换 -->
        <div class="day-tabs">
          <button class="day-btn active">第1天</button>
          <button class="day-btn">第2天</button>
          <button class="day-btn">第3天</button>
        </div>

        <!-- 第一天行程 -->
        <div class="day-content">
          <div class="time-tabs">
            <button class="time-btn active">上午</button>
            <button class="time-btn">下午</button>
            <button class="time-btn">晚上</button>
          </div>

          <div class="schedule-list">
            <div class="schedule-item">
              <span class="time">09:00</span>
              <div class="schedule-desc">
                <span class="more">...</span>
                <span class="tag-red">抢先看</span>
              </div>
            </div>
            <div class="schedule-item">
              <span class="time">11:00</span>
              <div class="schedule-desc">
                <span class="more">...</span>
              </div>
            </div>
            <div class="schedule-item">
              <span class="time">11:00</span>
              <div class="schedule-desc">
                <span class="more">...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 行李意见内容 -->
      <div class="tab-content" v-else>
        <div class="luggage-item">
          <span class="luggage-label">证件</span>
          <button class="add-btn">+</button>
        </div>
        <!-- 可继续添加其他行李意见项 -->
      </div>
    </div>

    <!-- 底部红色温馨提示 -->
    <div v-if="showTip" class="bottom-tip">
      <div class="tip-content">
        <img src="https://via.placeholder.com/60" alt="提示图标" class="tip-icon" />
        <div class="tip-text-group">
          <h3 class="tip-title">温馨提示</h3>
          <p class="tip-text">本次旅行为西安三天两夜旅程，该旅程超级适合上午起不来的年轻人，不欢迎西安躺起来！！！</p>
        </div>
        <div class="tip-buttons">
          <button class="tip-btn" @click="showTip = false">拜拜</button>
          <button class="tip-btn" @click="showTip = false">再去找找</button>
          <button class="tip-btn primary" @click="showTip = false">了解 进入流程</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTip: true, // 控制温馨提示显示隐藏
      activeTab: 'schedule' // 激活的标签页，schedule-行程，luggage-行李意见
    };
  },
  mounted() {
    // 3秒后自动隐藏温馨提示
    setTimeout(() => {
      this.showTip = false;
    }, 3000);
  }
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  background-color: #00bfff;
  min-height: 100vh;
  position: relative;
}

/* 主页面样式 */
.main-page {
  background-color: #00bfff;
  min-height: calc(100vh - 150px); /* 预留温馨提示高度 */
  padding: 10px;
}
.header {
  color: #fff;
  margin-bottom: 10px;
}
.back-btn {
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}
.title {
  font-size: 16px;
  margin-bottom: 8px;
}
.tags {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}
.tag {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 12px;
}

/* 标签栏样式 */
.tab-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.tab-btn {
  flex: 1;
  padding: 8px 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #333;
}
.tab-btn.active {
  background-color: #ffcc00;
  color: #333;
  font-weight: bold;
}

/* 行程内容样式 */
.day-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
.day-btn {
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #333;
}
.day-btn.active {
  background-color: #ffcc00;
  color: #333;
}

.time-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
.time-btn {
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #333;
}
.time-btn.active {
  background-color: #ffcc00;
  color: #333;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.schedule-item {
  background-color: #ffcc00;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.time {
  font-weight: bold;
}
.schedule-desc {
  display: flex;
  align-items: center;
  gap: 5px;
}
.more {
  margin-right: 5px;
}
.tag-red {
  background-color: red;
  color: #fff;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
}

/* 行李意见样式 */
.luggage-item {
  background-color: #ffcc00;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.luggage-label {
  font-weight: bold;
}
.add-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0099ff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

/* 底部红色温馨提示样式 */
.bottom-tip {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #ffa500, #ff6347);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 10px;
  box-sizing: border-box;
  color: #333;
  z-index: 99;
}

.tip-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tip-icon {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}

.tip-text-group {
  flex: 1;
}

.tip-title {
  font-size: 16px;
  margin-bottom: 5px;
}

.tip-text {
  font-size: 14px;
  line-height: 1.4;
}

.tip-buttons {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.tip-btn {
  padding: 6px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #333;
  font-size: 12px;
}

.tip-btn.primary {
  background-color: #0099ff;
  color: #fff;
}
</style>