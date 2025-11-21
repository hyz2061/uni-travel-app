<template>
   <div class="user-page">
    <!-- 顶部装饰区 -->
     <div class="top-banner">
     <img src="/static/背景.png" alt="地球鹦鹉" class="banner-img" />
     <div class="user-info-stats">
       <div class="user-info">
         <img src="/static/头像.png" alt="用户头像" class="avatar" />
         <span class="nickname" @click="goToLogin">
            HI！{{ userInfo.nickname || '未登录' }}
          </span>
         <img src="/static/二维码.png" alt="二维码" class="qrcode" />
       </div>
       <div class="stats-row">
         <div class="stat-item">
           <span class="stat-num">0</span>
           <span class="stat-label">积分商城</span>
         </div>
         <span class="stat-num">|</span>
         <div class="stat-item">
           <span class="stat-num">0</span>
           <span class="stat-label">采集行程</span>
         </div>
         <span class="stat-num">|</span>
         <div class="stat-item">
           <span class="stat-num">0</span>
           <span class="stat-label">收藏行程</span>
         </div>
       </div>
     </div>
   </div>

  <!-- 退出登录按钮（移到此处） -->
  <div class="logout-section" v-if="userInfo.nickname">
    <button class="logout-btn" @click="logout">退出登录</button>
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
           <img src="/static/T1.png" alt="开道有礼" class="func-icon" />
           <span class="func-label">开道有礼</span>
         </div>
         <div class="func-item">
           <img src="/static/T2.png" alt="会员中心" class="func-icon" />
           <span class="func-label">会员中心</span>
         </div>
         <div class="func-item">
           <img src="/static/T3.png" alt="三方兑换" class="func-icon" />
           <span class="func-label">三方兑换</span>
         </div>
         <div class="func-item">
           <img src="/static/T4.png" alt="我的礼品" class="func-icon" />
           <span class="func-label">我的礼品</span>
         </div>
         <div class="func-item">
           <img src="/static/T6.png" alt="加入群聊" class="func-icon" />
           <span class="func-label">加入群聊</span>
         </div>
         <div class="func-item">
           <img src="/static/T8.png" alt="官方客服" class="func-icon" />
           <span class="func-label">官方客服</span>
         </div>
         <div class="func-item">
           <img src="/static/T9.png" alt="更多" class="func-icon" />
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
  background-color: #ffffff;
}


/* 顶部装饰区 */
.top-banner {
  position: relative;
  width: 100%;
  background-color:  #00a8ff;
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
  background-color: #f6cd48;
  border-radius: 18px;
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

/* 会员特权区整体布局：改为垂直排列，底部对齐内容 */
.vip-section {
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  padding: 12px 15px;
  background-color: #00a8ff; /* 蓝色背景 */
  margin: 10px;
  border-radius: 10px;
}

/* 标签栏：保持水平分布，背景改为黄色，增加样式 */
.tab {
  display: flex;
  justify-content: space-between;
  background-color: #fdd835; /* 黄色背景 */
  padding: 8px 15px;
  border-radius: 8px 8px 0 0; /* 顶部圆角 */
  margin: -12px -15px 15px; /* 向外扩展覆盖父元素padding */
}

.tab span {
  font-size: 16px;
  font-weight: bold;
}

.tab span:not(:last-child) {
  border-right: 1px solid #000; /* 分隔线 */
  padding-right: 20px;
  margin-right: 20px;
}

/* 提示文字：底部左对齐 */
.vip-tip {
  font-size: 14px;
  color: #ffffff;
  position: relative;
  top: 30px;
  font-weight: 900;
 }

/* 开通按钮：右对齐 */
.vip-btn {
  background-color: #fe4a49;
  color: #fff;
  border: none;
  padding: 2px 15px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  align-self: flex-end; /* 右对齐 */
}

.logout-section {
  display: flex;
  justify-content: center;
  margin: 20px 10px 10px;
}

.logout-btn {
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.logout-btn:active {
  background-color: #d9363e;
}

/* 功能入口区 */
.func-section {
  background-color: #00a8ff;
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
  background-color: #fe4a49;
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

<script>
export default {
  data() {
    return {
      userInfo: {
        nickname: ''
      }
    }
  },
  mounted() {
    this.loadUserInfo();
  },
  methods: {
    loadUserInfo() {
      // 从本地存储加载用户信息
      try {
        const storedUser = uni.getStorageSync('userInfo');
        if (storedUser) {
          this.userInfo = JSON.parse(storedUser);
        }
      } catch (e) {
        console.error('读取用户信息失败', e);
      }
    },

    goToLogin() {
      // 如果未登录则跳转到登录页
      if (!this.userInfo.nickname) {
        uni.navigateTo({
          url: '/pages/login/login'
        });
      }
    },

    logout() {
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            try {
              // 清除本地存储的用户信息
              uni.removeStorageSync('userInfo');
              // 清空当前组件中的用户信息
              this.userInfo.nickname = '';
              uni.showToast({
                title: '已退出登录',
                icon: 'success'
              });
            } catch (e) {
              console.error('退出登录失败', e);
              uni.showToast({
                title: '退出失败',
                icon: 'none'
              });
            }
          }
        }
      });
    }
  }
}
</script>

