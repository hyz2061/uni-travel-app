<template>
	<view class="page">
		<!-- 状态栏占位 -->
		<!-- <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view> -->
		<!-- 顶部导航栏 -->
		<view class="navbar">
			<view class="navbar-left" @click="goBack">
				<view class="left-img">
					<image src="/static/pages/detail/left-arrow.svg" style="width: 50rpx;height: 50rpx;"
						mode="aspectFit"></image>
				</view>
				<text class="back-text">返回</text>
			</view>
			<view class="navbar-right" @click="goShare">
				<image src="../../static/pages/detail/share.svg" style="width: 50rpx;height:50rpx"></image>
			</view>
		</view>

		<!-- 标题区域 -->
		<view class="header">
			<view class="title">【攻略】长安不夜城西安三天两夜寻宝之旅</view>
			<view class="tags">
				<view class="tag">3天2夜</view>
				<view class="tag">西安</view>
				<view class="tag">约12.21KM</view>
			</view>
		</view>

		<!-- Tab切换 -->
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


		<!-- 天数选择 - 只在行程 Tab 显示 -->
		<view v-if="activeTab === 0" class="day-tabs">
			<view v-for="(day, index) in days" :key="index"
				:class="['day-tab', activeDay === index ? 'day-active' : '']" @click="switchDay(index)">
				第{{day}}天
			</view>
		</view>

		<!-- 行程内容区域 - 只在行程 Tab 显示 -->
		<view v-if="activeTab === 0" class="content-area">
			<!-- 第一天内容 -->
			<view v-if="activeDay === 0">
				<!-- 第一天标题 -->
				<view class="day-header">
					<text class="day-title">第一天</text>
					<text class="collapse-icon">
						<image src="/static/pages/detail/top-arrow.svg" mode="aspectFit"></image>
					</text>
				</view>

				<!-- 进度条 -->
				<view class="progress-bar">
					<view class="progress-fill" v-if="showProgress">
						<text class="fill-text">
							“ 西安这座城，游玩的是历史文化背景，体会的是千年来蕴藏的浓厚文化底蕴”，
							这座承载了中国很多记忆的地方，是多少人自古以来的向往，踏入皇城，看尽长
							安。
							这次跟朋友一起去完回来，又玩了3天，其实去西安一般玩三至五天也够了，
							下面我就分享一下我几次去西安的经验和攻略大家参考参考。
						</text>
					</view>
				</view>

				<!-- 时间段选择 -->
				<view class="time-section">
					<view class="time-tabs">
						<view v-for="(period, index) in timePeriods" :key="index"
							:class="['time-tab', activePeriod === index ? 'time-active' : '']">
							{{period}}
						</view>
					</view>
					<!-- 上午内容 -->
					<view v-if="activePeriod === 0">
						<view class="time-right-display">09:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day1-1" @click="showPic">
								<text>...</text>
							</view>
						</view>

						<view class="time-display">11:00</view>
						<view class="schedule-right-card">
							<view class="point">
								<text>...</text>
							</view>
						</view>
						<view class="time-right-display">11:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day1-2" @click="showPic">
								<text>...</text>
							</view>
						</view>
					</view>

					<!-- 下午内容 -->

				</view>
			</view>

			<!-- 第二天内容 -->
			<view v-if="activeDay === 1">
				<!-- 第二天标题 -->
				<view class="day-header">
					<text class="day-title">第二天</text>
					<text class="collapse-icon">
						<image src="/static/pages/detail/top-arrow.svg" mode="aspectFit"></image>
					</text>
				</view>

				<!-- 进度条 -->
				<view class="progress-bar">
					<text class="fill-text">
						“ 西安这座城，游玩的是历史文化背景，体会的是千年来蕴藏的浓厚文化底蕴”，
						这座承载了中国很多记忆的地方，是多少人自古以来的向往，踏入皇城，看尽长
						安。
						这次跟朋友一起去完回来，又玩了3天，其实去西安一般玩三至五天也够了，
						下面我就分享一下我几次去西安的经验和攻略大家参考参考。
					</text>
					<!-- 	<view class="progress-fill" style="width: 50%;"></view> -->
				</view>

				<!-- 时间段选择 -->
				<view class="time-section">
					<view class="time-tabs">
						<view v-for="(period, index) in timePeriods" :key="index"
							:class="['time-tab', activePeriod === index ? 'time-active' : '']">
							{{period}}
						</view>
					</view>

					<!-- 上午内容 -->
					<view v-if="activePeriod === 0">
						<view class="time-right-display">09:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-1" @click="showPic">
								<text>...</text>
							</view>
						</view>
						<view class="time-display">11:00</view>
						<view class="schedule-right-card">
							<view class="point">
								<text>...</text>
							</view>
						</view>
						<view class="time-right-display">11:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-2" @click="showPic">
								<text>...</text>
							</view>
						</view>

					</view>

					<!-- 下午内容 -->
					<view v-if="activePeriod === 1">
						<view class="time-right-display">14:30</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-3" @click="showPic">
								<text>...</text>
							</view>
						</view>
						<view class="time-display">15:30</view>
						<view class="schedule-right-card">
							<view class="point">
								<text>...</text>
							</view>
						</view>
						<view class="time-right-display">11:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-4" @click="showPic">
								<text>...</text>
							</view>
						</view>
					</view>

					<!-- 晚上内容 -->
					<view v-if="activePeriod === 2">
						<view class="time-right-display">19:30</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day2-5" @click="showPic">
								<text>...</text>
							</view>
						</view>
						<view class="time-display">20:30</view>
						<view class="schedule-right-card">
							<view class="point">
								<text>...</text>
							</view>
						</view>

					</view>
				</view>
			</view>

			<!-- 第三天内容 -->
			<view v-if="activeDay === 2">
				<!-- 第三天标题 -->
				<view class="day-header">
					<text class="day-title">第三天</text>
					<text class="collapse-icon">
						<image src="/static/pages/detail/top-arrow.svg" mode="aspectFit"></image>
					</text>
				</view>

				<!-- 进度条 -->
				<view class="progress-bar">
					<text class="fill-text">
						“ 西安这座城，游玩的是历史文化背景，体会的是千年来蕴藏的浓厚文化底蕴”，
						这座承载了中国很多记忆的地方，是多少人自古以来的向往，踏入皇城，看尽长
						安。
						这次跟朋友一起去完回来，又玩了3天，其实去西安一般玩三至五天也够了，
						下面我就分享一下我几次去西安的经验和攻略大家参考参考。
					</text>
				</view>

				<!-- 时间段选择 -->
				<view class="time-section">
					<view class="time-tabs">
						<view v-for="(period, index) in timePeriods" :key="index"
							:class="['time-tab', activePeriod === index ? 'time-active' : '']">
							{{period}}
						</view>
					</view>

					<!-- 上午内容 -->
					<view v-if="activePeriod === 0">
						<view class="time-right-display">09:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day3-1" @click="showPic">
								<text>...</text>
							</view>
						</view>
						<view class="time-display">11:00</view>
						<view class="schedule-right-card">
							<view class="point">
								<text>...</text>
							</view>
						</view>
						<view class="time-right-display">11:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day3-2" @click="showPic">
								<text>...</text>
							</view>

						</view>
					</view>

					<!-- 下午内容 -->
					<view v-if="activePeriod === 1">
						<view class="time-right-display">15:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day3-3" @click="showPic">
								<text>...</text>
							</view>
						</view>
						<view class="time-display">16:00</view>
						<view class="schedule-right-card">
							<view class="point">
								<text>...</text>
							</view>
						</view>
					</view>

					<!-- 晚上内容 -->
					<view v-if="activePeriod === 2">
						<view class="time-right-display">20:00</view>
						<view class="schedule-left-card">
							<view class="point" id="point-day3-4" @click="showPic">
								<text>...</text>
							</view>
						</view>
						<view class="time-display">21:00</view>
						<view class="schedule-right-card">
							<view class="point">
								<text>...</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 行李意见内容 - 只在行李意见 Tab 显示 -->
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
					<!-- 这里可以添加具体的内容 -->
					<view v-if="categoryExpanded" class="category-detail">
						<text>证件内容详情...</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 温馨提示弹窗 -->
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
		<!-- 三个点弹层 -->
		<view v-if="showPop" class="point-pop-overlay" @click="closePop">
			<view class="point-pop" :style="popStyle" @click.stop>
				<!-- <image class="tip-mascot" src="/static/pages/detail/pop-content.svg" mode="aspectFit"></image> -->
				<!-- 三角形指示器 -->
				<view class="triangle-indicator"></view>
				<!-- 胶囊型内容区 -->
				<view class="pop-content">
					<!-- 添加到日程 -->
					<view class="pop-item" @click="handleAction('add')">
						<view>
							<view class="pop-icon add">
								<image src="/static/pages/detail/add_icon.svg" mode="aspectFit"
									style="width: 44rpx;height: 30rpx;">
								</image>

							</view>
						</view>

					</view>
					<!-- 评论 -->
					<view class="pop-item" @click="handleAction('comment')">
						<view>
							<view class="pop-icon add">
								<image src="/static/pages/detail/2.svg" mode="aspectFit"
									style="width: 44rpx;height: 30rpx;"></image>
							</view>
						</view>

					</view>
					<!-- 分享 -->
					<view class="pop-item" @click="handleAction('share')">
						<view>
							<view class="pop-icon share">
								<image src="/static/pages/detail/3.svg" mode="aspectFit"
									style="width: 44rpx;height: 30rpx;"></image>
							</view>
						</view>

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
				navBarHeight: 50, // 默认导航栏高度
				activePeriod: 0,
				days: [1, 2, 3],
				timePeriods: ['上午', '下午', '晚上'],
				showTip: true,
				showActionMenu: false,
				showProgress: true,
				showPop: false,
				categoryExpanded: false, // 控制分类内容展开/收缩
				popStyle: {
					top: '1320rpx',
					left: '50%',
					transform: 'translateX(-50%)'
				}
			}
		},
		onLoad(options) {

			// console.log(options)
			if (options && options.id) {
				// this.detailId = options.id
			} else {
				// H5 场景兜底
				// this.detailId = this.$route && this.$route.query ? this.$route.query.id || null : null
			}
			this.calculateBarHeight()
		},
		onShow() {
			this.resetStatus()
		},
		activated() {
			this.resetStatus()
		},



		methods: {
			// 重置状态
			resetStatus() {
				this.showTip = true
				this.showProgress = true
				this.categoryExpanded = false
				this.showPop = false
			},

			goBack() {
				// 不论从哪进入，统一回到首页
				// #ifdef H5
				if (this.$router) {
					this.$router.push({
						path: '/pages/index/index'
					})
					return
				}
				// #endif
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			switchTab(index) {
				this.activeTab = index
			},
			switchDay(index) {
				this.activeDay = index
			},
			switchPeriod(index) {
				this.activePeriod = index
			},
			closeTip() {
				this.showTip = true
			},
			dismissTip() {
				// 添加返回 
				uni.navigateBack()
			},
			confirmTip() {
				this.showTip = false;
				// this.showProgress = false;
			},
			showPic(e) {
				this.showPop = true
				// 获取第一个三个点的位置，动态定位弹窗
				this.$nextTick(() => {
					const targetId = e && e.currentTarget && e.currentTarget.id ? e.currentTarget.id :
						'point-day1-1'
					const query = uni.createSelectorQuery().in(this)
					query.select(`#${targetId}`).boundingClientRect((data) => {
						if (data) {
							// 计算弹窗位置：在三个点下方
							// data.top 是元素距离页面顶部的距离
							// data.left 是元素距离页面左侧的距离
							// data.width 是元素宽度
							const top = data.top + data.height + 0 // 三个点下方40rpx，增加间距
							const left = data.left + data.width / 2 // 三个点的水平中心
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
			},
			toggleCategory() {
				this.categoryExpanded = !this.categoryExpanded
			},
			handleAction(action) {
				console.log('Action:', action)
				if (action === 'add') {
					// 跳转到添加到日程页面
					uni.navigateTo({
						url: '/pages/Detail/Detail'
					})
				}
				if (action === 'share') {
					// 跳转分享
					// uni.navigateTo({
					// 	// 配置实际路径
					// 	// url: '/pages/share/share',

					// });
				}
				this.closePop()
			},
			calculateBarHeight() {
				const systemInfo = uni.getSystemInfoSync()
				// 获取状态栏高度
				this.statusBarHeight = systemInfo.statusBarHeight

				// 在H5端，可以使用安全区域信息
				if (systemInfo.safeArea) {
					this.statusBarHeight = systemInfo.safeArea.top
				}

				// 对于不支持状态栏高度的设备，设置默认值
				if (this.statusBarHeight === 0) {
					this.statusBarHeight = this.isIOS() ? 50 : 0
				}
			},
			isIOS() {
				const systemInfo = uni.getSystemInfoSync()
				return systemInfo.platform === 'ios'
			},
			// 跳转分享
			goShare() {
				// uni.navigateTo({
				// 	// 配置实际路径
				// 	// url: '/pages/share/share',

				// });
			}
		}
	}
</script>

<style scoped>
	/* 禁止页面滚动 */
	/* .page {
		height: 100vh;
		overflow: hidden;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	} */

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
		/* padding: 4rpx 6rpx; */
		display: flex;
		flex-direction: row;
		/* gap: 4rpx; */
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

	/* 图标容器外层 */
	.pop-icon-wrapper {
		width: 12rpx;
		height: 12rpx;
		background: #fff;
		border: 1rpx solid #000;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* 图标容器 */
	.pop-icon {
		color: #000;
		font-size: 8rpx;
		font-weight: bold;
		line-height: 1;
	}

	/* 文字 */
	.pop-text {
		font-size: 6rpx;
		color: #fff;
		text-align: center;
		font-weight: bold;
		white-space: nowrap;
	}

	.detail-page {
		width: 100vw;
		position: relative;
		/* overflow-x: hidden; */
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
		/* padding: 80rpx 40rpx 30rpx; */
	}

	.navbar-left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.icon-back {
		font-size: 50rpx;
		color: #fff;
		font-weight: 580;
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

	.icon-btn {
		font-size: 40rpx;
		color: #fff;
	}

	/* 标题区域 */
	.header {
		width: 100%;
		heigth: 130rpx;
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
		/* height: 40rpx; */
		border: 4rpx solid #000;
		border-radius: 30rpx;
		text-align: center;
		padding: 4rpx 12rpx 4rpx 14rpx;
		box-sizing: border-box;
		/* line-height: 40rpx; */
		font-size: 32rpx;
		/* box-sizing: border-box; */
		color: #000;
		margin-right: 20rpx;

	}

	.tag:last-child {
		width: 200rpx;
		/* height: 40rpx; */
	}

	/* Tab切换 */
	.tabs-wrapper {
		padding: 0;
		position: relative;
		margin-bottom: 0;
		background-color: #25B0F0;
	}

	.tabs {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: row;
		-ms-flex-wrap: nowrap;
		-ms-flex-align: center;
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
		/* flex: 1 1 0%;
		min-width: 0; */
		/* padding: 25rpx 36rpx; */
		font-size: 36rpx;
		color: #000;
		font-weight: bold;
		text-align: center;
		position: relative;
		box-sizing: border-box;
		background: transparent;
	}

	/* 行程 Tab - 选中时显示在白色背景图上 */
	.tab-item-journey.tab-active {
		color: #000;
		position: absolute;
		left: 26rpx;
		top: 20rpx;
	}

	/* 行程 Tab - 未选中时 */
	.tab-item-journey:not(.tab-active) {
		color: #FFFFFF;
		position: absolute;
		top: 0;
		left: 26rpx;

	}

	/* 行李意见 Tab - 选中时 */
	.tab-item-luggage.tab-active {
		color: #000;
		text-align: center;
		position: absolute;
		left: 162rpx;
		top: 10rpx;

		/* top: -44rpx;
		right: 30rpx; */
	}

	/* 行李意见 Tab - 未选中时 */
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
		/* margin-top: 38rpx; */
	}

	.day-tab {
		border: 2rpx solid #000;
		border-radius: 30rpx;
		width: 112rpx;
		padding: 4rpx 12rpx 4rpx 14rpx;
		/* height: 40rpx; */
		box-sizing: border-box;
		font-size: 30rpx;
		text-align: center;
		/* line-height: 40rpx; */
		margin-right: 10rpx;
		color: #000;
		/* background: transparent; */
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

	.collapse-icon {
		font-size: 20rpx;
		color: #000;
		font-weight: bold;
	}

	.collapse-icon image {
		width: 50rpx;
		height: 50rpx;
	}

	/* 进度条 */
	.progress-bar {

		line-height: 140rpx;
		background: #25B0F0;
		padding: 10rpx 0 10rpx 40rpx;
		border-radius: 40rpx;
		box-sizing: border-box;
		border: 4rpx solid #000;
		margin-bottom: 8rpx;

	}

	.progress-fill {
		/* background-color: #D9D9D9; */
		/* height: 120rpx;
		width: 120rpx; */
		font-weight: 400;
		font-size: 24rpx;

	}

	.fill-text {
		font-weight: 400;
		font-size: 24rpx;

	}

	/* 时间段选择 */
	.time-section {
		/* padding: 40rpx; */
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
		/* position: relative;
		right: -600rpx; */
	}

	/* 行程卡片 */
	.schedule-left-card,
	.schedule-right-card {
		/* width: 660rpx; */
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
		/* margin-left: -20rpx; */
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
		/* background: #F4D03F; */
		padding: 80rpx 20rpx;
		min-height: calc(100vh - 450rpx);
	}

	/* 分类卡片 */
	.luggage-category {
		margin-bottom: 30rpx;
	}

	/* 分类头部 */
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


	/* 分类内容 */
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

	/* 更多卡片 */
	.more-card {
		background: #F4D03F;
		border: 4rpx solid #000;
		border-radius: 20rpx;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 30rpx;
	}

	.more-menu {
		font-size: 40rpx;
		color: #000;
		font-weight: bold;
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
		/* line-height: 340rpx; */
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

	.tip-text {
		font-size: 30rpx;
		color: #fff;
		line-height: 40rpx;
		height: 120rpx;
		margin-top: 20rpx;
		text-indent: 1em;
		margin-bottom: 20rpx;
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

	/* 操作菜单弹窗 */
	.action-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2000;
	}

	.action-menu {
		background: #E74C3C;
		border-radius: 50rpx;
		padding: 30rpx 60rpx;
		display: flex;
		gap: 50rpx;
		align-items: center;
		border: 5rpx solid #000;
	}

	.action-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15rpx;
	}

	.action-icon {
		width: 80rpx;
		height: 80rpx;
		background: #000;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.action-text {
		font-size: 24rpx;
		color: #fff;
		text-align: center;
		font-weight: bold;
	}
</style>