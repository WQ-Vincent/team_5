<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<div id="search_div">
			<div class="search_box">
				<div class="search_icon">
					<image style="width: 6vw;height: 6vw;" src="/static/icon/search.png"></image>
				</div>
				<input class="Search_Country_Class" placeholder="搜索国家" />
			</div>
		</div>
		<div id="ID1" class="ID1_Class">
			<div id="world_data" style="padding-top: 8vw;">
				<div class="World_Update_Class"> <span>全球疫情</span> </div>
				<div class="world_list">
					<div class="epidmc" style="background-image: linear-gradient(#E8DFFF,#fff);">
						<div class="epidmc_name"> <span>累计确诊</span> </div>
						<div class="epidmc_data" style="color: rgb(123,70,242);"> <span>50646963</span> </div>
						<div class="epidmc_add" style="background-color: rgba(123,70,242,0.1);">
							<div class="data_change" style="color: rgb(123,70,242);"> <span>+580451</span> </div>
						</div>
					</div>
					<div class="epidmc" style="background-image: linear-gradient(#FFD3E6,#fff);">
						<div class="epidmc_name"> <span>累计死亡</span> </div>
						<div class="epidmc_data" style="color: rgb(231,71,130);"> <span>1257384</span> </div>
						<div class="epidmc_add" style="background-color: rgba(231,71,130,0.1);">
							<div class="data_change" style="color: rgb(231,71,130);"> <span>+6880</span> </div>
						</div>
					</div>
					<div class="epidmc" style="background-image: linear-gradient(#D6FFDC,#fff);">
						<div class="epidmc_name"> <span>累计治愈</span> </div>
						<div class="epidmc_data" style="color: rgb(40,194,133);"> <span>35432796</span> </div>
						<div class="epidmc_add" style="background-color: rgba(40,194,133,0.1);">
							<div class="data_change" style="color: rgb(40,194,133);"><span>+257218</span> </div>
						</div>
					</div>
					<div class="epidmc" style="background-image: linear-gradient(#FFF2D5,#fff);">
						<div class="epidmc_name"> <span>现有确诊</span> </div>
						<div class="epidmc_data" style="color: rgb(255,199,66);"> <span>46058</span> </div>
						<div class="epidmc_add" style="background-color: rgba(255,199,66,0.1);">
							<div class="data_change" style="color: rgb(255,199,66);"> <span>+644</span> </div>
						</div>
					</div>
				</div>
			</div>
			<div id="most_infected" style="padding-top: 2vw;">
				<div class="Most_Infected_Class"> <span>各国统计</span> </div>
				<div style="padding-top: 4vw;">
					<div id="list_id">
						<div class="country" style="width: 24vw;border-top-left-radius: 1.8vw;border-bottom-left-radius: 1.8vw;"><span>国家</span></div>
						<div class="country" style="width: 17vw;"><span>新增</span></div>
						<div class="country" style="width: 23vw;"><span>累计</span></div>
						<div class="country" style="width: 17vw;"><span>治愈</span></div>
						<div class="country" style="width: 17vw;border-top-right-radius: 1.8vw;border-bottom-right-radius: 1.8vw;"><span>死亡</span></div>
					</div>
					<CountryData></CountryData>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import CountryData from './data.vue'
	export default {
		onShow: function(options) {
			this.loadData();
			plus.navigator.setStatusBarBackground("#fff");
		},
		onPullDownRefresh() {
			this.loadData()
		},
		components:{
			CountryData
		},
		methods: {
			loadData() {
				/*this.$http('/data', {}, 'get').then((res) => {
				    //数据请求完成之后停止下拉刷新
				    uni.stopPullDownRefresh();
				    if (res.status) {
				        this.activityList = res.data
				    }
				})*/
			}
		}
	}
</script>

<style>
	.mediaViewInfo {}

	:root {}

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
		padding-top: 20vw;
		background-color: #fff;
		min-height: 100%;
		transform-origin: center top;
	}

	.Inf_county_Class {
		opacity: 0.33;
	}

	.Inf_county {
		display: flex;
		position: relative;
		overflow: visible;
		width: 86vw;
		height: 15vw;
		margin-left: 7vw;
		border-bottom: 1px solid #e8e8e8;
	}

	.epidmc_Class {
		opacity: 0.1;
	}

	.epidmc {
		position: relative;
		overflow: visible;
		width: 41.2vw;
		height: 38vw;
		border-radius: 3.5vw;
		margin: 0 1.8vw;
	}

	.epidmc_add {
		position: relative;
		overflow: visible;
		width: fit-content;
		height: 7vw;
		right: 2vw;
		top: 11vw;
		border-radius: 4vw;
		float: right;
	}

	.epidmc_data {
		position: relative;
		margin-left: 6vw;
		top: 8vw;
		overflow: visible;
		width: fit-content;
		white-space: nowrap;
		text-align: margin-left;
		font-size: 6vw;
		font-weight: 700;
	}

	.epidmc_name {
		position: relative;
		margin-left: 6vw;
		top: 4vw;
		overflow: visible;
		width: 21vw;
		white-space: nowrap;
		text-align: margin-left;
		font-style: normal;
		font-size: 4vw;
		color: rgba(80, 93, 111, 1);
	}

	.data_change {
		position: relative;
		margin: 0 2.8vw;
		top: 0.6vw;
		overflow: visible;
		width: fit-content;
		white-space: nowrap;
		text-align: margin-left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 4vw;
	}

	.World_Update_Class {
		position: relative;
		margin-left: 7vw;
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

	.world_list {
		display: flex;
		flex-wrap: wrap;
		box-pack: center;
		justify-content: center;
		box-align: center;
		align-items: center;
		padding-top: 4vw;
		padding-bottom: 2vw;
	}

	.Most_Infected_Class {
		position: relative;
		margin-left: 7vw;
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

	#search_div {
		display: flex;
		position: fixed;
		top: var(--status-bar-height);
		margin: 0 7vw;
		padding: 5vw 0;
		width: 86vw;
		border-bottom: 1px solid #e8e8e8;
		background-color: #fff;
		z-index: 999;
	}

	.search_box_Class {
		opacity: 0.5;
	}

	.search_box {
		position: relative;
		display: flex;
		overflow: visible;
		width: 100vw;
		height: 10vw;
		border-radius: 3vw;
		background-color: rgb(237, 240, 244);
	}

	.Search_Country_Class {
		opacity: 0.5;
		position: relative;
		margin-left: 3vw;
		margin-top: 2.2vw;
		overflow: visible;
		white-space: nowrap;
		text-align: margin-left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 4vw;
		color: rgba(112, 132, 156, 1.0);
	}

	.search_icon {
		opacity: 0.2;
		position: relative;
		margin-left: 3vw;
		margin-top: 2vw;
		overflow: visible;
	}
	
	#list_id {
		display: flex;
		margin-left: 7vw;
		position: relative;
		width: 86vw;
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
