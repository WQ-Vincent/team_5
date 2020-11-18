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
					
					<!-- littleblock模板 -->
					<div class="recentNumber">					
						<Littleblock
							v-for="(item,index) of list"
							v-bind:style="{background: 'linear-gradient(' + item.lineargradientone + ', ' + item.lineargradienttwo + ')'}"
							:key = "index"
							:addnumber = "item.addnumber"
							:totalnumber = "item.totalnumber"
						 	:attribute = "item.attribute"
						 	:textcolor = "item.textcolor"
						></Littleblock>
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
	import Littleblock from './littleblock.vue'
	import AreaData from './data.vue'
	export default {
		data() {
			return {
				list:[{addnumber:'+14',
					totalnumber:'92490',
					attribute:'累计确诊',
					lineargradientone:'#fde1cf',
					lineargradienttwo:'#fdfdfd',
					textcolor:'#be7761'},
					{addnumber:'+54',
					totalnumber:'87208',
					attribute:'累计治愈',
					lineargradientone:'#d3f8e5',
					lineargradienttwo:'#fdfdfd',
					textcolor:'#178b50'},
					{addnumber:'+0',
					totalnumber:'4749',
					attribute:'累计死亡',
					lineargradientone:'#ffc9ca',
					lineargradienttwo:'#fdfdfd',
					textcolor:'#b55355'},
					{addnumber:'+50',
					totalnumber:'602',
					attribute:'现有确诊',
					lineargradientone:'#f1e4fd',
					lineargradienttwo:'#fdfdfd',
					textcolor:'#a65dad'},
					{addnumber:'+5',
					totalnumber:'456',
					attribute:'无症状感染者',
					lineargradientone:'#f6f8c6',
					lineargradienttwo:'#fdfdfd',
					textcolor:'#93994d'},
					{addnumber:'+7',
					totalnumber:'3723',
					attribute:'境外输入',
					lineargradientone:'#cbe0fa',
					lineargradienttwo:'#fdfdfd',
					textcolor:'#546fab'},]
			}
		},
		components:{
			AreaData,
			Littleblock
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
	dd,	dl,dt,h1,h2,h3,h4,
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
