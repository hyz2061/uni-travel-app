<template>
  <view class="container" @click="closeDropdown">
    <view class="navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="back-btn" @click="onBack">
        <text class="uni-icon">‹</text>
        <text class="back-text">返回</text>
      </view>
    </view>

    <view class="main-content">
      <view class="header-section">
        <image 
          src="/static/飞机.png" 
          mode="widthFix" 
          class="bird-image"
        ></image>
        <view class="header-text">
          <text>为这次旅程</text>
          <text>添加一起旅行的同伴吧</text>
        </view>
      </view>

      <view class="team-input-box">
        <input 
          type="text" 
          v-model="teamName" 
          placeholder="团队旅游名称" 
          placeholder-style="color: #665230; font-weight: normal;"
          maxlength="50"
          class="team-input"
          @input="handleTeamNameInput"
          @blur="handleTeamNameBlur"
        />
        <text class="char-count">{{ teamName.length }}/50</text>
      </view>

      <view class="companion-card" @click.stop>
        <view class="card-header">
          <text class="header-title">伙伴 ({{ companions.length }}/{{ maxCompanions }})</text>
          <view class="add-icon-btn" @click="focusInput">
            <text class="plus-sign">+</text>
          </view>
        </view>
        
        <view class="card-body">
          <!-- 伙伴列表为空时的提示 -->
          <view v-if="companions.length === 0" class="empty-companions">
            <text class="empty-text">还没有添加伙伴哦～</text>
            <text class="empty-hint">点击下方输入框添加同伴</text>
          </view>
          
          <view v-for="(item, index) in companions" :key="index" class="list-item" :data-index="index">
            
             <view class="delete-btn" @click.stop="showDeleteConfirm(index)">×</view>
          </view>

          <view class="input-area-wrapper">
            <view class="input-row">
             
              
              <view class="pill-input-wrapper">
                <input 
                  type="text" 
                  v-model="inputValue" 
                  placeholder="输入名字或从列表选择" 
                  placeholder-style="color: #8B7E66"
                  class="pill-input"
                  confirm-type="done"
                  @focus="onInputFocus"
                  @input="onInput"
                  @confirm="confirmAdd"
                  :disabled="companions.length >= maxCompanions"
                  :placeholder="companions.length >= maxCompanions ? '最多可添加10位伙伴' : '输入名字或从列表选择'"
                />
              </view>
            </view>

            <view class="dropdown-list" v-if="showDropdown && (filteredFriends.length > 0 || inputValue.trim())">
              <scroll-view scroll-y class="dropdown-scroll">
                <view class="dropdown-title">推荐好友</view>
                
                <view 
                  v-for="(friend, index) in filteredFriends" 
                  :key="friend.id" 
                  class="dropdown-item"
                  @click.stop="selectFriend(friend)"
                >
                  <image :src="friend.avatar" class="dropdown-avatar"></image>
                  <text class="dropdown-name">{{ friend.name }}</text>
                  <text class="dropdown-add-icon">+</text>
                </view>
                
                <view v-if="filteredFriends.length === 0" class="dropdown-empty">
                  没有匹配的好友，可直接点击添加
                </view>
              </scroll-view>
            </view>
          </view>
        </view>
      </view>

      <button class="confirm-btn" hover-class="btn-hover" @click="onConfirm" >
        确定
      </button>

    </view>
  </view>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';


// 状态栏高度
const statusBarHeight = ref(20);
// #ifdef APP-PLUS || MP-WEIXIN
const sysInfo = uni.getSystemInfoSync();
statusBarHeight.value = sysInfo.statusBarHeight || 20;
// #endif

// 团队名称
const teamName = ref('');
const originalTeamName = ref(''); // 用于防抖处理
const teamNameDebounceTimer = ref(null);

// 伙伴相关
const companions = ref([]);
const inputValue = ref('');
const showDropdown = ref(false);
const maxCompanions = ref(10); // 最大伙伴数量限制

// 模拟好友数据
const mockFriends = [
  { id: 1, name: '小明', avatar: '/static/avatar-1.png' },
  { id: 2, name: 'Jessica', avatar: '/static/avatar-2.png' },
  { id: 3, name: '大壮', avatar: '/static/avatar-3.png' },
  { id: 4, name: 'TravelBuddy', avatar: '/static/avatar-4.png' },
  { id: 5, name: 'Lisa', avatar: '/static/avatar-5.png' },
  { id: 6, name: '王大力', avatar: '/static/avatar-1.png' },
  { id: 7, name: '张三疯', avatar: '/static/avatar-2.png' }
];

// 过滤好友列表
const filteredFriends = computed(() => {
  if (!inputValue.value) return mockFriends.filter(friend => 
    !companions.value.some(c => c.name.toLowerCase() === friend.name.toLowerCase())
  );
  
  const inputLower = inputValue.value.toLowerCase();
  return mockFriends.filter(f => 
    f.name.toLowerCase().includes(inputLower) && 
    !companions.value.some(c => c.name.toLowerCase() === f.name.toLowerCase())
  );
});

// 是否可以提交
const canSubmit = computed(() => {
  return teamName.value.trim() !== '' && companions.length > 0;
});

// 返回上一页
const onBack = () => {
  uni.navigateBack({
    delta: 1,
    animationType: 'slide-out-right'
  });
};

// 输入框聚焦
const onInputFocus = () => {
  if (companions.length >= maxCompanions) {
    uni.showToast({ title: '最多可添加10位伙伴', icon: 'none' });
    return;
  }
  showDropdown.value = true;
};

// 输入框输入
const onInput = () => {
  showDropdown.value = true;
};

// 关闭下拉框
const closeDropdown = () => {
  nextTick(() => {
    showDropdown.value = false;
  });
};

const focusInput = () => {
  if (companions.length >= maxCompanions) {
    uni.showToast({ title: '最多可添加10位伙伴', icon: 'none' });
    return;
  }
  
  // #ifdef H5
  const input = document.querySelector('.pill-input');
  input?.focus();
  // #endif
  
  // #ifdef APP-PLUS || MP-WEIXIN
  uni.createSelectorQuery().select('.pill-input').boundingClientRect(rect => {
    if (rect) {
      showDropdown.value = true;
    }
  }).exec();
  // #endif
};

// 检查伙伴是否已存在
const checkExists = (name) => {
  return companions.value.some(c => c.name.toLowerCase() === name.toLowerCase());
};

// 添加伙伴
const handleAddCompanion = (name, avatar = null) => {
  const cleanName = name.trim();
  
  // 验证
  if (!cleanName) {
    uni.showToast({ title: '请输入伙伴名称', icon: 'none' });
    return;
  }
  
  if (cleanName.length > 10) {
    uni.showToast({ title: '伙伴名称不能超过10个字', icon: 'none' });
    return;
  }
  
  if (checkExists(cleanName)) {
    uni.showToast({ title: '这个伙伴已经添加啦', icon: 'none' });
    return;
  }
  
  if (companions.length >= maxCompanions) {
    uni.showToast({ title: '最多可添加10位伙伴', icon: 'none' });
    return;
  }
  
  // 处理头像
  let finalAvatar = avatar || '/static/avatar-default.png';
  if (!avatar) {
    const matchedFriend = mockFriends.find(f => f.name.toLowerCase() === cleanName.toLowerCase());
    if (matchedFriend) finalAvatar = matchedFriend.avatar;
  }
  
  // 添加到列表
  companions.value.push({ 
    name: cleanName, 
    avatar: finalAvatar,
    id: Date.now() + Math.floor(Math.random() * 1000) // 添加唯一ID
  });
  
  // 重置输入
  inputValue.value = '';
  showDropdown.value = false;
  
  // 提示
  uni.showToast({ title: '添加成功', icon: 'success', duration: 800 });
};

// 选择好友
const selectFriend = (friend) => {
  handleAddCompanion(friend.name, friend.avatar);
};

// 确认添加
const confirmAdd = () => {
  handleAddCompanion(inputValue.value);
};

// 显示删除确认
const showDeleteConfirm = (index) => {
  const companion = companions.value[index];
  uni.showModal({
    title: '删除伙伴',
    content: `确定要删除 ${companion.name} 吗？`,
    cancelText: '取消',
    confirmText: '删除',
    confirmColor: '#FF5C5C',
    success: (res) => {
      if (res.confirm) {
        removeCompanion(index);
      }
    }
  });
};

// 删除伙伴
const removeCompanion = (index) => {
  const deletedName = companions.value[index].name;
  companions.value.splice(index, 1);
  uni.showToast({ title: `已删除${deletedName}`, icon: 'none', duration: 800 });
};

// 团队名称输入处理（防抖）
const handleTeamNameInput = () => {
  // 清除之前的定时器
  if (teamNameDebounceTimer.value) {
    clearTimeout(teamNameDebounceTimer.value);
  }
  
  // 设置新的定时器
  teamNameDebounceTimer.value = setTimeout(() => {
    originalTeamName.value = teamName.value;
  }, 500);
};

// 团队名称失去焦点处理
const handleTeamNameBlur = () => {
  const trimmedName = teamName.value.trim();
  if (trimmedName !== teamName.value) {
    teamName.value = trimmedName;
  }
};

// 确认创建
const onConfirm = () => {
  if (!teamName.value.trim()) {
    uni.showToast({ title: '请输入团队名称', icon: 'none' });
    return;
  }
  
  if (companions.length === 0) {
    uni.showToast({ title: '请至少添加一位伙伴', icon: 'none' });
    return;
  }
  
  // 模拟创建请求
  uni.showLoading({ title: '创建中...', mask: true });
  
  // 这里可以替换为真实的接口请求
  setTimeout(() => {
    uni.hideLoading();
    
    // 存储团队信息（示例）
    uni.setStorageSync('currentTeam', {
      teamName: teamName.value.trim(),
      companions: [...companions.value],
      createTime: new Date().getTime()
    });
    
    // 跳转页面并关闭当前页面
    uni.redirectTo({
      url: '/pages/trip/trip',
      success: () => {
        uni.showToast({ title: '团队创建成功', icon: 'success' });
      }
    });
  }, 1200);
};

// 页面卸载时清除定时器
onUnmounted(() => {
  if (teamNameDebounceTimer.value) {
    clearTimeout(teamNameDebounceTimer.value);
  }
});

</script>

<style scoped>
/* 保持原有基础样式 */
.container {
  min-height: 100vh;
  background-color: #2CB8F9;
  font-family: system-ui, -apple-system, sans-serif;
  padding-bottom: 40rpx;
}
.navbar {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20rpx;
}
.back-btn {
  display: flex;
  position: relative;
  left: -150px;
  padding: 10rpx;
}
.uni-icon {
  font-size: 50rpx;
  color: #000;
  margin-right: 4rpx;
  margin-top: -6rpx;
}
.back-text {
  font-size: 32rpx;
  color: #000;
  font-weight: 500;
}
.main-content { padding: 0 40rpx; }

.header-section {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
  margin-bottom: 30rpx;
}
.bird-image {
  width: 160rpx;
  height: 160rpx;
  margin-right: 20rpx;
  position: relative;
  left: -120px;
  top: 40px;
}
.header-text {
  display: flex;
  flex-direction: column;
}
.header-text text {
  font-size: 32rpx;
  color: #000;
  line-height: 1.5;
  font-weight: 500;
}

.team-input-box {
  background-color: #FACC55;
  border-radius: 50rpx;
  border: 3rpx solid #000;
  height: 90rpx;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  margin-bottom: 30rpx;
}
.team-input {
  flex: 1;
  font-size: 30rpx;
  color: #000;
}
.char-count {
  font-size: 26rpx;
  color: #000;
  font-weight: bold;
}

/* --- 核心修复区域 START --- */

/* 1. 提升卡片层级，并允许内容溢出 */
.companion-card {
  margin-bottom: 50rpx;
  position: relative;
  z-index: 100;  /* 确保卡片在底部按钮之上 */
  overflow: visible !important; /* 强制允许溢出，解决截断问题 */
}

.card-header {
  background-color: #FF5C5C;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 30rpx;
  height: 80rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
}
.header-title {
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
}
.add-icon-btn {
  width: 44rpx;
  height: 44rpx;
  border: 3rpx solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.plus-sign {
  color: #fff;
  font-size: 34rpx;
  font-weight: bold;
  margin-top: -4rpx;
}

/* 2. 确保黄色主体也不隐藏溢出 */
.card-body {
  background-color: #FACC55;
  border-bottom-left-radius: 30rpx;
  border-bottom-right-radius: 30rpx;
  padding: 30rpx;
  min-height: 120rpx;
  overflow: visible !important; /* 关键：允许下拉框显示在黄色区域外 */
}

.input-area-wrapper {
  position: relative;
  z-index: 200; /* 确保输入框区域层级更高 */
}

/* 3. 下拉列表样式优化 */
.dropdown-list {
  position: absolute;
  top: 85rpx; /* 紧贴输入框下方 */
  left: 90rpx; /* 对齐输入框 */
  right: 0;    /* 宽度撑满右侧 */
  background-color: #fff;
  border: 2rpx solid #000;
  border-radius: 20rpx;
  box-shadow: 0 10rpx 30rpx rgba(0,0,0,0.2);
  z-index: 999; /* 最高层级 */
  overflow: hidden; /* 列表内部的圆角 */
  animation: slideDown 0.2s ease-out;
}

/* --- 核心修复区域 END --- */
.companion-card, .card-body, .input-area-wrapper {
  overflow: visible !important;
}

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
  background: rgba(255,255,255,0.4);
  padding: 12rpx 20rpx;
  border-radius: 40rpx;
  transition: all 0.2s ease;
}
.list-item:active {
  background: rgba(255,255,255,0.6);
  transform: scale(0.98);
}
.list-name {
  flex: 1;
  margin-left: 20rpx;
  font-size: 28rpx;
  color: #000;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.avatar {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  border: 1px solid #000;
  object-fit: cover;
}
.delete-btn {
  width: 40rpx;
  height: 40rpx;
  line-height: 36rpx;
  text-align: center;
  background: #FF5C5C;
  color: #fff;
  border-radius: 50%;
  font-size: 32rpx;
  transition: all 0.2s ease;
}
.delete-btn:active {
  transform: scale(1.1);
  background: #ff3333;
}

/* 伙伴为空时的提示 */
.empty-companions {
  text-align: center;
  padding: 40rpx 20rpx;
  color: #665230;
}
.empty-text {
  font-size: 28rpx;
  display: block;
  margin-bottom: 10rpx;
}
.empty-hint {
  font-size: 24rpx;
  opacity: 0.8;
}

.input-row {
  display: flex;
  align-items: center;
}
.avatar-icon {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  border: 2rpx solid #000;
  margin-right: 20rpx;
  background-color: #87CEEB;
  object-fit: cover;
}
.pill-input-wrapper {
  flex: 1;
  height: 70rpx;
  border: 2rpx solid #000;
  border-radius: 35rpx;
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  padding-right: 10rpx;
  background-color: #fff;
}
.pill-input {
  flex: 1;
  padding: 10px;
  font-size: 28rpx;
  color: #000;
}
.action-btn {
  background-color: #2CB8F9;
  color: #fff;
  font-size: 24rpx;
  padding: 8rpx 20rpx;
  border-radius: 30rpx;
  font-weight: bold;
  transition: all 0.2s ease;
}
.action-btn:active {
  background-color: #1aa7f9;
  transform: scale(0.95);
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10rpx); }
  to { opacity: 1; transform: translateY(0); }
}

.dropdown-scroll {
  max-height: 300rpx; /* 限制高度，超过可滚动 */
}
.dropdown-title {
  font-size: 22rpx;
  color: #999;
  padding: 10rpx 20rpx;
  background-color: #f5f5f5;
}
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 16rpx 20rpx;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
}
.dropdown-item:active {
  background-color: #E6F7FF;
}
.dropdown-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  margin-right: 16rpx;
  background: #eee;
  object-fit: cover;
}
.dropdown-name {
  flex: 1;
  font-size: 28rpx;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dropdown-add-icon {
  font-size: 32rpx;
  color: #2CB8F9;
  font-weight: bold;
}
.dropdown-empty {
  padding: 20rpx;
  text-align: center;
  font-size: 24rpx;
  color: #999;
  background-color: #fff;
}

/* 确定按钮 */
.confirm-btn {
  background-color: #FACC55;
  color: #000;
  font-size: 34rpx;
  font-weight: bold;
  border-radius: 50rpx;
  height: 100rpx;
  line-height: 100rpx;
  border: none;
  box-shadow: 0 6rpx 0 #E6B800;
  /* 调低层级，确保不遮挡下拉框 */
  position: relative;
  z-index: 1;
  opacity: 1;
}
.confirm-btn::after { border: none; }
.confirm-btn:disabled {
  opacity: 0.6;
  box-shadow: none;
  transform: none;
}
.btn-hover { opacity: 0.9; transform: translateY(4rpx); box-shadow: 0 2rpx 0 #E6B800; }
</style>