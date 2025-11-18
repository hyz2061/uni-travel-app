<template>
  <view class="tabbar-container">
    <view 
      v-for="(item, index) in tabBarList" 
      :key="index"
      class="tabbar-item"
      @click="switchTab(item.pagePath)"
    >
      <!-- 图标 -->
      <image 
        :src="currentPath === item.pagePath ? item.selectedIconPath : item.iconPath"
        class="tabbar-icon"
      ></image>
      <!-- 文字 -->
      <text 
        :class="currentPath === item.pagePath ? 'tabbar-text active' : 'tabbar-text'"
      >{{ item.text }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabBarList: [],  // TabBar 列表数据
      currentPath: ''  // 当前页面路径
    }
  },
  onLoad() {
    // 获取全局配置的 TabBar 列表
    this.tabBarList = this.$scope.$getAppWebview().getTabBar().list
    // 获取当前页面路径
    this.currentPath = this.$mp.page.route
  },
  methods: {
    // 切换页面
    switchTab(url) {
      if (this.currentPath === url) return
      uni.switchTab({ url: '/' + url })
    }
  }
}
</script>

<style scoped>
.tabbar-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.tabbar-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.tabbar-text {
  font-size: 12px;
  color: #999;
}

.tabbar-text.active {
  color: #007AFF;
}
</style>