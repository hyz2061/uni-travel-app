<template>
	<view class="page">
		<view class="navbar">
			<view class="navbar-left" @click="goBack">
				<view class="left-img">
					<image src="/static/pages/detail/left-arrow.svg" style="width: 50rpx;height: 50rpx;"
						mode="aspectFit"></image>
				</view>
				<text class="back-text">返回</text>
			</view>
			<view class="navbar-right" @click="goShare">
				<image src="/static/pages/detail/share.svg" style="width: 50rpx;height:50rpx"></image>
			</view>
		</view>

		<view class="header">
			<view class="title">【攻略】长安不夜城西安三天两夜寻宝之旅</view>
			<view class="tags">
				<view class="tag">3天2夜</view>
				<view class="tag">西安</view>
				<view class="tag">约12.21KM</view>
			</view>
		</view>

		<view class="tabs-wrapper">
			<view :class="['tabs', activeTab === 0 ? 'tabs-journey' : 'tabs-luggage']">
				<view :class="['tab-item', 'tab-item-journey', activeTab === 0 ? 'tab-active' : '']"
					@click="switchTab(0)">
					行程
				</view>
				<view :class="['tab-item', 'tab-item-luggage', activeTab === 1 ? 'tab-active' : '']"
					@click="switchTab(1)">
					行李意见
				</view>
			</view>
		</view>


		<view v-if="activeTab === 0" class="day-tabs">
			<view v-for="(day, index) in days" :key="index"
				:class="['day-tab', activeDay === index ? 'day-active' : '']" @click="switchDay(index)">
				第{{day}}天
			</view>
		</view>

		<view v-if="activeTab === 0" class="content-area">
			
			<view v-if="activeDay === 0">
				<view class="day-header">
					<text class="day-title">第一天</text>
					<text class="collapse-icon">
						<image src="/static/pages/detail/top-arrow.svg" mode="aspectFit"></image>
					</text>
				</view>

				<view class="progress-bar">
					<text class="fill-text">
						
					</text>
				</view>

				<view class="time-section">
					<view class="time-tabs">
						<view v-for="(period, index) in timePeriods" :key="index"
							:class="['time-tab', activePeriod === index ? 'time-active' : '']"
							@click="switchPeriod(index)">
							{{period}}
						</view>
					</view>
					
					<view v-if="activePeriod === 0">
						<view class="time-right-display">09:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day1-1" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>

						<view class="time-display">11:00</view>
						<view class="schedule-right-card">
							<view class="point"><text>...</text></view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>

					<view v-if="activePeriod === 1">
						<view class="time-right-display">14:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day1-3" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
						<view class="time-display">16:00</view>
						<view class="schedule-right-card">
							<view class="point"><text>...</text></view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>

					<view v-if="activePeriod === 2">
						<view class="time-right-display">19:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day1-5" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>
				</view>
			</view>

			<view v-if="activeDay === 1">
				<view class="day-header">
					<text class="day-title">第二天</text>
					<text class="collapse-icon">
						<image src="/static/pages/detail/top-arrow.svg" mode="aspectFit"></image>
					</text>
				</view>

				<view class="progress-bar">
					<text class="fill-text">
						
					</text>
				</view>

				<view class="time-section">
					<view class="time-tabs">
						<view v-for="(period, index) in timePeriods" :key="index"
							:class="['time-tab', activePeriod === index ? 'time-active' : '']"
							@click="switchPeriod(index)">
							{{period}}
						</view>
					</view>

					<view v-if="activePeriod === 0">
						<view class="time-right-display">09:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-1" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
						<view class="time-display">11:00</view>
						<view class="schedule-right-card">
							<view class="point"><text>...</text></view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>

					<view v-if="activePeriod === 1">
						<view class="time-right-display">14:30</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-3" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;">华清宫</view>
						</view>
						<view class="time-display">15:30</view>
						<view class="schedule-right-card">
							<view class="point"><text>...</text></view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>

					<view v-if="activePeriod === 2">
						<view class="time-right-display">19:30</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-5" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>
				</view>
			</view>

			<view v-if="activeDay === 2">
				<view class="day-header">
					<text class="day-title">第三天</text>
					<text class="collapse-icon">
						<image src="/static/pages/detail/top-arrow.svg" mode="aspectFit"></image>
					</text>
				</view>

				<view class="progress-bar">
					<text class="fill-text">
						
					</text>
				</view>

				<view class="time-section">
					<view class="time-tabs">
						<view v-for="(period, index) in timePeriods" :key="index"
							:class="['time-tab', activePeriod === index ? 'time-active' : '']"
							@click="switchPeriod(index)">
							{{period}}
						</view>
					</view>

					<view v-if="activePeriod === 0">
						<view class="time-right-display">09:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day3-1" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
						<view class="time-display">11:00</view>
						<view class="schedule-right-card">
							<view class="point"><text>...</text></view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>

					<view v-if="activePeriod === 1">
						<view class="time-right-display">15:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day3-3" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>

					<view v-if="activePeriod === 2">
						<view class="time-right-display">20:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day3-4" @click="showPic">
								<text>...</text>
							</view>
							<view style="padding: 20rpx; font-weight: bold;"></view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view v-if="activeTab === 1" class="luggage-content">
			<view class="luggage-category">
				<view class="category-header" @click="toggleCategory">
					<text class="category-title">证件</text>
				</view>
				<view :class="['category-content', categoryExpanded ? '' : 'collapsed']" @click="toggleCategory">
					<text class="collapse-icon">
						<image src="/static/pages/detail/white-arrow.svg" mode="aspectFit"
							:style="{ transform: categoryExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }">
						</image>
					</text>
					<view v-if="categoryExpanded" class="category-detail">
						<text>身份证、学生证、驾驶证...</text>
					</view>
				</view>
			</view>
		</view>

		<view v-if="showTip" class="tip-modal" @click.self="closeTip">
			<view class="tip-content">
				<view class="tip-header">温馨提示</view>
				<view class="tip-text">
					本次旅行为西安三天两夜旅程，该旅程超级适合上午起不来的年轻人啦，不夜城西安玩起来！！！
				</view>
				<view class="tip-buttons">
					<view class="btn-dismiss" @click="goBack">拜拜 再去找找</view>
					<view class="btn-confirm" @click="confirmTip">了解 进入行程</view>
				</view>
			</view>
			<image class="tip-mascot" src="/static/pages/detail/bird.svg" mode="aspectFit"></image>
		</view>

		<view v-if="showPop" class="point-pop-overlay" @click="closePop">
			<view class="point-pop" :style="popStyle" @click.stop>
				<view class="triangle-indicator"></view>
				<view class="pop-content">
					<view class="pop-item" @click="handleAction('add')">
						<view><view class="pop-icon add"><image src="/static/pages/detail/add_icon.svg" mode="aspectFit" style="width: 44rpx;height: 30rpx;"></image></view></view>
					</view>
					<view class="pop-item" @click="handleAction('comment')">
						<view><view class="pop-icon add"><image src="/static/pages/detail/2.svg" mode="aspectFit" style="width: 44rpx;height: 30rpx;"></image></view></view>
					</view>
					<view class="pop-item" @click="handleAction('share')">
						<view><view class="pop-icon share"><image src="/static/pages/detail/3.svg" mode="aspectFit" style="width: 44rpx;height: 30rpx;"></image></view></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 0,
				activeDay: 0,
				statusBarHeight: 0,
				navBarHeight: 50,
				activePeriod: 0,
				days: [1, 2, 3],
				timePeriods: ['上午', '下午', '晚上'],
				showTip: true,
				showActionMenu: false,
				showProgress: true,
				showPop: false,
				categoryExpanded: false,
				popStyle: {
					top: '1320rpx',
					left: '50%',
					transform: 'translateX(-50%)'
				},
				currentPointId: ''
			}
		},
		onLoad(options) {
			this.calculateBarHeight()
		},
		onShow() {
			// this.resetStatus() // 视需求开启
		},
		methods: {
			resetStatus() {
				this.showTip = true
				this.showProgress = true
				this.categoryExpanded = false
				this.showPop = false
				this.currentPointId = ''
			},
			goBack() {
				// #ifdef H5
				if (this.$router) {
					this.$router.push({ path: '/pages/index/index' })
					return
				}
				// #endif
				uni.switchTab({ url: '/pages/index/index' })
			},
			switchTab(index) {
				this.activeTab = index
			},
			switchDay(index) {
				this.activeDay = index;
				this.activePeriod = 0; // 切换天数时，默认重置为上午
			},
			switchPeriod(index) {
				this.activePeriod = index; // 切换时间段
			},
			closeTip() {
				// 之前的逻辑似乎是 closeTip = true? 通常应该是 false 关闭弹窗
				// 保持原逻辑或修正：点击遮罩不强制关闭，必须点按钮
			},
			dismissTip() {
				uni.navigateBack()
			},
			confirmTip() {
				this.showTip = false;
			},
			showPic(e) {
				const targetId = e && e.currentTarget && e.currentTarget.id ? e.currentTarget.id : 'point-day1-1'
				if (this.showPop && this.currentPointId === targetId) {
					this.showPop = false
					this.currentPointId = ''
					return
				}
				this.currentPointId = targetId
				this.showPop = true
				this.$nextTick(() => {
					const query = uni.createSelectorQuery().in(this)
					query.select(`#${targetId}`).boundingClientRect((data) => {
						if (data) {
							const top = data.top + data.height + 0
							const left = data.left + data.width / 2
							this.popStyle = {
								top: top + 'px',
								left: left + 'px',
								transform: 'translateX(-50%)'
							}
						}
					}).exec()
				})
			},
			closePop() {
				this.showPop = false
				this.currentPointId = ''
			},
			toggleCategory() {
				this.categoryExpanded = !this.categoryExpanded
			},
			handleAction(action) {
				console.log('Action:', action)
				if (action === 'add') {
					uni.navigateTo({ url: '/pages/Detail/Detail' })
				}
				this.closePop()
			},
			calculateBarHeight() {
				const systemInfo = uni.getSystemInfoSync()
				this.statusBarHeight = systemInfo.statusBarHeight
				if (systemInfo.safeArea) {
					this.statusBarHeight = systemInfo.safeArea.top
				}
				if (this.statusBarHeight === 0) {
					this.statusBarHeight = this.isIOS() ? 50 : 0
				}
			},
			isIOS() {
				const systemInfo = uni.getSystemInfoSync()
				return systemInfo.platform === 'ios'
			},
			goShare() {
				console.log('share')
			}
		}
	}
</script>

<style scoped>
	/* 弹层遮罩 */
	.point-pop-overlay {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: transparent;
		z-index: 3000;
	}

	/* 弹层容器 */
	.point-pop {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
	}

	/* 三角形指示器 */
	.triangle-indicator {
		width: 0;
		height: 0;
		border-left: 20rpx solid transparent;
		border-right: 16rpx solid transparent;
		border-bottom: 13rpx solid #FE4A49;
		margin-bottom: -1rpx;
		z-index: 1;
	}

	/* 胶囊型内容区 */
	.pop-content {
		width: 138rpx;
		height: 44rpx;
		background: #FE4A49;
		border-radius: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		box-sizing: border-box;
	}

	/* 弹层项 */
	.pop-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rpx;
	}

	/* 图标容器 */
	.pop-icon {
		color: #000;
		font-size: 8rpx;
		font-weight: bold;
		line-height: 1;
	}

	.detail-page {
		width: 100vw;
		position: relative;
	}

	/* 状态栏 */
	.status-bar {
		background-color: #25B0F0;
	}

	/* 顶部导航栏 */
	.navbar {
		display: flex;
		padding: 24rpx 0;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-right: 50rpx;
		box-sizing: border-box;
		background-color: #25B0F0;
	}

	.navbar-left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.back-text {
		font-size: 32rpx;
		color: #fff;
		font-weight: 590;
	}

	.navbar-right {
		display: flex;
		flex-direction: row;
		gap: 30rpx;
	}

	/* 标题区域 */
	.header {
		width: 100%;
		padding: 0 50rpx 0 50rpx;
		box-sizing: border-box;
		background-color: #25B0F0;
	}

	.title {
		font-size: 48rpx;
		font-weight: bold;
		color: #000;
		line-height: 65rpx;
		margin-bottom: 20rpx;
		padding-top: 44rpx;
		box-sizing: border-box;
	}

	.tags {
		display: flex;
		align-items: center;
		flex-direction: row;
		padding-bottom: 60rpx;
		flex-wrap: wrap;
	}

	.tag {
		width: 140rpx;
		border: 4rpx solid #000;
		border-radius: 30rpx;
		text-align: center;
		padding: 4rpx 12rpx 4rpx 14rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		color: #000;
		margin-right: 20rpx;
	}

	.tag:last-child {
		width: 200rpx;
	}

	/* Tab切换 */
	.tabs-wrapper {
		padding: 0;
		position: relative;
		margin-bottom: 0;
		background-color: #25B0F0;
	}

	.tabs {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		height: 100rpx;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center top;
		background-size: 100% auto;
	}

	.tabs-journey {
		background-image: url(/static/pages/detail/Subtract.svg);
	}

	.tabs-luggage {
		background-image: url(/static/pages/detail/Exclude.svg);
	}

	.tab-item {
		font-size: 38rpx;
		color: #000;
		font-weight: bold;
		text-align: center;
		position: relative;
		box-sizing: border-box;
		background: transparent;
		top: 3px;
	}

	.tab-item-journey.tab-active {
		color: #000;
		position: absolute;
		left: 28rpx;
		top: 20rpx;
	}

	.tab-item-journey:not(.tab-active) {
		color: #FFFFFF;
		position: absolute;
		top: 0;
		left: 26rpx;
	}

	.tab-item-luggage.tab-active {
		color: #000;
		text-align: center;
		position: absolute;
		left: 148rpx;
		top: 10rpx;
	}

	.tab-item-luggage:not(.tab-active) {
		color: #FFFFFF;
		position: absolute;
		right: 14.25rem;
	}

	/* 天数选择 */
	.day-tabs {
		display: flex;
		flex-direction: row;
		padding-left: 20rpx;
		background: #fff;
		box-sizing: border-box;
		margin-bottom: 16rpx;
	}

	.day-tab {
		border: 2rpx solid #000;
		border-radius: 30rpx;
		width: 112rpx;
		padding: 4rpx 12rpx 4rpx 14rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		text-align: center;
		margin-right: 10rpx;
		color: #000;
		font-weight: bold;
	}

	.day-active {
		border: 2rpx solid #000;
		background: #E74C3C;
		color: #fff;
		border-color: #000;
	}

	/* 行程内容区域 */
	.content-area {
		background: #fff;
		padding-left: 20rpx;
		box-sizing: border-box;
		padding-right: 22rpx;
		overflow: visible;
	}

	.day-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30rpx;
	}

	.day-title {
		font-size: 56rpx;
		font-weight: 700;
		color: #000;
	}

	.collapse-icon image {
		width: 50rpx;
		height: 50rpx;
	}

	/* 进度条 */
	.progress-bar {
		line-height: 140rpx;
		background: #25B0F0;
		padding: 160rpx 0 10rpx 40rpx;
		border-radius: 40rpx;
		box-sizing: border-box;
		border: 4rpx solid #000;
		margin-bottom: 8rpx;
	}

	.fill-text {
		font-weight: 400;
		font-size: 24rpx;
	}

	/* 时间段选择 */
	.time-section {
		min-height: calc(100vh - 600rpx);
		overflow: visible;
		position: relative;
	}

	.time-tabs {
		display: flex;
		flex-direction: row;
		font-size: 20rpx;
		margin-bottom: 8rpx;
	}

	.time-tab {
		font-size: 40rpx;
		color: #000;
		margin-right: 20rpx;
		font-weight: 700;
	}

	.time-active {
		color: #FE4A49;
		border-bottom: 4rpx solid #FE4A49;
	}

	.time-right-display {
		font-size: 40rpx;
		font-weight: 700;
		color: #000;
		margin-bottom: 8rpx;
	}

	.time-display {
		font-size: 40rpx;
		font-weight: 700;
		color: #000;
		text-align: right;
	}

	/* 行程卡片 */
	.schedule-left-card,
	.schedule-right-card {
		height: 184rpx;
		background-color: #F6CD4B;
		border-radius: 40rpx;
		position: relative;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
		overflow: visible;
	}

	.schedule-left-card::after {
		content: '';
		position: absolute;
		left: -20rpx;
		top: 50%;
		transform: translateY(-50%);
		width: 0;
		height: 0;
		border-top: 30rpx solid transparent;
		border-bottom: 30rpx solid transparent;
		border-right: 30rpx solid #efce63;
		z-index: 10;
		display: block;
		pointer-events: none;
	}

	.schedule-right-card {
		margin-right: 18rpx;
	}

	.schedule-left-card .point {
		position: absolute;
		right: 28rpx;
		top: 20rpx;
		font-weight: bold;
		width: 60rpx;
		height: 60rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
	}

	.schedule-right-card .point {
		position: absolute;
		left: 20rpx;
		top: 20rpx;
		font-weight: bold;
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
	}

	.schedule-right-card::after {
		content: '';
		position: absolute;
		right: -20rpx;
		top: 50%;
		transform: translateY(-50%);
		width: 0;
		height: 0;
		border-top: 30rpx solid transparent;
		border-bottom: 30rpx solid transparent;
		border-left: 30rpx solid #efce63;
		z-index: 10;
		display: block;
		pointer-events: none;
	}

	/* 行李意见内容 */
	.luggage-content {
		padding: 80rpx 20rpx;
		min-height: calc(100vh - 450rpx);
	}

	.luggage-category {
		margin-bottom: 30rpx;
	}

	.category-header {
		background: #FE4A49;
		border-radius: 40rpx 40rpx 0 0;
		padding: 30rpx 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: none;
		cursor: pointer;
	}

	.category-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #fff;
	}

	.category-content {
		background-color: #25B0F0;
		border-radius: 0 0 40rpx 40rpx;
		min-height: 200rpx;
		max-height: 1000rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-start;
		border-top: none;
		padding: 20rpx;
		box-sizing: border-box;
		transition: min-height 0.3s ease, max-height 0.3s ease;
		overflow: hidden;
	}

	.category-content.collapsed {
		min-height: 100rpx;
		max-height: 100rpx;
	}

	.category-content .collapse-icon {
		font-size: 40rpx;
		color: #000;
		font-weight: bold;
		cursor: pointer;
		margin-bottom: 10rpx;
		transition: transform 0.3s ease;
	}

	.category-content .collapse-icon image {
		width: 50rpx;
		height: 50rpx;
		transition: transform 0.3s ease;
	}

	.category-detail {
		width: 100%;
		padding: 20rpx;
		color: #fff;
		font-size: 28rpx;
		line-height: 1.6;
	}

	/* 温馨提示弹窗 */
	.tip-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		z-index: 9999;
	}

	.tip-content {
		background-color: #FE4A49;
		border-radius: 40rpx 40rpx 0 0;
		padding: 22rpx 50rpx 10rpx 20rpx;
		width: 100%;
		height: 340rpx;
		position: relative;
		box-sizing: border-box;
	}

	.tip-header {
		font-size: 56rpx;
		font-weight: 700;
		color: #FFFFFF;
		margin-bottom: 20rpx;
	}

	/* 优化后的字体样式 */
	.tip-text {
		font-size: 32rpx; /* 字体加大 */
		color: #fff;
		line-height: 48rpx; /* 增加行高 */
		height: 140rpx;
		margin-top: 20rpx;
		text-indent: 1em;
		margin-bottom: 20rpx;
		letter-spacing: 2rpx; /* 增加字间距 */
		font-weight: 500;
	}

	.tip-buttons {
		display: flex;
		flex-direction: row;
		gap: 15rpx;
	}

	.btn-dismiss,
	.btn-confirm {
		flex: 1;
		border-radius: 40rpx;
		text-align: center;
		width: 220rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 30rpx;
		font-weight: bold;
	}

	.btn-dismiss {
		background: #F6CD4B;
		color: #000;
	}

	.btn-confirm {
		background: #25B0F0;
		color: #fff;
	}

	.tip-mascot {
		position: absolute;
		right: 18rpx;
		bottom: 234rpx;
		width: 200rpx;
		height: 200rpx;
	}
</style>