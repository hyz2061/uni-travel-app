<template>
  <div class="user-page">
    <!-- 顶部装饰区 -->
    <div class="top-banner">
      <img src="/static/背景.png" alt="地球鹦鹉" class="banner-img" />
      <div class="user-info-stats">
        <div class="user-info">
          <img src="https://picsum.photos/50/50" alt="用户头像" class="avatar" />
          <span class="nickname">HI！未登录</span>
          <img src="https://picsum.photos/30/30" alt="二维码" class="qrcode" />
        </div>
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-num">0</span>
            <span class="stat-label">积分商城</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">0</span>
            <span class="stat-label">采集行程</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">0</span>
            <span class="stat-label">收藏行程</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 会员特权区 -->
    
    <div class="vip-section">
      <span class="vip-tip">暂未开通此VIP特权</span>
      <button class="vip-btn">开通</button>
    </div>

    <!-- 功能入口区 -->
     <div class="func-section">
       <h3 class="func-title">我的功能</h3>
       <div class="func-grid">
         <div class="func-item">
           <img src="https://picsum.photos/45/45?random=1" alt="开道有礼" class="func-icon" />
           <span class="func-label">开道有礼</span>
         </div>
         <div class="func-item">
           <img src="https://picsum.photos/45/45?random=2" alt="会员中心" class="func-icon" />
           <span class="func-label">会员中心</span>
         </div>
         <div class="func-item">
           <img src="https://picsum.photos/45/45?random=3" alt="三方兑换" class="func-icon" />
           <span class="func-label">三方兑换</span>
         </div>
         <div class="func-item">
           <img src="https://picsum.photos/45/45?random=4" alt="我的礼品" class="func-icon" />
           <span class="func-label">我的礼品</span>
         </div>
         <div class="func-item">
           <img src="https://picsum.photos/45/45?random=5" alt="加入群聊" class="func-icon" />
           <span class="func-label">加入群聊</span>
         </div>
         <div class="func-item">
           <img src="https://picsum.photos/45/45?random=6" alt="官方客服" class="func-icon" />
           <span class="func-label">官方客服</span>
         </div>
         <div class="func-item">
           <img src="https://picsum.photos/45/45?random=7" alt="更多" class="func-icon" />
           <span class="func-label">更多</span>
         </div>
       </div>
     </div>
  </div>
</template>

<style scoped>
.user-page {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #ffd700;
}


/* 顶部装饰区 */
.top-banner {
  position: relative;
  width: 100%;
  background-color:  #2196F3;
}
.banner-img {
  width: 100%;
  height: auto;
}
.user-info-stats {
  position: absolute;
  bottom: -30px;
  left: 10px;
  right: 10px;
  background-color: #ffd700;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.nickname {
  font-size: 16px;
  font-weight: 500;
  flex: 1;
}
.qrcode {
  width: 24px;
  height: 24px;
}
.stats-row {
  display: flex;
  justify-content: space-around;
}
.stat-item {
  text-align: center;
}
.stat-num {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}
.stat-label {
  display: block;
  font-size: 12px;
  margin-top: 5px;
}

/* 会员特权区 */
.vip-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background-color: #00a8ff; /* 蓝色背景 */
  margin: 10px;
  border-radius: 8px;
}
.vip-tip {
  font-size: 14px;
  color: #ffffff; /* 白色文字 */
}
.vip-btn {
  background-color: #e63946;
  color: #fff;
  border: none;
  padding: 4px 15px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

/* 功能入口区 */
.func-section {
  background-color:  #2196F3;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
}
.func-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;
}
.func-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.func-item {
  width: 28%;
  text-align: center;
  margin-bottom: 15px;
}
.func-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ffd700;
  padding: 5px;
}
.func-label {
  display: block;
  font-size: 12px;
  margin-top: 5px;
  color: #fff;
}
/* 底部导航区 */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  background-color: #ffd700;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
.nav-item {
  text-align: center;
}
.nav-icon {
  width: 30px;
  height: 30px;
}
.nav-label {
  display: block;
  font-size: 10px;
  margin-top: 2px;
  color: #333;
}
.nav-add {
  position: relative;
  top: -18px;
  background-color: #00a8ff;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.add-icon {
  width: 28px;
  height: 28px;
}
</style>