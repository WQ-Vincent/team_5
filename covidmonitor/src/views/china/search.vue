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
				<input class="Search_text" focus="true" type="text" confirm-type="search" @input="input" placeholder="搜索省份/地区" />
			</div>
		</div>
		<div id="ID1" class="ID1_Class">
			<view class="conclus" v-for="(provin,index) in conclusion" @click="goprov(provin)">
				<li>
					<image style="padding-left:3vw;width: 6vw;height: 6vw;" src="/static/icon/area.png"></image>
					<p style="padding-left:3vw">{{provin}}</p>
				</li>
			</view>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				countrys: ['香港', '上海', '台湾', '四川', '陕西', '福建', '广东', '内蒙古', '天津', '江苏', '湖北', '浙江', '山西', '辽宁', '河南', '云南', '河北',
					'北京', '广西', '甘肃', '湖南', '安徽', '山东', '重庆', '新疆', '黑龙江', '江西', '海南', '吉林', '贵州', '宁夏', '澳门', '青海', '西藏'
				],
				conclusion: []
			}
		},
		created() {

		},
		methods: {
			input(e) {
				var se = e.target.value;
				this.conclusion = [];
				this.flag = true;
				if (se == '') return;
				for (var i = 0; i < this.countrys.length; i++) {
					if (this.countrys[i].indexOf(se) != -1) {
						this.conclusion.push(this.countrys[i]);
					}
				}
			},
			goprov(name) {
				uni.navigateTo({
					url: '/views/china/country?name=' + name
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
		position: fixed;
		top: 25vw;
		margin: 0 7vw;
		width: 86vw;
		background-color: #fff;
		z-index: 999;
	}

	.conclus li {
		display: flex;
		width: 86vw;
		color: #ccced1;
		padding: 3vw 0;
		border-bottom: 1px solid #ececec;
		list-style: none;
		overflow: visible;
		white-space: nowrap;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 4vw;
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
