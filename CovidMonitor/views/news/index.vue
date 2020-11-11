<template>
	<view class="container">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<div class="main">
			<div class="marquee-warp filterGray show">
					<div class="marquee">
						<div id="marquee-tab" class="marquee-tab">
							<ul id="marbox" class="set-box">
								<li class="li out"><a>上海报告新增本土确诊病例1例</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="knowledgeWraper filterGray">
					<p class="p-fanghu">新冠肺炎预防须知</p>
					<div class="fanghu_card">
						<div class="fanghu_title_warp"><img src="https://puui.qpic.cn/vupload/0/1580113954413_67dj6qw9r34.png/0" class="fanghu_icon">
							<div class="fanghu_title">个人清洁</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text">经常保持双手清洁，尤其在触摸口、鼻或眼之前。</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text">经常用洗手液和清水清洗双手，搓手最少20秒，并用纸巾擦干。</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text"> 打喷嚏或咳嗽时应用纸巾掩盖口鼻，把用过的纸巾弃置于有盖垃圾箱内，然后彻底清洁双手。 </div>
						</div>
						<div class="fanghu_title_warp"><img src="https://puui.qpic.cn/vupload/0/1580113954413_b3dr1w759hr.png/0" class="fanghu_icon">
							<div class="fanghu_title">尽量避免</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text">减少前往人流密集的场所。如不可避免，应戴上外科口罩。</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text">避免到访医院。如有必要到访医院，应佩戴外科口罩及时刻注重个人和手部卫生。</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text">避免接触动物（包括野味）、禽鸟或其粪便；避免到海鲜、活禽市场或农场。</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text">切勿进食野味及切勿光顾有提供野味的餐馆。</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text"> 注意食物安全和卫生，避免进食或饮用生或未熟透的动物产品，包括奶类、蛋类和肉类。 </div>
						</div>
						<div class="fanghu_title_warp"><img src="https://puui.qpic.cn/vupload/0/1580113954413_qs8jz3v8m7.png/0" class="fanghu_icon">
							<div class="fanghu_title">尽快就诊</div>
						</div>
						<div class="fanghu_item">
							<div class="fanghu_item_point"></div>
							<div class="fanghu_item_text">如有身体不适，特别是有发烧或咳嗽，应戴上外科口罩并尽快就诊。</div>
						</div>
					</div>
					<div class="tailWraper filterGray pdBottom">
						<div class="tail">
							<div class="open-or-download"><span >前往国家卫健委了解更多疫情动态</span></div>					
						</div>
					</div>
				</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style>
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
	.main{
		width: 100vw;
		margin: 0 auto;
		position: relative;
		padding-top: 11.733vw;
		background-color: #fff;
		min-height: 100%;
		transform-origin: center top;
	}
	.marquee-warp,
	.marquee {
		border-radius: 3.2vw;
		position: relative;
	}
	
	.marquee-warp {
		background-color: #fff;
		padding-top: 1px;
	}
	.marquee {
		width: 90.133vw;
		height: 10.133vw;
		margin: 4vw auto 0;
		padding: 0 5.333vw;
		box-sizing: border-box;
		background: url(https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/marquee-bg-none.png) #f8f8f8 50% no-repeat;
		background-size: 90.133vw 10.133vw;
		font-size: 4vw;
		border-radius: 1.6vw;
		position: relative;
	}
	
	.marquee .marquee-tab {
		position: absolute;
		color: #737373;
		left: 9.733vw;
		top: 50%;
		transform: translateY(-50%);
		width: 76vw;
		font-size: 3.2vw;
		overflow: hidden;
		font-weight: 400;
		height: 4.667vw;
	}
	
	.marquee .set-box {
		position: absolute;
		overflow: hidden;
	}
	
	.marquee .marquee-tab .li.out {
		background: none;
	}
	
	.marquee .marquee-tab .li {
		height: 4.667vw;
		width: 76vw;
		line-height: 4.667vw;
		overflow: hidden;
		background: url(https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/forward.png) 100% no-repeat;
		background-size: 1.867vw 2.667vw;
	}
	
	.marquee .marquee-tab .li a {
		color: #222;
		text-decoration: none;
		display: block;
	}
	.p-fanghu {
	    color: #222;
	    font-size: 4.8vw;
	    margin: 5.667vw 0 0;
	    text-align: center;
	    font-weight: 600;
	}
	.fanghu_card {
	    margin: 5.333vw 5.333vw 0;
	    border-radius: 1.6vw;
	    background: #f8f8f8;
	    padding: 1.333vw 4vw 5.333vw 5.333vw;
	}
	.fanghu_title_warp {
	    display: flex;
	    justify-content: flex-start;
	    align-items: center;
	    padding-top: 4.267vw;
	    padding-bottom: 2.133vw;
	}
	.fanghu_icon {
	    width: 4.267vw;
	    height: 4.267vw;
	}
	.fanghu_title{
	    font-size: 3.733vw;
	    font-weight: 500;
	    margin-left: 2.667vw;
	}
	.fanghu_item {
	    margin-top: 2.133vw;
	    position: relative;
	}
	.fanghu_item_point {
	    width: 1.067vw;
	    height: 1.067vw;
	    background: #005dff;
	    border-radius: .533vw;
	    margin-top: 1.867vw;
	    margin-right: 2.133vw;
	    position: absolute;
	}
	.fanghu_item_text {
	    font-weight: 400;
	    font-size: 3.2vw;
	    line-height: 4.267vw;
	    color: #222;
	    margin-left: 3.2vw;
	}
	.tailWraper.pdBottom {
	    padding-bottom: 26.667vw;
	}
	.tailWraper {
	    padding-top: 5.333vw;
	    padding-bottom: 9.6vw;
	    overflow: hidden;
	}
	.tail {
	    height: 18.667vw;
	    position: relative;
	}
	.tail .open-or-download {
	    position: absolute;
	    left: 50%;
	    transform: translate(-50%);
	    top: 5.333vw;
	    width: 89.333vw;
	    height: 11.2vw;
	    background: #005dff;
	    border-radius: 11.2vw;
	    line-height: 11.2vw;
	    color: #fff;
	    font-size: 3.733vw;
	    text-align: center;
	    font-weight: 500;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}
	.tail .open-or-download .logo {
	    width: 17.067vw;
	    height: 3.733vw;
	    margin-left: 1.6vw;
	}
	.tail .open-or-download .sharp {
	    width: 3.2vw;
	    height: 2.4vw;
	    margin-left: 2.133vw;
	    margin-top: 1px;
	}
</style>

