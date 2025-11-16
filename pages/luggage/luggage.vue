<template>
  <div class="travel-page">
    <div class="header">
      <h1>默认旅程</h1>
    </div>

    <!-- 旅程类型标签 -->
    <div class="top-tabs">
      <div class="tab" :class="{ active: currentTopTab === '独自旅程' }" @click="currentTopTab = '独自旅程'">独自旅程</div>
      <div class="tab" :class="{ active: currentTopTab === '同行旅程' }" @click="currentTopTab = '同行旅程'">同行旅程</div>
    </div>

    <!-- 子标签栏 -->
    <div class="second-tabs">
      <div class="tab" :class="{ active: currentSubTab === '行程' }" @click="currentSubTab = '行程'">行程</div>
      <div class="tab" :class="{ active: currentSubTab === '账单' }" @click="currentSubTab = '账单'">账单</div>
      <div class="tab" :class="{ active: currentSubTab === '行李' }" @click="currentSubTab = '行李'">行李</div>
    </div>

    <!-- 行程内容 -->
    <div v-if="currentSubTab === '行程'" class="sub-content">
      <div class="item" v-for="(item, index) in scheduleItems" :key="index">
        <img :src="item.icon" alt="item.name" class="item-icon" />
        <div class="item-text">
          <p>{{ item.name }}</p>
          <p class="item-label">{{ item.label }}</p>
        </div>
      </div>
    </div>

    <!-- 账单内容 -->
    <div v-if="currentSubTab === '账单'" class="sub-content">
      <div class="icon-grid">
        <div class="icon-item" v-for="(item, index) in billIcons" :key="index">
          <img :src="item.icon" alt="item.name" class="icon-img" />
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="payment-bar">
        <p>支付宝</p>
        <p>0.00</p>
      </div>
      <div class="keyboard">
        <div class="row">
          <button class="key">1</button>
          <button class="key">2</button>
          <button class="key">3</button>
          <button class="key">日期</button>
        </div>
        <div class="row">
          <button class="key">4</button>
          <button class="key">5</button>
          <button class="key">6</button>
          <button class="key">+</button>
        </div>
        <div class="row">
          <button class="key">7</button>
          <button class="key">8</button>
          <button class="key">9</button>
          <button class="key">-</button>
        </div>
        <div class="row">
          <button class="key">.</button>
          <button class="key">0</button>
          <button class="key">删除</button>
          <button class="key confirm">完成</button>
        </div>
      </div>
    </div>

    <!-- 行李内容 -->
    <div v-if="currentSubTab === '行李'" class="sub-content">
      <div class="icon-grid">
        <div class="icon-item" v-for="(item, index) in luggageIcons" :key="index">
          <img :src="item.icon" alt="item.name" class="icon-img" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>

    <!-- 温馨提示 -->
    <div v-if="showTip" class="tip">
      <div class="tip-content">
        <h3>温馨提示</h3>
        <p>点击需要用品纲目进行选择，支持拍照上传物品图片。</p>
        <button class="tip-btn" @click="showTip = false">了解 进入旅程</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTopTab: '独自旅程', // 独自旅程/同行旅程
      currentSubTab: '行程',     // 行程/账单/行李
      showTip: true,             // 温馨提示显示状态
      scheduleItems: [
        { icon: '/static/1.png', name: '请点击选择出行时间', label: '时间' },
        { icon: '/static/2.png', name: '请点击选择出行地点', label: '地点' },
        { icon: '/static/go.png', name: '请点击选择路线地点', label: '出行' }
      ],
      billIcons: [
        { icon: '/static/icon-high-speed.png', name: '高铁' },
        { icon: '/static/icon-plane.png', name: '飞机' },
        { icon: '/static/icon-drive.png', name: '自驾' },
        { icon: '/static/icon-supplies.png', name: '用品' },
        { icon: '/static/icon-homestay.png', name: '民宿' },
        { icon: '/static/icon-hotel.png', name: '酒店' },
        { icon: '/static/icon-subway.png', name: '地铁' },
        { icon: '/static/icon-taxi.png', name: '出租' },
        { icon: '/static/icon-food.png', name: '美食' },
        { icon: '/static/icon-ticket.png', name: '门票' },
        { icon: '/static/icon-estimate.png', name: '预计' },
        { icon: '/static/icon-custom.png', name: '自定义' }
      ],
      luggageIcons: [
        { icon: '/static/icon-clothes.png', name: '上衣' },
        { icon: '/static/icon-pants.png', name: '裤子' },
        { icon: '/static/icon-shoes.png', name: '鞋子' },
        { icon: '/static/icon-skirt.png', name: '裙子' },
        { icon: '/static/icon-backpack.png', name: '背包' },
        { icon: '/static/icon-charge.png', name: '充电' },
        { icon: '/static/icon-electronic.png', name: '电子' },
        { icon: '/static/icon-makeup.png', name: '美妆' },
        { icon: '/static/icon-document.png', name: '资料' },
        { icon: '/static/icon-card.png', name: '卡证' },
        { icon: '/static/icon-cup.png', name: '杯具' },
        { icon: '/static/icon-accessory.png', name: '饰品' },
        { icon: '/static/icon-camera.png', name: '拍摄' },
        { icon: '/static/icon-specialty.png', name: '特产' },
        { icon: '/static/icon-supplies.png', name: '用品' },
        { icon: '/static/icon-custom.png', name: '自定义' }
      ]
    };
  },
  mounted() {
    // 温馨提示3秒后自动消失
    setTimeout(() => {
      this.showTip = false;
    }, 3000);
  }
};
</script>

<style scoped>
.travel-page {
  min-height: 100vh;
  background-color: #00a8ff;
  padding: 15px;
  color: #000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;
}

.header button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

/* 旅程类型标签 */
.top-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;
  padding-bottom: 5px;
}

.top-tabs .tab {
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  position: relative;
}

.top-tabs .tab.active {
  color: #ff0000; /* 激活时红色文字 */
}

/* 激活时的下划线 */
.top-tabs .tab.active::after {
  content: '';
  position: absolute;
  bottom: -7px; /* 与父元素padding-bottom配合 */
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ff0000;
}
/* 子标签栏 */
.second-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.second-tabs .tab {
  padding: 4px 8px;
  background-color: #fff;
  color: #00a8ff;
  font-size: 12px;
  cursor: pointer;
  border-radius: 20px; /* 圆形标签 */
  border: 1px solid #000;
  width: 60px;
  text-align: center;
}

.second-tabs .tab.active {
  background-color: #ffd700;
  color: #333;
}

.sub-content {
  background-color: #00a8ff;
  padding: 15px;
  min-height: 300px;
}

/* 行程项 */
.item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 15px;
}

.item-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%; /* 圆形图标 */
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-text p {
  margin: 0;
  line-height: 1.5;
}

.item-label {
  font-size: 12px;
  color: #333;
}

/* 图标网格 */
.icon-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.icon-item {
  width: 23%;
  text-align: center;
}

.icon-img {
  width: 60px;
  height: 60px;
  border-radius: 50%; /* 圆形图标 */
  background-color: #ff0000;
  margin: 0 auto 5px;
}

/* 账单支付 */
.payment-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffd700;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.keyboard {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.row {
  display: flex;
  gap: 5px;
}

.key {
  flex: 1;
  padding: 15px 10px;
  border-radius: 8px;
  border: 1px solid #000;
  font-size: 18px;
  background-color: #fff;
  cursor: pointer;
}

.key.confirm {
  background-color: #ff0000;
  color: #fff;
}

/* 温馨提示 */
.tip {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e63946;
  color: #fff;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; /* 顶部圆角 */
  animation: fadeIn 0.3s ease;
}

.tip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tip h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.tip p {
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
}

.tip-btn {
  background-color: #ffd700;
  color: #333;
  border: 1px solid #000;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>