<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<div id="header">
			<div class="World_Update_Class" @click="this.onPullDownRefresh"> <span>全球疫情</span> </div>
		</div>
		<div id="ID1" class="ID1_Class">
			<div id="world_data">
				<Globalblock></Globalblock>
			</div>
			<div id="most_infected" style="padding-top: 2vw;">
				<div class="Most_Infected_Class">
					<image style="width: 6vw;height: 6vw;padding-right: 2vw;" src="/static/icon/rank.png"></image>
					<span>各国统计</span>
				</div>
				<div style="padding-top: 4vw;">
					<div id="list_id">
						<div class="country" style="width: 26vw;border-top-left-radius: 1.8vw;border-bottom-left-radius: 1.8vw;"><span>国家</span></div>
						<div class="country" style="width: 16vw;"><span>新增</span></div>
						<div class="country" style="width: 22vw;"><span>累计</span></div>
						<div class="country" style="width: 20vw;"><span>治愈</span></div>
						<div class="country" style="width: 16vw;border-top-right-radius: 1.8vw;border-bottom-right-radius: 1.8vw;"><span>死亡</span></div>
					</div>
					<CountryData></CountryData>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import Globalblock from './globalblock.vue'
	import CountryData from './data.vue'
	export default {
		data() {
			return {

			}
		},
		onShow: function(options) {
			this.loadData();
			plus.navigator.setStatusBarBackground("#fff");
		},
		onPullDownRefresh() {
			this.loadData()
		},
		components: {
			CountryData,
			Globalblock
		},
		methods: {
			loadData() {
				uni.stopPullDownRefresh();
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.container {
		background-color: rgba(255, 255, 255, 1);
		overflow: hidden;
		margin: 0;
		padding: 0;
		font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
		font-smoothing: antialiased;
		color: #222;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #fff;
		position: fixed;
		z-index: 999;
	}

	.ID1_Class {
		width: 100vw;
		margin: 0 auto;
		position: relative;
		padding-top: var(--status-bar-height);
		background-color: #fff;
		min-height: 100%;
		transform-origin: center top;
	}

	#header {
		display: flex;
		position: fixed;
		top: var(--status-bar-height);
		margin: 0 6vw;
		padding: 5vw 0 3vw 0;
		width: 88vw;
		border-bottom: 1px solid #e8e8e8;
		background-color: #fff;
		z-index: 999;
	}

	#world_data {
		padding-top: 20vw;
	}

	.Inf_county_Class {
		opacity: 0.33;
	}

	.Inf_county {
		display: flex;
		position: relative;
		overflow: visible;
		width: 88vw;
		height: 15vw;
		margin-left: 6vw;
		border-bottom: 1px solid #e8e8e8;
	}

	.epidmc_Class {
		opacity: 0.1;
	}

	.World_Update_Class {
		position: relative;
		overflow: visible;
		width: fit-content;
		white-space: nowrap;
		text-align: margin-left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 6vw;
		color: rgba(36, 42, 64, 1);
	}

	.Most_Infected_Class {
		position: relative;
		margin-left: 6vw;
		overflow: visible;
		width: fit-content;
		white-space: nowrap;
		text-align: margin-left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 5vw;
		color: rgba(36, 42, 64, 1);
	}

	#list_id {
		display: flex;
		margin-left: 6vw;
		position: relative;
		width: 88vw;
	}

	.country {
		position: relative;
		font-size: 3.5vw;
		width: -webkit-fit-content;
		height: fit-content;
		padding: 2vw 0;
		background-color: #eaf3f9;
		text-align: center;
		margin: 0 1px;
	}
</style>
