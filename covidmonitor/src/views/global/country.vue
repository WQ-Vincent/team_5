<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<div class="header">
			<view class="goback" @click="goback()">
				<image src="/static/icon/back.png" style="width: 6vw;height: 6vw;margin: 3vw 2vw;"></image>
			</view>
			<div class="country_name"> <span>{{ctName}}</span> </div>
		</div>
		<div class="main">
			<div>
				<div data-v-5d650fc0="" class="recentNumber add">
					<div data-v-5d650fc0="" class="icbar nowConfirm">
						<p data-v-5d650fc0="" class="add"> 较上日<span data-v-5d650fc0="" class="addnum">+87156</span></p>
						<div data-v-5d650fc0="" class="number"> 3712054 </div>
						<div data-v-5d650fc0="" class="text">现有确诊</div>
					</div>
					<div data-v-5d650fc0="" class="icbar confirm">
						<p data-v-5d650fc0="" class="add"> 较上日<span data-v-5d650fc0="" class="addnum">+135574</span></p>
						<div data-v-5d650fc0="" class="number"> 10559184 </div>
						<div data-v-5d650fc0="" class="text">累计确诊</div>
					</div>
					<div data-v-5d650fc0="" class="icbar heal">
						<p data-v-5d650fc0="" class="add"> 较上日<span data-v-5d650fc0="" class="addnum">+48721</span></p>
						<div data-v-5d650fc0="" class="number"> 6601331 </div>
						<div data-v-5d650fc0="" class="text">累计治愈</div>
					</div>
					<div data-v-5d650fc0="" class="icbar dead">
						<p data-v-5d650fc0="" class="add"> 较上日<span data-v-5d650fc0="" class="addnum">+1351</span></p>
						<div data-v-5d650fc0="" class="number"> 245799 </div>
						<div data-v-5d650fc0="" class="text">累计死亡</div>
					</div>
				</div>
			</div>
			<div class="countryListWraper filterGray">
				<div class="up-tips tips-yiqing"><span class="title">各地区统计</span></div>
				<div id="listWraper" class="listWraper">
					<table>
						<thead>
							<tr>
								<th class="area"><span>地区</span></th>
								<th>累计确诊</th>
								<th>治愈</th>
								<th>死亡</th>
							</tr>
						</thead>
					</table>
					<AreaData></AreaData>
				</div>
				<div class="dataTips ac-dataqs moveNavLast"><span>数据来源：WHO</span></div>
			</div>
		</div>
	</view>
</template>

<script>
	import AreaData from './countryData.vue'
	export default {
		data() {
			return {
				ctName: ''
			}
		},
		onLoad(option) {
			this.ctName=option.name;
		},
		components: {
			AreaData
		},
		methods: {
			goback() {
				uni.navigateBack({
					animationDuration:1000,
				})
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	dd,
	dl,
	dt,
	h1,
	h2,
	h3,
	h4,
	p {
		margin: 0;
		font-size: 1em;
	}

	.container {
		background-color: rgba(255, 255, 255, 1);
		overflow: hidden;
		margin: 0;
		padding: 0;
		font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
		font-smoothing: antialiased;
		font-size: 4.267vw;
		color: #222;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #fff;
		position: fixed;
		z-index: 999;
	}

	.main {
		width: 100vw;
		margin: 0 auto;
		position: relative;
		padding-top: 25vw;
		background-color: #fff;
		min-height: 100%;
		transform-origin: center top;
	}

	.header {
		position: fixed;
		display: flex;
		top: var(--status-bar-height);
		width: 100vw;
		border-bottom: 1px solid #e6e6e6;
		background-color: #fff;
		z-index: 999;
	}

	.country_name {
		position: relative;
		padding: 2vw 3vw;
		overflow: visible;
		white-space: nowrap;
		text-align: margin-left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 6vw;
		color: rgba(36, 42, 64, 1);
		width: 86vw;
	}

	.recentNumber {
		display: flex;
		flex-wrap: wrap;
		box-pack: center;
		justify-content: center;
		box-align: center;
		align-items: center;
		padding-bottom: 6vw;
	}

	.recentNumber .icbar:first-child,
	.icbar:nth-child(4) {
		border-radius: 2.0vw 0 0 0;
	}

	.recentNumber .icbar.confirm {
		background-image: linear-gradient(#fde1cf, #fdfdfd);
	}

	.recentNumber .icbar {
		width: 44vw;
		margin: 0 .533vw .533vw 0;
		padding: 1.6vw 0 3.2vw;
		position: relative;
		text-align: center;
	}

	.recentNumber .add {
		padding-top: 1.6vw;
		color: #7c7c7c;
		font-size: 2.667vw;
		line-height: 2.667vw;
		height: 2.667vw;
		font-weight: 500;
	}

	.recentNumber .icbar.confirm .add em,
	.recentNumber .icbar.confirm .add span,
	.recentNumber .icbar.confirm .number {
		color: #be7761;
	}

	.recentNumber .icbar .number {
		font-size: 5.867vw;
		line-height: 5.867vw;
		height: 5.867vw;
		font-weight: 600;
		padding-top: 1.6vw;
	}

	.recentNumber .icbar .text {
		font-size: 3.2vw;
		height: 3.2vw;
		line-height: 3.2vw;
		color: #222;
		font-weight: 500;
		margin-top: 1.6vw;
	}

	.recentNumber .icbar.heal {
		background-image: linear-gradient(#d3f8e5, #fdfdfd);
	}

	.recentNumber .icbar.heal .add em,
	.recentNumber .icbar.heal .add span,
	.recentNumber .icbar.heal .number {
		color: #178b50;
	}

	.recentNumber .icbar:nth-child(1),
	.icbar:nth-child(3) {
		border-radius: 2.0vw 0 0 0;
	}

	.recentNumber .icbar:nth-child(2),
	.icbar:nth-child(4) {
		border-radius: 0 2.0vw 0 0;
	}

	.recentNumber .icbar:last-child,
	.recentNumber .icbar:nth-child(3) {
		margin-right: 0;
	}

	.recentNumber .icbar.dead {
		background-image: linear-gradient(#ffc9ca, #fdfdfd);
	}

	.recentNumber .icbar.dead .add em,
	.recentNumber .icbar.dead .add span,
	.recentNumber .icbar.dead .number {
		color: #b55355;
	}

	.recentNumber .icbar.nowConfirm {
		background-image: linear-gradient(#f1e4fd, #fdfdfd);
	}

	.recentNumber .icbar.nowConfirm .add em,
	.recentNumber .icbar.nowConfirm .add span,
	.recentNumber .icbar.nowConfirm .number {
		color: #a65dad;
	}

	.recentNumber .icbar.nowConfirm .text span {
		position: relative;
		margin-right: 3.733vw;
		display: inline-block;
	}

	.recentNumber .icbar.nowSevere {
		background-image: linear-gradient(#f6f8c6, #fdfdfd);
	}

	.recentNumber .icbar.nowSevere .add em,
	.recentNumber .icbar.nowSevere .add span,
	.recentNumber .icbar.nowSevere .number {
		color: #93994d;
	}

	.recentNumber .icbar.import {
		background-image: linear-gradient(#cbe0fa, #fdfdfd);
	}

	.recentNumber .icbar.import .add em,
	.recentNumber .icbar.import .add span,
	.recentNumber .icbar.import .number {
		color: #546fab;
	}

	.countryListWraper .up-tips {
		margin-bottom: 0;
	}

	.tips-yiqing {
		overflow: visible;
		white-space: nowrap;
		text-align: left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 6.0vw;
		padding: 0 5.333vw;
		color: rgba(36, 42, 64, 1);
	}

	.up-tips {
		box-sizing: border-box;
		padding: 0 0 0 5.333vw;
		height: 4.8vw;
		line-height: normal;
		color: #222;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.up-tips .title {
		display: inline-block;
		position: relative;
		font-size: 6.0vw;
	}

	.countryListWraper .listNav {
		position: fixed;
		left: 0;
		top: 11.2vw;
		right: 0;
		background-color: #f5f5f5;
		z-index: 8;
	}

	.countryListWraper .listWraper {
		margin: 5vw 5.333vw 0;
	}

	.countryListWraper table {
		border: 0;
		padding: 0;
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
	}

	.countryListWraper tbody {
		line-height: 10.667vw;
		height: 10.667vw;
		font-size: 3.2vw;
	}

	.countryListWraper thead {
		border-collapse: collapse;
		border-spacing: 0;
	}

	.countryListWraper thead th {
		height: 10.667vw;
		text-align: center;
		font-size: 3.2vw;
		font-weight: 400;
		padding: 0;
		margin: 0;
		border: 0;
		border-right: 1px solid #fff;
		background-color: #eaf3f9;
	}

	.countryListWraper table td:first-child,
	.countryListWraper table th:first-child {
		width: 20vw;
	}

	.countryListWraper table th:first-child {
		border-top-left-radius: 1.5vw;
		border-bottom-left-radius: 1.5vw;
	}

	.countryListWraper tbody .areaBox {
		font-size: 3.733vw;
		border-bottom: 1px solid #f0f0f0;
	}

	.countryListWraper tbody td p,
	.countryListWraper tbody th p {
		line-height: 5.333vw;
		min-height: 5.333vw;
		padding-top: 2.667vw;
	}

	.countryListWraper table td:nth-child(2),
	.countryListWraper table th:nth-child(2) {
		width: 25vw;
	}

	.countryListWraper table td:nth-child(3),
	.countryListWraper table th:nth-child(3) {
		width: 20vw;
	}

	.countryListWraper tbody td {
		text-align: center;
		position: relative;
		border-right: 1px solid #fff;
	}

	.dataTips {
		color: #737373;
		font-size: 3.2vw;
		height: 3.2vw;
		line-height: 3.2vw;
		margin: 5.333vw 0 0 5.333vw;
		position: relative;
	}

	.dataTips span {
		position: relative;
		display: inline-block;
		padding-right: 4vw;
	}

	.dataTips span:before {
		content: ".";
		display: block;
		font-size: 0;
		line-height: 0;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 3.2vw;
		height: 3.2vw;
		background: url(//mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/icon_qs.png);
		background-size: 100% 100%;
	}
</style>
