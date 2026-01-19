<template>
	<div class="journey-page">
		<!-- 页面头部 -->
		<!-- 页面头部 -->
		<div class="page-header">
		  <div class="back-btn" @click="$router.push('/pages/trip/trip')">返回</div>
		  <h1 class="page-title">默认旅程</h1>
		  <div class="black-square"></div>
		</div>

		<!-- 旅程类型标签栏 -->
		<div class="primary-tabs">
			<div 
				class="tab-item" 
				:class="{ active: currentPrimaryTab === 'solo' }"
				@click="currentPrimaryTab = 'solo'"
			>
				独自旅程
			</div>
		
			<div 
				class="tab-item" 
				:class="{ active: currentPrimaryTab === 'group' }"
				@click="goGroup"
			>
				同行旅程
			</div>
		</div>


		<!-- 子标签栏 -->
		<div class="secondary-tabs">
			<div class="tab-item" :class="{ active: currentSecondaryTab === 'schedule' }"
				@click="currentSecondaryTab = 'schedule'">
				行程
			</div>
			<div class="tab-item" :class="{ active: currentSecondaryTab === 'bill' }"
				@click="currentSecondaryTab = 'bill'">
				账单
			</div>
			<div class="tab-item" :class="{ active: currentSecondaryTab === 'luggage' }"
				@click="currentSecondaryTab = 'luggage'">
				行李
			</div>
		</div>

		<!-- 行程内容区 -->
		<div v-if="currentSecondaryTab === 'schedule'" class="content-panel">
			<div class="schedule-item" v-for="(item, index) in scheduleList" :key="index"
				@click="handleScheduleClick(index)">
				<img :src="item.icon" alt="item.label" class="item-icon" />
				<div class="item-info">
					<p class="item-name">{{ item.name }}</p>
					<p class="item-desc">{{ item.desc }}</p>
				</div>
			</div>
		
			 
			
			 
			
		</div>

		<!-- 账单内容区 -->
		<div v-if="currentSecondaryTab === 'bill'" class="content-panel">
	
			<div class="icon-grid">
				<div v-for="(item, index) in billCategoryList" :key="index"
					@click="handleBillCategoryClick((item))">
					<div class="luggage-item-wrapper">
						<div class="--my-icon">
							<img :src="`/static/pages/luggage/${item.name}.png`" alt="item.name" class="icon-image" />
						</div>
						<p class="--icon-text">{{ item.name }}</p>
					</div>
				</div>
			</div>
			<!-- Keyboard -->
			<div class="keyboard-wrapper">
				<div class="keyboard-header">
					<div class="payment-method-wrapper">
						<span class="payment-method-text">支付宝</span>
						<svg class="payment-method-narrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 9L12 15L6 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<span class="bill-total-number">{{ currentInput }}</span>
				</div>
				<div class="keyboard-main-container">
					<div class="keyboard-row">
						<div class="keyboard-key" @click="handleNumber('1')">1</div>
						<div class="keyboard-key" @click="handleNumber('2')">2</div>
						<div class="keyboard-key" @click="handleNumber('3')">3</div>
						<div class="keyboard-key" style="background-color: #FE4A49;" @click="openDatePicker">
							<svg class="key-icon-date" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.60416 9.89575H22.3958V20.8333C22.3958 21.4086 21.9295 21.8749 21.3542 21.8749H3.64582C3.07053 21.8749 2.60416 21.4086 2.60416 20.8333V9.89575Z" stroke="black" stroke-width="1.41667" stroke-linejoin="round"/>
								<path d="M2.60416 4.68742C2.60416 4.11212 3.07053 3.64575 3.64582 3.64575H21.3542C21.9295 3.64575 22.3958 4.11212 22.3958 4.68742V9.89575H2.60416V4.68742Z" stroke="black" stroke-width="1.41667" stroke-linejoin="round"/>
								<path d="M8.33334 2.08325V6.24992" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M16.6667 2.08325V6.24992" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M14.5833 17.7083H17.7083" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M7.29166 17.7083H10.4167" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M14.5833 13.5417H17.7083" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M7.29166 13.5417H10.4167" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<span style="font-weight: 700; font-size: 40rpx">日期</span>
						</div>
					</div>
					<div class="keyboard-row">
						<div class="keyboard-key" @click="handleNumber('4')">4</div>
						<div class="keyboard-key" @click="handleNumber('5')">5</div>
						<div class="keyboard-key" @click="handleNumber('6')">6</div>
						<div class="keyboard-key" @click="handleOperator('+')">+</div>
					</div>
					<div class="keyboard-row">
						<div class="keyboard-key" @click="handleNumber('7')">7</div>
						<div class="keyboard-key" @click="handleNumber('8')">8</div>
						<div class="keyboard-key" @click="handleNumber('9')">9</div>
						<div class="keyboard-key" @click="handleOperator('-')">-</div>
					</div>
					<div class="keyboard-row">
						<div class="keyboard-key" @click="handleDecimal"> . </div>
						<div class="keyboard-key" @click="handleNumber('0')">0</div>
						<div class="keyboard-key" style="background-color: #FE4A49;" @click="handleDelete">
							<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.6666 9.16675L3.33325 20.0001L11.6666 30.8334H36.6666V9.16675H11.6666Z" fill="black" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M17.5 15.8333L25.8333 24.1666" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M25.8333 15.8333L17.5 24.1666" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<div class="keyboard-key" style="background-color: #FE4A49;font-size: 48rpx; font-weight: bold;" @click="confirmInput">完成</div>
					</div>
				</div>
			</div>
			
		</div>

		<!-- 行李内容区 -->
		<div v-if="currentSecondaryTab === 'luggage'" class="content-panel">
			<div class="icon-grid">
				<div v-for="(item, index) in luggageCategoryList" :key="index"
					@click="handleLuggageCategoryClick(item)">
					<div class="luggage-item-wrapper">
						<div class="--my-icon">
							<img :src="`/static/pages/luggage/${item.name}.png`" alt="item.name" class="icon-image" />
						</div>
						<p class="--icon-text">{{ item.name }}</p>
					</div>
				</div>
			</div>
		</div>
		

		<!-- 温馨提示弹窗 -->
		<div v-if="showTipDialog" class="tip-dialog">
		  <div class="tip-content">
		    <h3 class="tip-title">温馨提示</h3>
		    <p class="tip-message">点击需要用品纲目进行选择，支持拍照上传物品图片。</p>
		    <button class="tip-confirm-btn" @click="showTipDialog = false">了解 进入旅程</button>
		    <div class="tip-media">
		      <img src="/static/记录.png" alt="温馨提示插图" class="tip-img" />
		    </div>
		  </div>
		</div>

		<!-- 添加旅程弹窗 -->
		<div v-if="showAddJourney" class="add-journey-dialog">
			<h3 class="dialog-title">新建旅程</h3>
			<input type="text" v-model="newJourneyName" placeholder="请输入旅程名称" class="journey-input">
			<div class="dialog-btn-group">
				<button class="dialog-cancel" @click="showAddJourney = false">取消</button>
				<button class="dialog-confirm" @click="addNewJourney">确认添加</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 标签状态管理
				currentPrimaryTab: 'solo',
				currentSecondaryTab: 'schedule',
				total: 0.00,
				
				
				
				// 键盘逻辑变量
				currentInput: '0.00',
				isDecimalAdded: true,  // 是否已添加小数点
				pendingOperator: null,  // 待执行的运算符
				storedValue: null,  // 存储运算前的值
				
				// 弹窗状态
				showTipDialog: true,
				showAddJourney: false,
				newJourneyName: '',
				journeyList: ['默认旅程'],

				// 行程数据
				scheduleList: [{
						icon: '/static/1.png',
						name: '请点击选择出行时间',
						desc: '时间'
					},
					{
						icon: '/static/2.png',
						name: '请点击选择出行地点',
						desc: '地点'
					},
					{
						icon: '/static/go.png',
						name: '请点击选择路线地点',
						desc: '出行'
					}
				],

				// 账单分类数据
				billCategoryList: [{
						icon: '/static/icon-high-speed.png',
						name: '高铁'
					},
					{
						icon: '/static/icon-plane.png',
						name: '飞机'
					},
					{
						icon: '/static/icon-drive.png',
						name: '自驾'
					},
					{
						icon: '/static/icon-supplies.png',
						name: '用品'
					},
					{
						icon: '/static/icon-homestay.png',
						name: '民宿'
					},
					{
						icon: '/static/icon-hotel.png',
						name: '酒店'
					},
					{
						icon: '/static/icon-subway.png',
						name: '地铁'
					},
					{
						icon: '/static/icon-taxi.png',
						name: '出租'
					},
					{
						icon: '/static/icon-food.png',
						name: '美食'
					},
					{
						icon: '/static/icon-ticket.png',
						name: '门票'
					},
					{
						icon: '/static/icon-estimate.png',
						name: '预计'
					},
					{
						icon: '/static/icon-custom.png',
						name: '自定义'
					}
				],

				// 行李分类数据
				luggageCategoryList: [{
						icon: '/static/icon-clothes.png',
						name: '上衣'
					},
					{
						icon: '/static/icon-pants.png',
						name: '裤子'
					},
					{
						icon: '/static/icon-shoes.png',
						name: '鞋子'
					},
					{
						icon: '/static/icon-skirt.png',
						name: '裙子'
					},
					{
						icon: '/static/icon-backpack.png',
						name: '背包'
					},
					{
						icon: '/static/icon-charge.png',
						name: '充电'
					},
					{
						icon: '/static/icon-electronic.png',
						name: '电子'
					},
					{
						icon: '/static/icon-makeup.png',
						name: '美妆'
					},
					{
						icon: '/static/icon-document.png',
						name: '资料'
					},
					{
						icon: '/static/icon-card.png',
						name: '卡证'
					},
					{
						icon: '/static/icon-cup.png',
						name: '杯具'
					},
					{
						icon: '/static/icon-accessory.png',
						name: '饰品'
					},
					{
						icon: '/static/icon-camera.png',
						name: '拍摄'
					},
					{
						icon: '/static/icon-specialty.png',
						name: '特产'
					},
					{
						icon: '/static/icon-supplies.png',
						name: '用品'
					},
					{
						icon: '/static/icon-custom.png',
						name: '自定义'
					}
				]
			};
		},
		mounted() {
			// 温馨提示3秒后自动隐藏
			setTimeout(() => {
				this.showTipDialog = false;
			}, 3000);
		},
		
		methods: {
			// 原有方法保持不变
			addNewJourney() {
				if (!this.newJourneyName.trim()) return;
				this.journeyList.push(this.newJourneyName);
				this.showAddJourney = false;
				this.newJourneyName = '';
			},
			goGroup() {
					uni.navigateTo({
						url: '/pages/select-pattern/select-pattern'
					})
				}
			},
			goBack() {
			  uni.reLaunch({
			    url: '/pages/Detail/Detail'
			  });
			},
			handleScheduleClick(index) {
				const currentItem = this.scheduleList[index];
				if (currentItem.desc === '时间') {
					this.handleTimeSelection(index);
				} else if (currentItem.desc === '地点') {
					this.handleLocationSelection(index);
				} else if (currentItem.desc === '出行') {
					this.handleRouteSelection(index);
				}
			},
			handleTimeSelection(index) {
				uni.datePicker({
					success: (res) => {
						this.scheduleList[index].name = res.value;
					}
				});
			},
			handleLocationSelection(index) {
				uni.chooseLocation({
					success: (res) => {
						this.scheduleList[index].name = res.name;
					}
				});
			},
			handleRouteSelection(index) {
				uni.showToast({
					title: '路线选择功能待实现',
					icon: 'none'
				});
			},
			handleBillCategoryClick(item) {
				uni.showToast({
					title: `选择了${item.name}`,
					icon: 'none'
				});
			},
			handleLuggageCategoryClick(item) {
				uni.showToast({
					title: `选择了${item.name}`,
					icon: 'none'
				});
			},

			// 键盘逻辑方法（仅修改这部分）
			/**
			 * 处理数字输入
			 * @param {String} num - 数字字符
			 */
			handleNumber(num) {
				// 初始状态处理
				if (this.currentInput === '0.00') {
					this.currentInput = num + '.00';
					return;
				}

				// 分割整数和小数部分
				const [integerPart, decimalPart] = this.currentInput.split('.');
				
				if (this.isDecimalAdded) {
					// 小数部分处理（限制2位）
					if (decimalPart.length < 2) {
						this.currentInput = `${integerPart}.${decimalPart}${num}`;
					}
				} else {
					// 整数部分处理（避免前置零）
					if (integerPart === '0') {
						this.currentInput = num;
					} else {
						this.currentInput += num;
					}
				}

				// 同步更新总金额
				this.total = parseFloat(this.currentInput);
			},

			/**
			 * 处理小数点输入
			 */
			handleDecimal() {
				if (!this.isDecimalAdded) {
					this.currentInput += '.';
					this.isDecimalAdded = true;
				}
			},

			/**
			 * 处理运算符输入
			 * @param {String} op - 运算符 '+' 或 '-'
			 */
			handleOperator(op) {
				// 存储当前值并记录运算符
				this.storedValue = parseFloat(this.currentInput);
				this.pendingOperator = op;
				// 重置输入状态
				this.currentInput = '0.00';
				this.isDecimalAdded = true;
			},

			/**
			 * 处理删除（退格）
			 */
			handleDelete() {
				if (this.currentInput.length === 1) {
					// 重置为初始状态
					this.currentInput = '0.00';
					this.isDecimalAdded = true;
				} else {
					// 移除最后一位
					let newInput = this.currentInput.slice(0, -1);
					
					// 处理小数点删除
					if (newInput.endsWith('.')) {
						newInput = newInput.slice(0, -1);
						this.isDecimalAdded = false;
					}
					
					// 处理删除后为空的情况
					if (newInput === '') {
						newInput = '0';
						this.isDecimalAdded = false;
					}
					
					this.currentInput = newInput;
					this.isDecimalAdded = this.currentInput.includes('.');
				}

				// 同步更新总金额
				this.total = parseFloat(this.currentInput) || 0;
			},

			/**
			 * 确认输入并计算最终结果
			 */
			confirmInput() {
				// 处理未完成的运算
				if (this.pendingOperator && this.storedValue !== null) {
					const currentValue = parseFloat(this.currentInput);
					let result;

					switch (this.pendingOperator) {
						case '+':
							result = this.storedValue + currentValue;
							break;
						case '-':
							result = this.storedValue - currentValue;
							break;
						default:
							result = currentValue;
					}

					// 防止负数
					if (result < 0) {
						uni.showToast({ title: '金额不能为负数', icon: 'none' });
						return;
					}

					// 格式化结果为两位小数
					this.currentInput = result.toFixed(2);
					this.storedValue = null;
					this.pendingOperator = null;
				}

				// 确保最终格式正确
				this.total = parseFloat(this.currentInput);
				this.isDecimalAdded = this.currentInput.includes('.');
				
				// 提示用户
				uni.showToast({
					title: `已确认金额：${this.currentInput}元`,
					icon: 'none'
				});
			},

			/**
			 * 打开日期选择器
			 */
			openDatePicker() {
				uni.datePicker({
					mode: 'date',
					success: (res) => {
						uni.showToast({
							title: `选择日期：${res.value}`,
							icon: 'none'
						});
					}
				});
			}
		
	};
</script>

<style scoped lang="scss">

	.--my-icon {
		background-color: $icon-bgcolor;
		width: 114rpx;
		height: 114rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 4rpx solid;
		margin: 0 auto;
	}

	.--icon-text {
		font-size: 38rpx;
		letter-spacing: 0;
		font-weight: bold;
		text-align: center;
	}
	
	.payment-method-text {
		position: relative;
		top: 10rpx;
		left: 50rpx;
		font-size: 38rpx;
		font-weight: bold;
	}
	
	.payment-method-narrow {
		position: relative;
		left: 60rpx;
		top: 20rpx;
		width: 46rpx;
		height: 46rpx;
	}
	
	.bill-total-number {
		font-size: 64rpx;
		margin-top: 20rpx;
		margin-right: 50rpx;
		font-weight: bold;
	}
	
	.keyboard-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	.keyboard-header {
		height: 114rpx;
		display: flex;
		flex-shrink: 0;
		
		background: #F6CD4B;
		border-bottom: 8rpx solid rgba(0, 0, 0, 0.25);
		border-radius: 48rpx 48rpx 0px 0px;
		margin: 0;
		justify-content: space-between;
		
	}
	
	.keyboard-main-container {
		width: 100vw;
		height: 510rpx;
		background-color: #F6CD4B;
		padding-top: 15rpx;
	}
	
	.keyboard-row {
		display: flex;
		justify-content: space-between;
		margin: 0px 15rpx 15rpx 15rpx;
	}

	.keyboard-key {
		width: 171rpx;
		height: 95rpx;
		border-radius: 48rpx;
		background-color: #25B0F0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 95rpx;
	}

	
	.journey-page {
		min-height: 100vh;
		background-color: $bgcolor;
		padding: 29px;
		color: #000;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-sizing: border-box;
	}
	/* 一级标签栏样式 */
	.primary-tabs {
		display: flex;
		justify-content: center;
		gap: 38rpx;
		margin-bottom: 27rpx;
		padding-bottom: 10rpx;
	}

	/* 二级标签栏样式 */
	.secondary-tabs {
		display: flex;
		gap: 19rpx;
		margin-bottom: 38rpx;
		justify-content: center;
	}

	/* 通用标签样式 */
	.tab-item {
		padding: 11rpx 23rpx;
		font-size: 36rpx;
		cursor: pointer;
		color: #ffffff;
		position: relative;
		transition: all 0.3s;
	}

	.primary-ta.tab-item {
	}

	.primary-tabs .tab-item.active {
		color: #ff0000;
		  /* 激活态下划线 */
		  &::after {
		    content: '';
		    position: absolute;
		    bottom: -5px;
		    left: 0;
		    width: 100%;
		    height: 2px;
		    background-color: #ff0000;
			}
	}
	.secondary-tabs{
		  display: flex;
		  justify-content: flex-start; // 让子元素靠左排列
		  gap: 19rpx;
		  margin-bottom: 38rpx;
		  // 若原有其他样式，保持不变
	}

	.secondary-tabs .tab-item {
		padding: 4px 8px;
		background-color:transparent;
		color: black;
		font-size: 12px;
		border-radius: 20px;
		border: 2px solid #000;
		width: 60px;
		text-align: center;
		font-weight: 900;
	}

	.secondary-tabs .tab-item.active {
		background-color: #F6CD4B;
		color: #333;
		transform: scale(1.05);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	/* 内容面板样式 */
	.content-panel {
		background-color: $bgcolor;
		min-height: 300px;
	}

	/* 行程项样式 */
	.schedule-item {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		margin-bottom: 15px;
		cursor: pointer;
	}
	
	.item-icon img {
	  width: 80%;
	  height: 80%;
	  object-fit: cover; // 确保图片在圆形内等比显示
	}

	.item-icon {
		width: 60px; // 调整图片宽度（根据需求设置，比如改为30px、40px等）
		  height: 60px; // 高度与宽度保持一致，确保圆形
		  border-radius: 50%; // 保持圆形
		  background-color: #ff0000; // 可根据需要设置背景色
		  border: 2px solid #000; // 添加黑色外边框
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  overflow: hidden;
	}

	.item-icon::after {
		content: '📌';
		font-size: 24px;
	}

	.item-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.item-name {
		margin: 0;
		line-height: 1.5;
		font-size: 16px;
	}

	.item-desc {
		margin: 0;
		line-height: 1.5;
		font-size: 12px;
		color: #333;
	}

	/* 图标网格样式 */
	.icon-grid {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 10px;
	}

	.grid-item {
		width: 60px;
		height: 60px;
		text-align: center;
		cursor: pointer;
		align-content: space-between;
		padding: 0px;
		margin-top: 20px;
	}
	
	.luggage-item-wrapper {
		display: flex;
		width: 80px;
		height: 90px;
		flex-direction: column;
	}

	.grid-icon {
		width: 60px;
		height: 60px;
		border: 2px solid black;
		border-radius: 50%;
		background-color: #ff0000;
		margin: 0 auto 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}


	/* 支付区域样式 */
	.payment-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #F6CD4B;
		padding: 10px;
		border-radius: 8px;
		margin-bottom: 15px;
	}

	.payment-method {
		margin: 0;
		font-size: 16px;
	}

	.payment-amount {
		margin: 0;
		font-size: 16px;
		font-weight: bold;
	}

	/* 数字键盘样式 */
	.numeric-keyboard {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.key-row {
		display: flex;
		gap: 5px;
	}

	.key-btn {
		flex: 1;
		padding: 15px 10px;
		border-radius: 8px;
		border: 1px solid #000;
		font-size: 18px;
		background-color: #fff;
		cursor: pointer;
	}

	.confirm-btn {
		background-color: #ff0000;
		color: #fff;
	}

	/* 添加旅程弹窗 */
	.add-journey-dialog {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		padding: 20px;
		border-radius: 10px;
		width: 80%;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}

	.dialog-title {
		margin-top: 0;
		text-align: center;
	}

	.journey-input {
		width: 100%;
		padding: 10px;
		margin: 15px 0;
		border: 1px solid #eee;
		border-radius: 5px;
		box-sizing: border-box;
	}

	.dialog-btn-group {
		display: flex;
		gap: 10px;
		margin-top: 20px;
	}

	.dialog-cancel,
	.dialog-confirm {
		flex: 1;
		padding: 8px 0;
		border-radius: 5px;
		border: 1px solid #ddd;
		cursor: pointer;
	}

	.dialog-confirm {
		background-color: #00a8ff;
		color: white;
		border-color: #00a8ff;
	}

	/* 动画效果 */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* 响应式适配 */
	@media (max-width: 375px) {
		.grid-item {
			width: 50px;
			height: 50px;
		}

		.grid-icon {
			width: 50px;
			height: 50px;
		}

		.key-btn {
			padding: 12px 5px;
			font-size: 16px;
		}
	}
	/* 页面头部样式 */
	.page-header {
	  display: flex;
	  justify-content: space-between; // 让子元素分别居左、居右
	  align-items: center;
	  margin-bottom: 38rpx;
	  background-color: #25B0F0; 
	  padding: 20rpx 30rpx; 
	  color: #fff; 
	}
	
	.back-btn {
	  font-size: 32rpx;
	  cursor: pointer;
	  position: relative;
	  left: -20px;
	}
	
	.page-title {
	  margin: 0;
	  font-size: 20rpx;
	  position: relative;
	  left: 70px;
	}
	
	.black-square {
	  width: 50rpx;
	  height: 50rpx;
	  background-color: #000;
	}
	.custom-keyboard {
	  background-color: #F6CD4B; 
	  padding: 10rpx;
	  border-radius: 0;
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  width: 100vw;
	  height: auto;
	  box-sizing: border-box; /* 确保padding不影响整体宽度 */
	}
	
	.keyboard-row {
	  display: flex;
	  justify-content: space-between;
	  margin-bottom: 10rpx;
	  gap: 10rpx; /* 按键间增加间距，避免拥挤 */
	  padding: 0 10rpx; /* 左右留边，避免贴边 */
	}
	
	/* 第一行按键（"The"、the、to）单独加宽 */
	.keyboard-row:first-child .key {
	  width: calc(100% / 3 - 10rpx); /* 平均分配宽度，占满一行 */
	  height: 90rpx; /* 可适当加高，增强视觉权重 */
	  font-size: 32rpx; /* 字体稍大，匹配宽度 */
	}
	
	/* 第二、三行按键（字母q-p、a-l）保持原比例 */
	.keyboard-row:nth-child(2) .key,
	.keyboard-row:nth-child(3) .key {
	  width: calc(100% / 10 - 10rpx);
	  height: 80rpx;
	}
	
	/* 第四行按键（↑、z-m、×） */
	.keyboard-row:nth-child(4) .key {
	  width: calc(100% / 9 - 10rpx);
	  height: 80rpx;
	}
	
	/* 第五行按键（ABC、空格、return） */
	.keyboard-row:nth-child(5) .key {
	  width: calc(100% / 3 - 10rpx);
	  height: 80rpx;
	}
	
	/* 按键基础样式 */
	.key {
	  border-radius: 8rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  color: #000000;
	  font-weight: 900;
	}
	
	.blue-key {
	  background-color: #25B0F0;
	}
	
	.orange-key {
	  background-color: #f39c12;
	}
	
	.red-key {
	  background-color: #ff0000;
	}
	
	.space-key {
	  background-color: #fff;
	  color: #000;
	}
	.icon-row {
	  display: flex;
	  justify-content: space-between;
	  padding: 10rpx 30rpx;
	  background-color: #F6CD4B;
	}
	
	.icon-item {
	  width: 80rpx;
	  height: 80rpx;
	  border-radius: 50%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-size: 40rpx;
	}
	
	.emoji-icon {
	  background-color: #F6CD4B;
	  color: #000;
	}
	
	.mic-icon {
	  background-color: #F6CD4B;
	  color: #000;
	}
.tip-dialog {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e63946;
  color: #fff;
  padding: 20rpx;
  box-sizing: border-box;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 30rpx; // 增加弧形圆角
}

.tip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; // 用于定位图片
}

.tip-media {
  position: absolute;
  top: -160rpx; // 向上突出
  right: 30rpx; // 定位到右上角
  z-index: 1; // 确保图片在内容上层
}

.tip-img {
  width: 200rpx;
  height: auto;
  border-radius: 10rpx; // 图片增加轻微弧形
}

.tip-title {
  font-size: 32rpx;
  margin: 0 0 15rpx;
  position: relative;
  z-index: 2; // 确保文字在图片上层
}

.tip-message {
  font-size: 28rpx;
  margin: 0 0 20rpx;
  text-align: center;
  padding: 0 20rpx;
  position: relative;
  z-index: 2;
}

.tip-confirm-btn {
  background-color: #ffd700;
  color: #333;
  border: 1px solid #000;
  padding: 8rpx 30rpx;
  border-radius: 40rpx;
  font-size: 28rpx;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
</style>