<template>
  <div class="page-container">
    <div class="header-section">
      <div class="nav-bar">
        <div class="back-btn" @click="goback">
          <span class="arrow-icon">‹</span> 返回
        </div>
      </div>

      <div class="city-header">
        <h1 class="city-name">西安</h1>
        <div class="sub-info">
          <span class="date-text">● 2025.12.22—2025.12.24 待出发</span>
          <span class="duration-tag">3天2夜</span>
        </div>
      </div>

      <div class="main-tabs">
        <div 
          class="tab-item" 
          :class="{ active: currentTab === 'trip' }"
          @click="switchTab('trip')"
        >
          行程
        </div>
        <div 
          class="tab-item" 
          :class="{ active: currentTab === 'luggage' }"
          @click="switchTab('luggage')"
        >
          行李
        </div>
        <div 
          class="tab-item" 
          :class="{ active: currentTab === 'budget' }"
          @click="switchTab('budget')"
        >
          经费
        </div>
      </div>
    </div>

    <div class="content-container">
      
      <div v-show="currentTab === 'trip'" class="trip-content">
        <div class="days-toggle">
          <div 
            class="day-capsule" 
            v-for="day in [1, 2, 3]" 
            :key="day"
            :class="{ active: currentDay === day }"
            @click="switchDay(day)"
          >
            第{{day}}天
          </div>
        </div>

        <div class="day-detail">
          <h2 class="day-title">第{{ numToChinese(currentDay) }}天</h2>
          
          <div class="day-banner"></div>

          <div class="period-tabs">
            <span 
              class="period-item" 
              :class="{ active: currentPeriod === 'morning' }"
              @click="switchPeriod('morning')"
            >上午</span>
            <span 
              class="period-item" 
              :class="{ active: currentPeriod === 'afternoon' }"
              @click="switchPeriod('afternoon')"
            >下午</span>
            <span 
              class="period-item" 
              :class="{ active: currentPeriod === 'evening' }"
              @click="switchPeriod('evening')"
            >晚上</span>
          </div>

          <div class="timeline-box">
            <template v-if="currentEvents.length > 0">
              <div v-for="(event, index) in currentEvents" :key="index" class="event-row">
                <div class="time-label" :class="{ 'right-align': index % 2 !== 0 }">
                  {{ event.time }}
                </div>
                <div 
                  class="event-card" 
                  :class="[ index % 2 === 0 ? 'yellow-card left-arrow' : 'blue-card right-arrow' ]"
                >
                  <h3 class="card-head">{{ event.title }}</h3>
                  <p v-for="(detail, i) in event.details" :key="i">{{ detail }}</p>
                </div>
              </div>
            </template>
            <div v-else class="empty-state">
              该时段暂无行程安排
            </div>
          </div>
        </div>
      </div>

     <div v-show="currentTab === 'luggage'" class="luggage-content">
             <div class="status-bar">
               <span>已整理 0/1 件行李</span>
               <span class="sort-btn">排序</span>
             </div>
             
             <div class="luggage-group">
               <div class="group-header">
                 <span>证件 (0)</span>
                 <button class="add-btn" @click="gotoluggage">+</button>
               </div>
               <div class="group-body">
                 </div>
             </div>
           </div>

      <div v-show="currentTab === 'budget'" class="budget-content">
        
        <div class="budget-overview-card">
          <div class="overview-top">
            <span class="label-text">预计旅游经费</span>
            <div class="add-budget-btn">
              添加旅游预算 <span class="plus-icon">⊕</span>
            </div>
          </div>
          
          <div class="main-amount">2,000.00</div>
          
          <div class="split-amount-row">
            <div class="split-item">
              <span class="sub-label">已预计旅游经费</span>
              <span class="sub-value">1,000.00</span>
            </div>
            <div class="split-item">
              <span class="sub-label">可预计旅游经费</span>
              <span class="sub-value">1,000.00</span>
            </div>
          </div>
        </div>

        <div class="info-pill-bar">
          地点：西安 &nbsp;&nbsp; 出发日期：2025/11/23
        </div>

        <div class="large-category-list">
           <div class="large-cat-card blue-bg">
             <h3>出行</h3>
             </div>
           
           <div class="large-cat-card yellow-bg">
             <h3>住宿</h3>
           </div>
           
           <div class="large-cat-card blue-bg">
             <h3>门票</h3>
           </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "JourneyDetailPage",
  data() {
    return {
      currentTab: "budget", // 默认展示经费页方便查看效果
      currentDay: 1,
      currentPeriod: "morning", // morning, afternoon, evening
      
      // 模拟行程数据：结构为 Day -> Period -> List of Events
      tripData: {
        1: {
          morning: [
            { 
              time: "09 : 00", 
              title: "明城墙 (D1 上午)", 
              details: ["出发时间：09:00", "出行方式：地铁2号线"] 
            },
            { 
              time: "11 : 00", 
              title: "回民街", 
              details: ["用餐时间：11:30-13:00", "推荐美食：肉夹馍"] 
            }
          ],
          afternoon: [
             { 
              time: "14 : 00", 
              title: "碑林博物馆 (D1 下午)", 
              details: ["游览时间：2小时", "门票：需预约"] 
            }
          ],
          evening: [
            { 
              time: "19 : 00", 
              title: "大唐不夜城 (D1 晚上)", 
              details: ["看点：不倒翁小姐姐", "注意：人流量大"] 
            }
          ]
        },
        2: {
          morning: [
            { 
              time: "08 : 30", 
              title: "兵马俑 (D2 上午)", 
              details: ["出发：旅游专线5号", "讲解：建议请导游"] 
            }
          ],
          afternoon: [],
          evening: []
        },
        3: {
          morning: [],
          afternoon: [
             { 
              time: "15 : 00", 
              title: "返程 (D3 下午)", 
              details: ["高铁 G876", "记得带特产"] 
            }
          ],
          evening: []
        }
      }
    };
  },
  computed: {
    // 根据当前天数和时段，动态获取事件列表
    currentEvents() {
      const dayData = this.tripData[this.currentDay];
      if (dayData && dayData[this.currentPeriod]) {
        return dayData[this.currentPeriod];
      }
      return [];
    }
  },
  methods: {
    goback() {
      if (typeof uni !== 'undefined') uni.navigateBack();
    },
    gotoluggage() {
    
           this.$router.push("/pages/luggage/luggage");
    
        },
    switchTab(tab) {
      this.currentTab = tab;
    },
    switchDay(day) {
      this.currentDay = day;
      // 切换天数时重置为上午，或者保持当前时段都可以
      this.currentPeriod = "morning"; 
    },
    switchPeriod(period) {
      this.currentPeriod = period;
    },
    numToChinese(num) {
      const map = {1: '一', 2: '二', 3: '三'};
      return map[num] || num;
    }
  }
};
</script>

<style scoped>
/* --- 全局基础 --- */
.page-container {
  min-height: 100vh;
  background-color: #2CB8F9; /* 主题蓝 */
  font-family: -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
  display: flex;
  flex-direction: column;
}

/* --- 1. 头部区域 --- */
.header-section {
  padding: 20px 20px 0 20px;
  color: #fff;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  font-size: 16px;
}
.arrow-icon { font-size: 24px; margin-right: 4px; margin-top: -4px; }
.action-icons .icon { margin-left: 15px; font-size: 20px; }

.city-header { margin-top: 10px; }
.city-name { font-size: 32px; font-weight: 900; color: #000; margin: 0; line-height: 1.2; }
.sub-info { margin-top: 8px; display: flex; align-items: center; font-size: 13px; }
.date-text { color: rgba(255, 255, 255, 0.9); margin-right: 10px; }
.duration-tag {
  background-color: #FCD653; 
  color: #000; font-weight: bold; padding: 2px 8px; 
  border-radius: 12px; border: 1.5px solid #000; font-size: 12px;
}

/* 顶部 Tab */
.main-tabs { display: flex; margin-top: 20px; padding-bottom: 15px; gap: 25px; }
.tab-item {
  font-size: 18px; font-weight: bold; color: rgba(255, 255, 255, 0.7);
  cursor: pointer; transition: all 0.3s; position: relative;
}
.tab-item.active { color: #fff; font-size: 20px; }
/* 简单的选中指示器（白色背景卡片本身会切角，这里简单处理文字） */

/* --- 2. 内容区域 --- */
.content-container {
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px; /* 这里做了圆角，模拟 tab 切换效果 */
  padding: 20px;
  overflow-y: auto;
}

/* ================== 行程页样式 ================== */
.days-toggle { display: flex; gap: 10px; margin-bottom: 20px; }
.day-capsule {
  border: 1.5px solid #000; padding: 6px 16px; border-radius: 20px;
  font-size: 14px; font-weight: bold; color: #000; cursor: pointer; background: #fff;
}
.day-capsule.active { background-color: #FF5C5C; color: #fff; border-color: #000; }

.day-title { font-size: 24px; font-weight: 900; margin: 0 0 15px 0; }
.day-banner { height: 80px; background-color: #2CB8F9; border-radius: 16px; border: 2px solid #000; margin-bottom: 20px; }

.period-tabs { display: flex; gap: 20px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
.period-item { font-size: 16px; font-weight: bold; color: #666; padding-bottom: 4px; cursor: pointer; }
.period-item.active { color: #FF5C5C; border-bottom: 3px solid #FF5C5C; }

.timeline-box { display: flex; flex-direction: column; min-height: 200px; }
.empty-state { color: #999; text-align: center; padding-top: 40px; }

.event-row { display: flex; flex-direction: column; width: 100%; margin-bottom: 20px; }
.time-label { font-size: 20px; font-weight: 900; margin-bottom: 8px; }
.time-label.right-align { text-align: right; }

.event-card {
  position: relative; padding: 15px; border-radius: 12px; width: 85%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
.card-head { margin: 0 0 5px 0; font-size: 18px; font-weight: bold; }
.event-card p { margin: 2px 0; font-size: 14px; opacity: 0.9; }

/* 气泡样式 */
.yellow-card { background-color: #FCD653; align-self: flex-start; margin-left: 10px; }
.yellow-card::before {
  content: ""; position: absolute; left: -8px; top: 15px; width: 0; height: 0;
  border-top: 8px solid transparent; border-right: 10px solid #FCD653; border-bottom: 8px solid transparent;
}
.blue-card { background-color: #2CB8F9; color: #fff; align-self: flex-end; margin-right: 10px; }
.blue-card::after {
  content: ""; position: absolute; right: -8px; top: 15px; width: 0; height: 0;
  border-top: 8px solid transparent; border-left: 10px solid #2CB8F9; border-bottom: 8px solid transparent;
}

/* ================== 经费页样式 (Ref: image_a959a5) ================== */
.budget-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 经费总览卡片 (蓝色背景) */
.budget-overview-card {
  background-color: #2CB8F9; /* 主题蓝 */
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  position: relative;
  box-shadow: 0 4px 10px rgba(44, 184, 249, 0.2);
}

.overview-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.label-text {
  font-size: 14px;
  opacity: 0.9;
}

.luggage-group {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
}
.group-header {
  background: #FF5C5C;
  color: #fff;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.group-body {
  background: #EAF8FE;
  height: 50px;
}
.add-btn {
  background: #fff;
  color: #FF5C5C;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 20px;
  line-height: 22px;
  padding: 0;
  cursor: pointer;
}
.plus-icon { font-size: 14px; }

.main-amount {
  font-size: 40px;
  font-weight: 900;
  margin: 10px 0 20px 0;
  color: #000; /* 根据图示，金额是黑色的 */
}

.split-amount-row {
  display: flex;
  justify-content: space-between;
}

.split-item {
  display: flex;
  flex-direction: column;
}
.sub-label { font-size: 12px; opacity: 0.8; margin-bottom: 4px; color: #fff; }
.sub-value { font-size: 18px; font-weight: bold; color: #000; }

/* 蓝色信息条 */
.info-pill-bar {
  background-color: #2CB8F9;
  color: #000; /* 图示文字偏黑 */
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 30px;
  text-align: center;
  font-size: 14px;
}

/* 大块分类列表 */
.large-category-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.large-cat-card {
  height: 100px; /* 大高度 */
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
}

.large-cat-card h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 900;
}

.blue-bg {
  background-color: #2CB8F9;
  color: #fff;
}

.yellow-bg {
  background-color: #FCD653;
  color: #000;
}

/* ================== 行李页样式 (简略) ================== */
.status-bar { display: flex; justify-content: space-between; color: #666; font-size: 14px; margin-bottom: 10px; }
.luggage-group { border: 1px solid #eee; border-radius: 12px; overflow: hidden; height: 100px; }
.group-header { background: #FF5C5C; color: #fff; padding: 10px 15px; display: flex; justify-content: space-between; }
.add-btn { background: #fff; color: #FF5C5C; border-radius: 50%; width: 24px; height: 24px; border:none; font-weight:bold;}

</style>