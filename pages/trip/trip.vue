<!--旅程+点待出发的蓝色框可以跳转到详情Detail，行李页点添加进入独自/同行旅程-->

<template>
  <div class="journey-page">
    <!-- 顶部区域 -->
    <div class="top-area">
      <button class="add-btn">+</button>
      <img src="/static/go.png" alt="旅行鹦鹉" class="parrot-img" />
    </div>

   <!-- 外层容器统一背景 -->
   <div class="container">
     <!-- 待出发区域 -->
     <div class="section">
       <h2 class="section-title">待出发</h2>
       <div class="card-group">
         <navigator url="/pages/Detail/Detail" class="card blue large"></navigator>
         <div class="card red small"></div>
       </div>
     </div>
   
     <!-- 已结束区域 -->
     <div class="section">
       <div class="ended-header">
         <h2 class="section-title">已结束</h2>
         <p class="ended-stats">3次旅程 3.6KM 总消费¥32000.00</p>
       </div>
       <div class="card-group">
         <div class="card blue full"></div>
         <div class="card red full"></div>
         <div class="card blue full"></div>
       </div>
     </div>
   </div>
  <tabbar></tabbar>
  </div>
</template>

<style scoped>
.journey-page {
  min-height: 100vh;
  background-color:#00a8ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 顶部区域 */
.top-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #00a8ff;
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
  border-radius: 10px 10px 0px 0px;
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
  border-radius: 10px 10px 0px 0px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 50%; /* 改为 50% */
  height: 90px;
  border-radius: 8px;
}

.blue {
  background-color: #25bdfd;
}
.red {
  background-color: #FE4A49;
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
  background-color:#25bdfd;
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
  color: #ffffff;
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
.container {
  background-color: #ffd700; 
  height: 100%;
  padding: 10px;
  border-radius: 20px 20px 0px 0px;
  margin: 0;
}


.card.blue.full {
  background-color:#25bdfd;
}
.card.red.full {
  background-color: #FE4A49;
}

/* 已结束区域的统计信息 */
.ended-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
</style>