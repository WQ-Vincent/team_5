<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<div id="header">
			<div class="World_Update_Class"> <span>国内疫情</span> </div>
			<span class="search_box" @click="goSearch">
				<image style="width: 7vw;height: 7vw;" src="/static/icon/search.png"></image>
			</span>
		</div>
		<div class="main">
			<div class="tabGlobal">
				<div class="topdataWrap filterGray">
					<div class="timeNum">
						<p class="d"> 数据更新于 <span>{{time}}</span></p>
					</div>

					<!-- littleblock模板 -->
					<div class="recentNumber">
						<Littleblock v-for="(item,index) of list" 
						 :key="index" 
						 :addnumber="item.addnumber" 
						 :totalnumber="item.totalnumber" 
						 :attribute="item.attribute">
						 </Littleblock>
					</div>
				</div>
			</div>
			<div class="chinaListWraper filterGray">
				<div class="up-tips tips-yiqing">
					<image style="width: 6vw;height: 6vw;padding-right: 2vw;" src="/static/icon/rank.png"></image>
					<span class="title">各地区统计</span>
				</div>
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
				time:'2020-11-09 21:59:46',
				name: ['现有确诊', '无症状感染者', '累计确诊', '境外输入','累计治愈','累计死亡'],
				list: []
			}
		},
		components: {
			AreaData,
			Littleblock
		},
		created(){
			this.loadData()
		},
		methods: {
			readfile() {
				const self = this;
				// 请求本地系统文件对象 plus.io.PRIVATE_WWW：应用运行资源目录常量
				plus.io.requestFileSystem(plus.io.PRIVATE_WWW, function(fobject) {
					self.list = [];
					var directoryReader = fobject.root.createReader();
					directoryReader.readEntries(function(entries) {
						var sta;
						for (var i = 0; i < entries.length; i++) {
							if (entries[i].name == "static") {
								sta = i;
								break;
							}
						}
						var fso = entries[sta].createReader();
						fso.readEntries(function(cs) {
							cs[0].getFile('covid_sum.csv', {
								create: false
							}, function(fileEntry) {
								fileEntry.file(function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.readAsText(file, 'utf-8');
									fileReader.onloadend = function(evt) {
										self.str = evt.target.result;
										var strl = self.str.split("\r\n");
										strl.pop();
										for (var i = 0; i < 6; i++) {
											self.list.push({
												attribute: self.name[i],
												totalnumber: strl[i],
												addnumber: '+123'
											});
										}
										self.time=strl[strl.length-1]
									}
								});
							}, function(e) {
								console.log("Read file failed: " + e.message);
							});
						});
					});
				}, function(e) {
					console.log("Read directory failed: " + e.message);
				});
			},
			loadData(){
				this.list=[{
						addnumber: '+14',
						totalnumber: '92490',
						attribute: '累计确诊'
					},
					{
						addnumber: '+54',
						totalnumber: '87208',
						attribute: '累计治愈'
					},
					{
						addnumber: '+0',
						totalnumber: '4749',
						attribute: '累计死亡'
					},
					{
						addnumber: '+50',
						totalnumber: '602',
						attribute: '现有确诊'
					},
					{
						addnumber: '+5',
						totalnumber: '456',
						attribute: '无症状感染者'
					},
					{
						addnumber: '+7',
						totalnumber: '3723',
						attribute: '境外输入'
					}]
					this.readfile()
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
	
	.icbar:nth-child(3) .add,.icbar:nth-child(3) .number{
		color: #be7761;
	}
	
	.icbar:nth-child(5) .add,.icbar:nth-child(5) .number{
		color: #178b50;
	}
	
	.icbar:nth-child(6) .add,.icbar:nth-child(6) .number{
		color: #b55355;
	}
	
	.icbar:nth-child(1) .add,.icbar:nth-child(1) .number{
		color: #a65dad;
	}
	
	.icbar:nth-child(2) .add,.icbar:nth-child(2) .number{
		color: #93994d;
	}
	
	.icbar:nth-child(4) .add,.icbar:nth-child(4) .number{
		color: #546fab;
	}
	
	.icbar:nth-child(3){
		background: linear-gradient(#fde1cf,#fdfdfd);
	}
	
	.icbar:nth-child(5){
		background: linear-gradient(#d3f8e5,#fdfdfd);
	}
	
	.icbar:nth-child(6){
		background: linear-gradient(#ffc9ca,#fdfdfd);
	}
	
	.icbar:nth-child(1){
		background: linear-gradient(#f1e4fd,#fdfdfd);
	}
	
	.icbar:nth-child(2){
		background: linear-gradient(#f6f8c6,#fdfdfd);
	}
	
	.icbar:nth-child(4){
		background: linear-gradient(#cbe0fa,#fdfdfd);
	}
	
	.icbar:first-child,.icbar:nth-child(4){
		border-radius: 2vw 0 0 0;
	}
	
	.icbar:nth-child(3),.icbar:nth-child(6){
		border-radius: 0 2vw 0 0;
	}

	#header {
		display: flex;
		position: fixed;
		top: var(--status-bar-height);
		margin: 0 5vw;
		padding: 5vw 0 3vw 0;
		width: 90vw;
		border-bottom: 1px solid #e8e8e8;
		background-color: #fff;
		z-index: 999;
	}

	.search_box {
		position: absolute;
		right: 3vw;
		height: 7vw;
		bottom: 3.5vw;
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

	.World_Update_Class {
		overflow: visible;
		white-space: nowrap;
		text-align: left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 6.0vw;
		padding-right: 5.333vw;
		color: rgba(36, 42, 64, 1);
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

	.chinaListWraper .up-tips {
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
		justify-content: space-between;
		align-items: center;
	}

	.up-tips .title {
		display: inline-block;
		position: relative;
		font-size: 5.0vw;
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

	.chinaListWraper table td:first-child,
	.chinaListWraper table th:first-child {
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

	.chinaListWraper tbody td p,
	.chinaListWraper tbody th p {
		line-height: 5.333vw;
		min-height: 5.333vw;
		padding-top: 2.667vw;
	}

	.chinaListWraper tbody td p:last-child,
	.chinaListWraper tbody th p:last-child {
		line-height: 3.2vw;
		height: 3.2vw;
		min-height: auto;
		font-size: 2.667vw;
		padding: 0 0 2.667vw;
		color: #737373;
	}

	.chinaListWraper table td:nth-child(2),
	.chinaListWraper table td:nth-child(3),
	.chinaListWraper table td:last-child,
	.chinaListWraper table th:nth-child(2),
	.chinaListWraper table th:nth-child(3),
	.chinaListWraper table th:last-child {
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
