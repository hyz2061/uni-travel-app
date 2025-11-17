<template>
	<div class="journey-page">
		<!-- 页面头部 -->
		<div class="page-header">
			<h1 class="page-title">默认旅程</h1>
			<button class="add-btn" @click="showAddJourney = true">+ 添加旅程</button>
		</div>

		<!-- 旅程类型标签栏 -->
		<div class="primary-tabs">
			<div class="tab-item" :class="{ active: currentPrimaryTab === 'solo' }" @click="currentPrimaryTab = 'solo'">
				独自旅程
			</div>
			<div class="tab-item" :class="{ active: currentPrimaryTab === 'group' }"
				@click="currentPrimaryTab = 'group'">
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
				<div class="grid-item" v-for="(item, index) in billCategoryList" :key="index"
					@click="handleBillCategoryClick(item)">
					<img :src="item.icon" alt="item.name" class="grid-icon" />
					<p class="grid-name">{{ item.name }}</p>
				</div>
			</div>
			<div class="payment-section">
				<p class="payment-method">支付宝</p>
				<p class="payment-amount">0.00</p>
			</div>
			<div class="numeric-keyboard">
				<div class="key-row">
					<button class="key-btn">1</button>
					<button class="key-btn">2</button>
					<button class="key-btn">3</button>
					<button class="key-btn">日期</button>
				</div>
				<div class="key-row">
					<button class="key-btn">4</button>
					<button class="key-btn">5</button>
					<button class="key-btn">6</button>
					<button class="key-btn">+</button>
				</div>
				<div class="key-row">
					<button class="key-btn">7</button>
					<button class="key-btn">8</button>
					<button class="key-btn">9</button>
					<button class="key-btn">-</button>
				</div>
				<div class="key-row">
					<button class="key-btn">.</button>
					<button class="key-btn">0</button>
					<button class="key-btn">删除</button>
					<button class="key-btn confirm-btn">完成</button>
				</div>
			</div>
		</div>

		<!-- 行李内容区 -->
		<div v-if="currentSecondaryTab === 'luggage'" class="content-panel">
			<div class="icon-grid">
				<div class="grid-item" v-for="(item, index) in luggageCategoryList" :key="index"
					@click="handleLuggageCategoryClick(item)">
					<div class="luggage-item-wrapper">
						<div class="--my-icon">
							<img :src="`/static/pages/luggage/${item.name}.png`" alt="item.name" class="icon-image" />
						</div>
						<p class="grid-name" style="font-size: 20px; letter-spacing: 0; font-weight: bold;">{{ item.name }}</p>
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
				currentPrimaryTab: 'solo', // 'solo' 独自旅程, 'group' 同行旅程
				currentSecondaryTab: 'schedule', // 'schedule' 行程, 'bill' 账单, 'luggage' 行李

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
			// 添加新旅程
			addNewJourney() {
				if (!this.newJourneyName.trim()) return;
				this.journeyList.push(this.newJourneyName);
				this.showAddJourney = false;
				this.newJourneyName = '';
			},

			// 行程项点击处理
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

			// 时间选择处理
			handleTimeSelection(index) {
				uni.datePicker({
					success: (res) => {
						this.scheduleList[index].name = res.value;
					}
				});
			},

			// 地点选择处理
			handleLocationSelection(index) {
				uni.chooseLocation({
					success: (res) => {
						this.scheduleList[index].name = res.name;
					}
				});
			},

			// 路线选择处理
			handleRouteSelection(index) {
				// 路线选择逻辑
				uni.showToast({
					title: '路线选择功能待实现',
					icon: 'none'
				});
			},

			// 账单分类点击处理
			handleBillCategoryClick(item) {
				uni.showToast({
					title: `选择了${item.name}`,
					icon: 'none'
				});
			},

			// 行李分类点击处理
			handleLuggageCategoryClick(item) {
				uni.showToast({
					title: `选择了${item.name}`,
					icon: 'none'
				});
			}
		}
	};
</script>

<style scoped lang="scss">

	.--my-icon {
		background-color: #FE4A49;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid;
	}



	

	
	.journey-page {
		min-height: 100vh;
		background-color: #00a8ff;
		padding: 15px;
		color: #000;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-sizing: border-box;
	}

	/* 页面头部样式 */
	.page-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
		color: #fff;
	}

	.page-title {
		margin: 0;
		font-size: 18px;
	}

	.add-btn {
		background-color: transparent;
		border: none;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
		padding: 5px 10px;
	}

	/* 一级标签栏样式 */
	.primary-tabs {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-bottom: 15px;
		padding-bottom: 5px;
	}

	/* 二级标签栏样式 */
	.secondary-tabs {
		display: flex;
		gap: 10px;
		margin-bottom: 15px;
		justify-content: center;
	}

	/* 通用标签样式 */
	.tab-item {
		padding: 6px 12px;
		font-size: 16px;
		cursor: pointer;
		color: #333;
		position: relative;
		transition: all 0.3s;
	}

	.primary-tabs .tab-item {
		padding: 8px 20px;
		border-radius: 15px;
		background: rgba(255, 255, 255, 0.8);
	}

	.primary-tabs .tab-item.active {
		background-color: #ff0000;
		color: #fff;
	}

	.secondary-tabs .tab-item {
		padding: 4px 8px;
		background-color: #fff;
		color: #00a8ff;
		font-size: 12px;
		border-radius: 20px;
		border: 1px solid #000;
		width: 60px;
		text-align: center;
	}

	.secondary-tabs .tab-item.active {
		background-color: #ffd700;
		color: #333;
		transform: scale(1.05);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	/* 内容面板样式 */
	.content-panel {
		background-color: #00a8ff;
		padding: 15px;
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
	
	.icon-image {
		width: 42px;
		height: 42px;
	}

	.item-icon {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: #ff0000;
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
		gap: 30px;
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
		background-color: #ffd700;
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

	/* 温馨提示弹窗 */
	.tip-dialog {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #e63946;
		color: #fff;
		padding: 15px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		animation: fadeIn 0.3s ease;
	}

	.tip-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tip-title {
		font-size: 16px;
		margin-bottom: 10px;
		margin-top: 0;
	}

	.tip-message {
		font-size: 14px;
		margin-bottom: 15px;
		text-align: center;
		margin-top: 0;
	}

	.tip-confirm-btn {
		background-color: #ffd700;
		color: #333;
		border: 1px solid #000;
		padding: 6px 12px;
		border-radius: 4px;
		cursor: pointer;
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
</style>