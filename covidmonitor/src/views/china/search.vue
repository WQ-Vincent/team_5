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
				<input class="Search_text" focus="true" type="text" confirm-type="search" @input="input" @confirm="confirm"
				 placeholder="搜索省份/地区" />
			</div>
		</div>
		<div id="ID1" class="ID1_Class">
		</div>
	</view>
</template>

<script>
	import CountryData from './data.vue'
	export default {
		data() {
			return {
				countrys: [],
				result: []
			}
		},
		created() {
			var cou=CountryData.countrys;
			for(var i=0;i<cou.length;i++){
				this.countrys.push(cou[i].name);
			}
		},
		components:{
			CountryData
		},
		methods: {
			input(e) {
				var se = e.target.value;
				console.log("输入中");
				console.log(this.countrys);
			},
			confirm(e) {
				uni.navigateTo({
					url: '/views/china/country?name=' + e.target.value
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

	.Search_text {
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
</style>
