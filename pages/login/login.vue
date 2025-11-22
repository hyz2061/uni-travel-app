<!--登录页，还要加返回键-->


<template>
  <view class="login-page">
	   <view class="top-btn-container">
	        <template v-if="currentView === 'account'">
	          <button class="skip-btn" @click="handleSkip">跳过</button>
	        </template>
	        <template v-else>
	          <button class="back-btn" @click="goBack">< 返回</button>
	        </template>
	      </view>
	 
    <!-- 顶部Logo区域 -->
    <view class="logo-container">WA
      <image src="/static/头像.png" mode="aspectFit" class="logo-img"></image>
    </view>

    <!-- 表单区域-根据状态切换 -->
    <view class="form-container">
      <!-- 账号密码登录 -->
      <view v-if="currentView === 'account'">
        <view class="input-group">
            <input type="text" placeholder="用户名/电话号码" class="input-field" v-model="username" style="background-color:#ffd700; color: #000;;"/>
            <!-- 修改密码输入框 -->
            <input type="tel" placeholder="6位数字密码" class="input-field" v-model="password" maxlength="6" style="background-color:#ffd700; color: #000;;"/>
          </view>
        <view class="link-row">
          <!-- 替换 button 为 a 标签 -->
          <text @click="switchToFindPwd" class="link-btn">忘记密码</text>
          <text @click="switchToCodeLogin" class="link-btn">验证码登录</text>
        </view>

        <button class="main-btn"  @click="handleAccountLogin">登录</button>
        <view class="agreement">
          <checkbox checked />
          <text>已阅读并同意《隐私协议》和《用户协议》</text>
        </view>
      </view>

      <view v-else-if="currentView === 'code'">
        <view class="input-group">
          <button @click="goBack" class="back-button" aria-label="返回消息列表">
            <i class="arrow-left"></i>
          </button>
          <!-- 绑定电话号码输入框 -->
          <input type="text" placeholder="电话号码" class="input-field" v-model="phone" style="background-color:#ffd700; color: #000;"/>

          <view class="verify-container">
            <!-- 绑定验证码输入框 -->
            <input
                class="input-item verify-input"
                placeholder="验证码"
                v-model="code"
                maxlength="6"
            />
            <button class="get-code-btn" @click="getVerificationCode">获取验证码</button>
          </view>
        </view>
        <!-- 修改确认按钮的点击事件 -->
        <button class="main-btn red-btn" @click="handleCodeLogin">确认</button>
      </view>

      <!-- 找回密码 -->
	  
      <view v-else-if="currentView === 'findPwd'">
		  <button @click="goBack" class="back-button" aria-label="返回消息列表">
		    <i class="arrow-left"></i>
		  </button>
        <view class="input-group">
          <input type="text" placeholder="电话号码" class="input-field" />
          <!-- 页面的 WXML 文件 -->
          <view class="verify-container">
                 <input 
                   class="input-item verify-input" 
                   placeholder="验证码" 
                   v-model="code"
                 />
                 <button class="get-code-btn" @click="getVerificationCode">获取验证码</button>
               </view>
          <input type="password" placeholder="新密码" class="input-field" />
          <input type="password" placeholder="重新输入密码" class="input-field" />
        </view>
        <button class="main-btn red-btn" @click="goBack">确认</button>
      </view>
    </view>

    <!-- 其他登录方式 -->
    <view class="other-login">
		<button @click="goBack" class="back-button" aria-label="返回消息列表">
		  <i class="arrow-left"></i>
		</button>
      <view class="divider">
        <view class="line"></view>
        <text>它登陆方式</text>
        <view class="line"></view>
      </view>
      <view class="icon-group">
        <image src="/static/wechat.png" mode="aspectFit" class="login-icon" @click="loginByWechat"></image>
        <image src="/static/qq.png" mode="aspectFit" class="login-icon" @click="loginByQQ"></image>
        <image src="/static/alipay.png" mode="aspectFit" class="login-icon" @click="loginByAlipay"></image>
      </view>
    </view>
  </view>
</template>

<!-- 在 script 部分修改 handleAccountLogin 方法 -->
<script>
export default {
  data() {
    return {
      currentView: 'account', // 初始显示账号密码登录：account/code/findPwd
      // 账号密码登录
      username: '',
      password: '',
      // 验证码登录/找回密码共用
      phone: '',
      code: '',
      newPassword: '' // 新密码（找回密码用）
    };
  },
  methods: {
    handleSkip() {
      uni.navigateTo({
        url: '/pages/index/index'
      });
    },
    // 切换视图
    switchView(viewType) {
      this.currentView = viewType;
    },
    // 切换到验证码登录（快捷方法）
    switchToCodeLogin() {
      this.currentView = 'code';
    },
    // 切换到找回密码
    switchToFindPwd() {
      this.currentView = 'findPwd';
    },
    goBack() {
      this.currentView = 'account';
    },



    // 验证码登录逻辑
   handleAccountLogin() {
         if (!this.username) {
           return uni.showToast({ title: '请输入用户名', icon: 'none' });
         }
         if (!this.password) {
           return uni.showToast({ title: '请输入密码', icon: 'none' });
         }
         // 添加6位数密码验证
         if (this.password.length !== 6 || !/^\d{6}$/.test(this.password)) {
           return uni.showToast({ title: '密码必须为6位数字', icon: 'none' });
         }
   
         // 模拟登录成功，实际项目中这里会调用登录接口
         const userInfo = {
           nickname: this.username
         };
   
         try {
           uni.setStorageSync('userInfo', JSON.stringify(userInfo));
           uni.showToast({
             title: '登录成功',
             icon: 'success',
             success: () => {
               setTimeout(() => {
                 // 修改为 reLaunch 方式跳转到首页
                 uni.reLaunch({
                   url: '/pages/index/index'
                 });
               }, 1000);
             }
           });
         } catch (e) {
           console.error('保存用户信息失败', e);
           uni.showToast({ title: '登录失败', icon: 'none' });
         }
       },


    // 获取验证码
    handleCodeLogin() {
      if (!this.phone) {
        return uni.showToast({ title: '请输入手机号', icon: 'none' });
      }
      if (!this.code) {
        return uni.showToast({ title: '请输入验证码', icon: 'none' });
      }
      // 添加6位数验证码验证
      if (this.code.length !== 6 || !/^\d{6}$/.test(this.code)) {
        return uni.showToast({ title: '验证码必须为6位数字', icon: 'none' });
      }

      // 模拟登录成功
      const userInfo = {
        nickname: '验证码用户'
      };

      try {
        uni.setStorageSync('userInfo', JSON.stringify(userInfo));
        uni.showToast({
          title: '登录成功',
          icon: 'success',
          success: () => {
            setTimeout(() => {
              uni.reLaunch({
                url: '/pages/index/index'
              });
            }, 1000);
          }
        });
      } catch (e) {
        console.error('保存用户信息失败', e);
        uni.showToast({ title: '登录失败', icon: 'none' });
      }
    },

    // 重置密码
    resetPassword() {
      if (!this.phone) return uni.showToast({ title: '请输入手机号', icon: 'none' });
      if (!this.code) return uni.showToast({ title: '请输入验证码', icon: 'none' });
      if (!this.newPassword) return uni.showToast({ title: '请输入新密码', icon: 'none' });
      uni.showToast({ title: '密码重置成功', icon: 'success' });
      setTimeout(() => {
        this.switchView('account'); // 重置成功后切回账号登录
      }, 1000);
    },
	

    // 微信登录
    loginByWechat() {
      // 模拟微信登录成功
      const userInfo = {
        nickname: '微信用户'
      };

      try {
        uni.setStorageSync('userInfo', JSON.stringify(userInfo));
        uni.showToast({
          title: '登录成功',
          icon: 'success',
          success: () => {
            setTimeout(() => {
              uni.switchTab({
                url: '/pages/index/index'
              });
            }, 1000);
          }
        });
      } catch (e) {
        console.error('保存用户信息失败', e);
        uni.showToast({ title: '登录失败', icon: 'none' });
      }
    },
    // QQ登录
    loginByQQ() {
      // 模拟QQ登录成功
      const userInfo = {
        nickname: 'QQ用户'
      };

      try {
        uni.setStorageSync('userInfo', JSON.stringify(userInfo));
        uni.showToast({
          title: '登录成功',
          icon: 'success',
          success: () => {
            setTimeout(() => {
              uni.switchTab({
                url: 'pages/index/index'
              });
            }, 1000);
          }
        });
      } catch (e) {
        console.error('保存用户信息失败', e);
        uni.showToast({ title: '登录失败', icon: 'none' });
      }
    },
    // 支付宝登录
    loginByAlipay() {
      // 模拟支付宝登录成功
      const userInfo = {
        nickname: '支付宝用户'
      };

      try {
        uni.setStorageSync('userInfo', JSON.stringify(userInfo));
        uni.showToast({
          title: '登录成功',
          icon: 'success',
          success: () => {
            setTimeout(() => {
              uni.switchTab({
                url: '/pages/profile/profile'
              });
            }, 1000);
          }
        });
      } catch (e) {
        console.error('保存用户信息失败', e);
        uni.showToast({ title: '登录失败', icon: 'none' });
      }
    }
  }
};
</script>


<style scoped>
text{
	font-size: 14px;
}
.jump{
	background-color: #40a9ff;
	 display: flex; /* 开启Flex布局 */
	  justify-content: flex-end; /* 子元素靠右对齐 */
}
.jump-span{
	color: #ffffff;
	border: 0em;
	position: relative;
	left: 330px;
	
}
.login-page {
  width: 100%;
  height: 100vh;
  background-color: #40a9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80rpx;
  box-sizing: border-box;
}

.logo-container {
  width: 200rpx;
  height: 200rpx;
  margin-bottom: 60rpx;
}

.logo-img {
  width: 100%;
  height: 80%;
  border-radius: 50%;
}

.form-container {
  width: 80%;
  max-width: 600rpx;
}

.input-group {
  margin-bottom: 30rpx;
}

.input-field {
  width: 100%;
  height: 80rpx;
  border: 2rpx solid #000;
  border-radius: 40rpx;
  padding: 0 30rpx;
  margin-bottom: 20rpx;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 28rpx;
}

.code-row {
  display: flex;
  gap: 20rpx;
}

.code-input {
  flex: 1;
}

.code-btn {
  width: 200rpx;
  height: 80rpx;
  border: 1rpx solid #000;
  border-radius: 40rpx;
  background-color: #ffd700;
  color: #000;
  font-size: 24rpx;
}

.link-row {
  background-color: #4da6ff; /* 蓝色背景 */
  display: flex;
  justify-content: space-between; /* 两端对齐 */
  padding: 4px 15px; /* 内边距 */
  align-items: center;
  flex-direction: row;
}

.link-btn {
  /* 清除链接默认样式 */
  text-decoration: none; /* 去除下划线 */
  color: white; /* 白色文字 */
  font-size: 14px;
  padding: 5px 0; /* 增加点击区域 */
  
  /* 可选：添加 hover 效果 */
  transition: opacity 0.2s;
}

.link-btn:hover {
  opacity: 0.9; /* hover 时略微透明 */
}

.main-btn {
  width: 100%;
  height: 80rpx;
  border: none;
  border-radius: 40rpx;
  background-color: #ffd700;
  color: #000;
  font-size: 28rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}
.code-item {
  display: flex;
  align-items: center;
}
.code-btn {
  width: 200rpx;
  height: 80rpx;
  background-color: #ffd700;
  color: #000;
  border-radius: 40rpx;
  font-size: 24rpx;
  border: 2rpx solid #000;
}

.red-btn {
  background-color: #ff4d4f;
  color: #fff;
}

.agreement {
  display: flex;
  align-items: center;
  font-size: 24rpx;
  color: #fff;
  flex-direction: row;
}
/* 输入框通用样式（黄色背景、黑色文字） */
.input-field {
 width: 100%; /* 与电话号码输入框宽度一致 */
   /* 其他原有样式保持不变 */
   display: flex;
   align-items: center;
   background-color: #ffd700;
   border-radius: 40rpx; /* 与输入框圆角统一 */
   overflow: hidden;
}

/* 验证码行布局 */
.code-row {
  display: flex;
  align-items: center;
  width: 280px; /* 宽度可按需调整 */
  background-color: #ffd700; /* 黄色背景 */
  border-radius: 20px; /* 圆角 */
  overflow: hidden; /* 隐藏内部元素超出的圆角 */
}

/* 验证码输入框 */
.code-input {
  padding: 15rpx 20rpx; /* 与 .input-field 的 padding 一致 */
  font-size: 28rpx; /* 与 .input-field 的 font-size 一致 */
  height: auto; /* 由 padding 撑开高度，与 .input-field 统一 */
  line-height: 1.5; /* 文字行高，与 .input-field 统一 */
}

/* 验证码按钮 */
.code-btn {
  padding: 15rpx 20rpx; /* 与 .input-field 的 padding 一致 */
  font-size: 28rpx; /* 与 .input-field 的 font-size 一致 */

  line-height: 1.5;
}
.code-btn:hover {
  opacity: 0.8;
}
/* 红色确认按钮 */
.main-btn.red-btn {
  background-color: #ff5555; /* 红色背景 */
  color: black; /* 白色文字 */
}

.agreement checkbox {
  transform: scale(0.8);
  margin-right: 10rpx;
}

.other-login {
  margin-top: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.other-title {
  font-size: 24rpx;
  color: #fff;
  margin-bottom: 30rpx;
}
.icon-group {
  display: flex;  /* 开启 Flex 布局，子元素默认水平排列 */
  flex-direction: row;  /* 明确设置为水平方向（可省略，默认就是 row） */
  justify-content: space-around; /* 子元素之间均匀分布，也可根据需求用 space-between、center 等 */
  align-items: center; /* 垂直居中对齐 */
}
.login-icon {
  width: 80rpx;
  height: 80rpx;
}


.divider {
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 30rpx;
  color: #fff;
  font-size: 24rpx;
}

.divider .line {
  flex: 1;
  height: 1rpx;
  background-color: #fff;
  opacity: 0.5;
}

.divider text {
  padding: 0 20rpx;
}

.icon-group {
  display: flex;
  gap: 40rpx;
}
/* 页面的 WXSS 文件 */
.verify-container {
   background-color: #ffd700; /* 黄色背景 */
   border: 1px solid #000; /* 黑色边框 */
   border-radius: 50rpx;   /* 圆角优化 */
   padding: 0 30rpx;
   height: 80rpx;
   margin: 5px;
   position: relative;
   top: -5px;
   
  
}

.verify-input {
  flex: 1;
  border: none; /* 去除输入框自身边框 */
  outline: none; /* 去除焦点高亮 */
  height: 100%;
  position: relative;
  top: 10px;
}


.get-code-btn {
	width: 190rpx;
	  height: 40rpx;
	  line-height: 40rpx;
	  left: 180px;
	  top: -10px;
	  background-color: transparent;
	  color: black;
	  border-radius: 10rpx;
	  font-size: 26rpx;
	  border: none;
	  
  }
  .get-code-btn::after {
    border: none; /* 清除小程序按钮默认的伪元素边框 */
  }
  .back-button {
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
    padding: 5px;
    border-radius: 50%;
    transition: background-color 0.2s;
  }
  
  .back-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  /* 顶部按钮容器 */
  .top-btn-container {
    position: absolute;
    top: 20rpx;
    left: 20rpx; /* 返回按钮靠左，跳过按钮可调整位置 */
    z-index: 999;
  }
  
  /* 跳过按钮样式 */
  .skip-btn {
    background-color: transparent;
    color: #fff;
    font-size: 28rpx;
    padding: 10rpx 20rpx;
    border: none;
  }
  
  .skip-btn::after {
    border: none;
  }
  
  /* 返回按钮样式 */
  .back-btn {
    background-color: transparent;
    color: #fff;
    font-size: 28rpx;
    padding: 10rpx 20rpx;
    border: none;
    display: flex;
    align-items: center;
  }
  
  .back-btn::after {
    border: none;
  }
  
  /* 可选：添加返回箭头图标（需先引入图标资源） */
  .back-btn .arrow-icon {
    margin-right: 8rpx;
    width: 24rpx;
    height: 24rpx;
  }
</style>