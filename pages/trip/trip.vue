、<template>
  <div class="journey-page">
    <!-- 顶部区域 -->
    <div class="top-area">
      <button class="add-btn">+</button>
      <img src="/static/go.png" alt="旅行鹦鹉" class="parrot-img" />
    </div>

    <!-- 待出发区域 -->
     <div class="section">
       <h2 class="section-title">待出发</h2>
       <div class="card-group">
		<navigator url="/pages/Detail/Detail" class="card blue">
         <div class="card blue"></div>
		</navigator>
         <div class="card red"></div>
       </div>
     </div>
   
     <!-- 已结束区域 -->
     <div class="section">
       <div class="ended-header">
         <h2 class="section-title">已结束</h2>
         <p class="ended-stats">3次旅程 3.6KM 总消费¥32000.00</p>
       </div>
       <div class="card-group">
         <div class="card blue"></div>
         <div class="card red"></div>
         <div class="card blue"></div>
       </div>
     </div>
  </div>
</template>

<style scoped>
.journey-page {
  min-height: 100vh;
  background-color: #00a8ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 顶部区域 */
.top-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
.add-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #000;
  color: #fafafa;
  font-size: 24px;
  font-weight: 900;
  border: none;
  cursor: pointer;
}
.parrot-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
   transform: scaleX(-1);
}

/* 板块通用样式 */
.section {
  background-color: #ffd700;
  margin: 10px;
  border-radius: 8px;
  padding: 15px;
}
.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffffff;
}

/* 待出发卡片组 */
.card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
.card {
  width: calc(50% - 5px);
  height: 90px;
  border-radius: 8px;
}
.blue {
  background-color: #00a8ff;
}
.red {
  background-color: #e63946;
}

/* 已结束区域头部 */
.section {
  background-color: #ffd700;
  margin: 10px;
  border-radius: 8px;
  padding: 15px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 15px 0;
}

/* 待出发卡片组 */
.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.card {
  height: 80px;
  border-radius: 8px;
}
.blue {
  background-color: #00a8ff;
  flex: 1;
  min-width: calc(50% - 5px);
}
.red {
  background-color: #e63946;
  width: 100px;
}

/* 已结束区域头部 */
.ended-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.ended-stats {
  font-size: 12px;
  color: #666;
  margin: 0;
}

/* 已结束卡片组 */
.ended-header + .card-group .card {
  width: 100%;
  margin-bottom: 10px;
}
.ended-header + .card-group .card:last-child {
  margin-bottom: 0;
}
</style>