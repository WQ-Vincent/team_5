<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<div id="search_div">
			<view class="search_box" @click="goSearch">
				<div class="icon_text">
					<div class="search_icon">
						<image style="width: 6vw;height: 6vw;" src="/static/icon/search.png"></image>
					</div>
					<p class="Search_Country_Class">搜索国家</p>
				</div>
			</view>
		</div>
		<div id="ID1" class="ID1_Class">
			<div id="world_data">
				<div class="World_Update_Class"> <span>全球疫情</span> </div>
				<div class="world_list">
					<Globalblock
						v-for="(item,index) of list"
						v-bind:style="{background: 'linear-gradient(' + item.lineargradientone + ', #fff)'}"
						:key = "index"
						:attribute = "item.attribute"
						:totalnumber = "item.totalnumber"
						:addnumber = "item.addnumber"
						:textcolor = "item.textcolor"
						:bgcolor = "item.bgcolor"
					></Globalblock>
				</div>
			</div>
			<div id="most_infected" style="padding-top: 2vw;">
				<div class="Most_Infected_Class"> <span>各国统计</span> </div>
				<div style="padding-top: 4vw;">
					<div id="list_id">
						<div class="country" style="width: 30vw;border-top-left-radius: 1.8vw;border-bottom-left-radius: 1.8vw;"><span>国家</span></div>
						<div class="country" style="width: 14vw;"><span>新增</span></div>
						<div class="country" style="width: 22vw;"><span>累计</span></div>
						<div class="country" style="width: 20vw;"><span>治愈</span></div>
						<div class="country" style="width: 14vw;border-top-right-radius: 1.8vw;border-bottom-right-radius: 1.8vw;"><span>死亡</span></div>
					</div>
					<CountryData ref="child1"></CountryData>
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
			return{
				list:[
				{attribute:'累计确诊',
				totalnumber:'55832242',
				addnumber:'+580451',
				lineargradientone:'#E8DFFF',
				textcolor:'rgb(123,70,242)',
				bgcolor:'rgba(123,70,242,0.1)'},
				{attribute:'累计死亡',
				totalnumber:'1337965',
				addnumber:'+6880',
				lineargradientone:'#FFD3E6',
				textcolor:'rgb(231,71,130)',
				bgcolor:'rgba(231,71,130,0.1)'},
				{attribute:'累计治愈',
				totalnumber:'38564110',
				addnumber:'+257218',
				lineargradientone:'#D6FFDC',
				textcolor:'rgb(40,194,133)',
				bgcolor:'rgba(40,194,133,0.1)'},
				{attribute:'现有确诊',
				totalnumber:'15930167',
				addnumber:'+644',
				lineargradientone:'#FFF2D5',
				textcolor:'rgb(255,199,66)',
				bgcolor:'rgba(255,199,66,0.1)'},]	
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
			},
			goSearch() {
				uni.navigateTo({
					url: 'search'
				});
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

	.icon_text {
		position: relative;
		display: flex;
		width: fit-content;
		left: 50%;
		transform: translateX(-50%);
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
		margin-left: 2vw;
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
		margin-top: 2vw;
		overflow: visible;
	}

	#world_data {
		padding-top: 25vw;
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
