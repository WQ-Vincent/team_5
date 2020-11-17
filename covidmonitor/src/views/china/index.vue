<template>
	<view class="container">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<!--
		<div id="search_div">
			<div class="search_box">
				<div class="search_icon"><image style="width: 6vw;height: 6vw;" src="/static/icon/search.png"></image></div>
				<input class="Search_Country_Class" placeholder="搜索省份/地区" />
			</div>
		</div>-->
		<div class="main">
			<div class="tabGlobal">
				<div class="topdataWrap filterGray">
					<div class="World_Update_Class"> <span>国内疫情</span> </div>
					<div class="timeNum">
						<p class="d"> 统计截至 <span>2020-11-09 21:59:46</span><em class=""> 更新于<span>45分钟</span>前</em></p>
					</div>
					<div class="recentNumber">
						<div class="icbar confirm">
							<div class="add"> 较上日<span>+50</span></div>
							<div class="number">92251</div>
							<div class="text">累计确诊</div>
						</div>
						<div class="icbar heal">
							<div class="add"> 较上日<span>+25</span></div>
							<div class="number">86901</div>
							<div class="text">累计治愈</div>
						</div>
						<div class="icbar dead">
							<div class="add"> 较上日<span>0</span></div>
							<div class="number">4748</div>
							<div class="text">累计死亡</div>
						</div>
						<div class="icbar nowConfirm">
							<div class="add"> 较上日<span>+31</span></div>
							<div class="number">602</div>
							<div class="text"><span>现有确诊</span></div>
						</div>
						<div class="icbar nowSevere">
							<div class="add"> 较上日<span>+9</span></div>
							<div class="number">804</div>
							<div class="text">无症状感染者</div>
						</div>
						<div class="icbar import">
							<div class="add"> 较上日<span>+32</span></div>
							<div class="number">3603</div>
							<div class="text">境外输入</div>
						</div>
					</div>
				</div>
			</div>
			<div class="chinaListWraper filterGray">
				<div class="up-tips tips-yiqing"><span class="title">各地区统计</span></div>
				<div id="listWraper" class="listWraper">
					<table>
						<thead>
							<tr>
								<th class="area"><span>地区</span></th>
								<th>新增</th>
								<th>现有</th>
								<th>累计</th>
								<th>治愈</th>
								<th>死亡</th>
							</tr>
						</thead>
					</table>
					<AreaData></AreaData>
				</div>
				<div class="dataTips ac-dataqs moveNavLast"><span>数据来源：各地卫健委每日公开数据</span></div>
			</div>
		</div>
	</view>
</template>

<script>
	import AreaData from './data.vue'
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		components:{
			AreaData
		},
		methods: {

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
	 
	 #search_div{
	 	display: flex;
	 	position: fixed;
		top: var(--status-bar-height);
	 	width: 100vw;
		padding: 5vw 0;
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
		margin: 0 5.3vw;;
	 	width: 89.4vw;
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
	 
	.main {
		width: 100vw;
		margin: 0 auto;
		position: relative;
		padding-top: 12vw;
		background-color: #fff;
		min-height: 100%;
		transform-origin: center top;
	}
	.World_Update_Class {
		overflow: visible;
		white-space: nowrap;
		text-align: left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 6.0vw;
		padding: 0 5.333vw;
		color: rgba(36,42,64,1);
	}

	.timeNum {
		padding: 4vw 5.333vw;
		background-color: #fff;
		border-radius: 3.2vw;
		line-height: 3.733vw;
		font-size: 3.2vw;
		color: #737373;
		position: relative;
	}

	.timeNum .d span {
		font-weight: 500;
		color: #222;
	}

	.timeNum .d em {
		font-style: normal;
	}

	.timeNum .d span {
		font-weight: 500;
		color: #222;
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

	.recentNumber .icbar:first-child,.icbar:nth-child(4) {
		border-radius: 2.0vw 0 0 0;
	}

	.recentNumber .icbar.confirm {
		background-image: linear-gradient( #fde1cf, #fdfdfd);
	}

	.recentNumber .icbar {
		width: 29.6vw;
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
		background-image: linear-gradient( #d3f8e5, #fdfdfd);
	}

	.recentNumber .icbar.heal .add em,
	.recentNumber .icbar.heal .add span,
	.recentNumber .icbar.heal .number {
		color: #178b50;
	}

	.recentNumber .icbar:nth-child(3),.icbar:nth-child(6) {
		border-radius: 0 2.0vw 0 0;
	}

	.recentNumber .icbar:last-child,
	.recentNumber .icbar:nth-child(3) {
		margin-right: 0;
	}

	.recentNumber .icbar.dead {
		background-image: linear-gradient( #ffc9ca, #fdfdfd);
	}
	.recentNumber .icbar.dead .add em,
	.recentNumber .icbar.dead .add span,
	.recentNumber .icbar.dead .number {
		color: #b55355;
	}

	.recentNumber .icbar.nowConfirm {
		background-image: linear-gradient( #f1e4fd, #fdfdfd);
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
		background-image: linear-gradient( #f6f8c6, #fdfdfd);
	}

	.recentNumber .icbar.nowSevere .add em,
	.recentNumber .icbar.nowSevere .add span,
	.recentNumber .icbar.nowSevere .number {
		color: #93994d;
	}

	.recentNumber .icbar.import {
		background-image: linear-gradient( #cbe0fa, #fdfdfd);
	}

	.recentNumber .icbar.import .add em,
	.recentNumber .icbar.import .add span,
	.recentNumber .icbar.import .number {
		color: #546fab;
	}

	.chianMapWraper {
		position: relative;
		margin: 0 0 2.667vw;
	}
	.chinaListWraper .up-tips{
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
	    color: rgba(36,42,64,1);
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
	.chinaListWraper .listNav {
	    position: fixed;
	    left: 0;
	    top: 11.2vw;
	    right: 0;
	    background-color: #f5f5f5;
	    z-index: 8;
	}
	.chinaListWraper .listWraper {
	    margin: 5vw 5.333vw 0;
	}
	.chinaListWraper table {
    border: 0;
    padding: 0;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
	}
	.chinaListWraper tbody {
	    line-height: 10.667vw;
	    height: 10.667vw;
	    font-size: 3.2vw;
	}
	.chinaListWraper thead {
	    border-collapse: collapse;
	    border-spacing: 0;
	}
	.chinaListWraper thead th {
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
	.chinaListWraper table td:first-child, .chinaListWraper table th:first-child {
	    width: 20vw;
	}
	.chinaListWraper table th:first-child {
	    border-top-left-radius: 1.5vw;
		border-bottom-left-radius: 1.5vw;
	}
	.chinaListWraper table th:last-child {
	    border-top-right-radius: 1.5vw;
		border-bottom-right-radius: 1.5vw;
	}
	.chinaListWraper tbody .areaBox {
	    font-size: 3.733vw;
		border-bottom: 1px solid #f0f0f0;
	}
	.chinaListWraper tbody td p, .chinaListWraper tbody th p {
	    line-height: 5.333vw;
	    min-height: 5.333vw;
	    padding-top: 2.667vw;
	}
	.chinaListWraper tbody td p:last-child, .chinaListWraper tbody th p:last-child {
	    line-height: 3.2vw;
	    height: 3.2vw;
	    min-height: auto;
	    font-size: 2.667vw;
	    padding: 0 0 2.667vw;
	    color: #737373;
	}
	.chinaListWraper table td:nth-child(2), .chinaListWraper table td:nth-child(3),.chinaListWraper table td:last-child, .chinaListWraper table th:nth-child(2), .chinaListWraper table th:nth-child(3),.chinaListWraper table th:last-child {
	    width: 13vw;
	}
	.chinaListWraper tbody td {
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
