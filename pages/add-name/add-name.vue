<template>
  <div class="trip-name-page">
    <div class="back-section">
      <span class="back-btn" @click="handleBack">返回</span>
    </div>
    <div class="content-section">
      <img src="/static/飞机.png" alt="卡通形象" class="cartoon-img" />
      <p class="name-tip">为这次旅程<br>取一个好听的名字吧</p>
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
    countChars() {
      this.charLength = this.tripName.length;
    },
    handleBack() {
      // 实际项目中可通过路由返回，此处模拟
      console.log('返回上一页');
    },
    handleConfirm() {
      // 实际项目中可提交旅程名称，此处模拟
      console.log(`确认旅程名称：${this.tripName}`);
    }
  },
  mounted() {
    this.countChars();
  }
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
.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cartoon-img {
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  position: relative;
  left: -80px;
}
.name-tip {
  text-align: right; /* 文字右对齐 */
   width: 100%; /* 确保元素占满父容器宽度，以便对齐生效 */
   margin: 0px; /* 清除默认边距 */
   color: #fff;
   font-size: 18px;
   line-height: 1.5; /* 调整行高，模拟两行排列效果 */
}
.input-wrap {
  width: 100%;
  background-color: #ffcc5c;
  border-radius: 20px;
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
  padding: 12px;
  background-color: #ffcc5c;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  color: #000;
}
</style>