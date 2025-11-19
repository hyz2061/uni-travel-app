<template>
  <div class="trip-name-page">

	    <div class="back-area">
	       <span class="back-icon" @click="goback">< 返回</span>
	    </div>
    <div class="back-section">
    </div>
    <div class="content-section">
      <img src="/static/飞机.png" alt="卡通形象" class="cartoon-img" />
      <div class="text-wrap">
        <p class="name-tip">为这次旅程<br>取一个好听的名字吧</p>
      </div>
      <div class="input-wrap">
        <input 
          type="text" 
          v-model="tripName" 
          placeholder="我的旅行计划" 
          class="name-input"
          @input="countChars"
        />
        <span class="char-count">{{ charLength }}/50</span>
      </div>
      <button class="confirm-btn" @click="handleConfirm">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tripName: '我的旅行计划',
      charLength: 0
    };
  },
  methods: {
	   goback() {
	        uni.redirectTo({
	          url: "/pages/index/index"
	        })
	        },
    countChars() {
      this.charLength = this.tripName.length;
    },
    handleBack() {
      console.log('返回上一页');
    },
    handleConfirm() {
      console.log(`确认旅程名称：${this.tripName}`);
    }
  },
  mounted() {
    this.countChars();
  },

};
</script>

<style scoped>
.trip-name-page {
  background-color: #00a8ff;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
.back-section {
  margin-bottom: 30px;
}
.back-btn {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.back-icon{
	color: #ffffff;
}
.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cartoon-img {
  width: 120px;
  height: 120px;
  transform: scaleX(-1); /* 镜像效果 */
  position: relative;
  left: -100px;
}
.text-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  position: relative;
  top: -80px;
}
.name-tip {
  text-align: right;
  width: auto; /* 调整为自适应宽度 */
  margin: 0;
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
}
.input-wrap {
  width: 100%;
  background-color: #ffcc5c;
  border-radius: 20px; /* 去掉圆角 */
   border: 2rpx solid #000;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #000;
}
.name-input::placeholder {
  color: #000;
  opacity: 0.8;
}
.char-count {
  color: #000;
  font-size: 14px;
}
.confirm-btn {
  width: 100%;
  padding: 2px;
  background-color: #ffcc5c;
  border: none;
  border-radius: 20px; /* 去掉圆角 */
  font-size: 16px;
  cursor: pointer;
  color: #000;
  margin-bottom: 20px;
}
.bottom-text {
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
}
</style>