<template>
	<view class="container">
		<div id="ID1" class="ID1_Class">
			<div id="search_div">
				<div class="search_box">
					<div class="search_icon" ><img style="width: 25px;" src="../../static/icon/search.png"></div>
					<div class="Search_Country_Class"> <span>搜索国家</span> </div>
				</div>
				<div class="search_conditions">
					<div class="filter_major_monotone_Class">
						<img style="width: 26px;" src="../../static/icon/setup.png">
					</div>
				</div>
			</div>
			<div id="world_data">
				<div class="World_Update_Class"> <span>全球疫情</span> </div>
				<div>
					<ul>
						<li>
							<div class="epidmc" style="left: 24px;top: 194px;background-image: linear-gradient(#E8DFFF,#fff);">
								<div class="epidmc_name"> <span>累计</span> </div>
								<div class="epidmc_data" style="color: rgb(123,70,242);"> <span>50646963</span> </div>
								<div class="epidmc_add" style="background-color: rgba(123,70,242,0.1);">
									<div class="data_change" style="color: rgb(123,70,242);"> <span>+580451</span> </div>
								</div>
							</div>																
						</li>
						<li>
							<div class="epidmc" style="left: 24px;top: 347px;background-image: linear-gradient(#D6FFDC,#fff);">
								<div class="epidmc_name"> <span>治愈</span> </div>
								<div class="epidmc_data" style="color: rgb(40,194,133);"> <span>35432796</span> </div>
								<div class="epidmc_add" style="background-color: rgba(40,194,133,0.1);">
									<div class="data_change" style="color: rgb(40,194,133);"> <span>+257218</span> </div>
								</div>
							</div>		
						</li>
						<li>
							<div class="epidmc" style="left: 198px;top: 347px;background-image: linear-gradient(#FFF2D5,#fff);">
								<div class="epidmc_name"> <span>现有</span> </div>
								<div class="epidmc_add" style="background-color: rgba(255,199,66,0.1);">
									<div class="data_change" style="color: rgb(255,199,66);"> <span>+644</span> </div>
								</div>
								<div class="epidmc_data" style="color: rgb(255,199,66);"> <span>46058</span> </div>
							</div>					
						</li>
						<li>
							<div class="epidmc" style="left: 198px;top: 194px;background-image: linear-gradient(#FFD3E6,#fff);">
								<div class="epidmc_name"> <span>死亡</span> </div>
								<div class="epidmc_data" style="color: rgb(231,71,130);"> <span>1257384</span> </div>
								<div class="epidmc_add" style="background-color: rgba(231,71,130,0.1);">
									<div class="data_change" style="color: rgb(231,71,130);"> <span>+6880</span> </div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div id="most_infected">
				<div class="Most_Infected_Class"> <span>各国统计</span> </div>
				<div>
					<div id="list_id">
						<div class="country" style="left: 0;width: 36%;border-top-left-radius: 6px;border-bottom-left-radius: 6px;"><span>国家/地区</span></div>
						<div class="country" style="left: 37%;width: 15%;"><span>新增</span></div>
						<div class="country" style="left: 53%;width: 15%;"><span>累计</span></div>
						<div class="country" style="left: 69%;width: 15%;"><span>治愈</span></div>
						<div class="country" style="left: 85%;width: 15%;border-top-right-radius: 6px;border-bottom-right-radius: 6px;"><span>死亡</span></div>
					</div>
					<ul>
						<li>
							<div class="Inf_county" @click="goon" style="left: 23px;top: 570px;">
								<div class="country_name"><span>美国</span></div>
								<div class="newadd_data"> <span>135K</span> </div>
								<div class="infections_data"> <span>13K</span> </div>
								<div class="recoveries_data"> <span>40K</span> </div>
								<div class="deaths_data"> <span>6K</span> </div>
							</div>
						</li>
						<li>
							<div class="Inf_county" style="left: 23px;top: 630px;">
								<div class="country_name"><span>美国</span></div>
								<div class="newadd_data"> <span>60K</span> </div>
								<div class="infections_data"> <span>4K</span> </div>
								<div class="recoveries_data"> <span>24K</span> </div>
								<div class="deaths_data"> <span>4K</span> </div>
							</div>
						</li>
						<li>
							<div class="Inf_county" style="left: 23px;top: 690px;">
								<div class="country_name"><span>美国</span></div>
								<div class="newadd_data"> <span>300K</span> </div>
								<div class="infections_data"> <span>9K</span> </div>
								<div class="recoveries_data"> <span>18K</span> </div>
								<div class="deaths_data"> <span>8K</span> </div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
export default {
	name:"Global",
	methods:{
		goon(){
			uni.navigateTo({
				url:"../china/index",
			});
		}
	}
}

</script>

<style>
	.mediaViewInfo {
	}
	:root {
	}
	* {
		margin: 0;
		padding: 0;
	}
	.ID1_Class {
		position: absolute;
		box-sizing: border-box;
		transform: translateX(-50%);
		left: 50%;
		background: #E5E5E5;
		width: 375px;
		height: 812px;
		background-color: rgba(255,255,255,1);
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
	.Inf_county_Class {
		opacity: 0.33;
	}
	.Inf_county {
		position: absolute;
		overflow: visible;
		width: 330px;
		height: 55px;
		border-bottom: 1px solid #e8e8e8;
	}
	.epidmc_Class {
		opacity: 0.1;
	}
	.epidmc {
		position: absolute;
		overflow: visible;
		width: 155px;
		height: 137px;
		border-radius: 20px;
		z-index: -1;
	}
	.epidmc_add {
		position: absolute;
		overflow: visible;
		width: fit-content;
		height: 36px;
		right: 10px;
		top: 70px;
		border-radius: 18px;
	}
	.epidmc_data {
		position: absolute;
		left: 21px;
		top: 40px;
		overflow: visible;
		width: 85px;
		white-space: nowrap;
		text-align: left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
	}
	.epidmc_name {
		position: absolute;
		left: 21px;
		top: 12px;
		overflow: visible;
		width: 71px;
		white-space: nowrap;
		text-align: left;
		font-style: normal;
		font-weight: bold;
		font-size: 13px;
		color: rgba(80,93,111,1);
	}
	.recoveries {
		position: absolute;
		left: 45px;
		top: 432px;
		overflow: visible;
		width: 71px;
		white-space: nowrap;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		color: rgba(80,93,111,1);
		text-align: center;
	}
	.criticals {
		position: absolute;
		left: 219px;
		top: 432px;
		overflow: visible;
		width: 53px;
		white-space: nowrap;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		color: rgba(80,93,111,1);
		text-align: center;
	}
	.deaths {
		position: absolute;
		left: 219px;
		top: 293px;
		overflow: visible;
		width: 47px;
		white-space: nowrap;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		color: rgba(80,93,111,1);
		text-align: center;
	}
	.data_change {
		position: relative;
		margin: 0 10px;
		top: 8px;
		overflow: visible;
	    width: fit-content;
	    white-space: nowrap;
	    text-align: left;
	    font-family: SF Pro Display;
	    font-style: normal;
	    font-weight: normal;
	    font-size: 14px;
	}
	.World_Update_Class {
		position: absolute;
		left: 24px;
		top: 143px;
		overflow: visible;
		width: 174px;
		white-space: nowrap;
		text-align: left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 25px;
		color: rgba(36,42,64,1);
	}
	.Most_Infected_Class {
		position: absolute;
		left: 24px;
		top: 490px;
		overflow: visible;
		width: 173px;
		white-space: nowrap;
		text-align: left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 25px;
		color: rgba(36,42,64,1);
	}
	.search_box_Class {
		opacity: 0.5;
	}
	.search_box {
		position:absolute;
		overflow: visible;
		width: 265px;
		height: 50px;
		left: 24px;
		top: 73px;
		border-radius: 10px;
		background-color: rgb(237,240,244);
	}
	.search_conditions {
		position: absolute;
		overflow: visible;
		width: 50px;
		height: 50px;
		left: 304px;
		top: 73px;
		border-radius: 10px;
		background-color: rgb(80,93,111);
	}
	.Search_Country_Class {
		opacity: 0.2;
		position: absolute;
		left: 46px;
		top: 17px;
		overflow: visible;
		width: 82px;
		white-space: nowrap;
		text-align: left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 13px;
		color: rgba(80,93,111,1);
	}
	.filter_major_monotone_Class {
		position: absolute;
		width: 20px;
		height: 20px;
		left: 13px;
		top: 13px;
		overflow: visible;
	}
	.conditions_icon {
		overflow: visible;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 20px;
		height: 20px;
		transform: matrix(1, 0, 0, 1, 0, 0);
	}
	.search_icon {
		opacity: 0.2;
		position: absolute;
		width: 18px;
		height: 18px;
		left: 15px;
		top: 14px;
		overflow: visible;
	}
	.country_name{
		position: absolute;
		left: 0;
		top: 15px;
		overflow: visible;
		width: 36%;
		height: 40px;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-size: 15px;
		color: rgb(62, 108, 177);
	}
	.newadd_data {
		position: absolute;
		left: 37%;
		top: 15px;
		overflow: visible;
		width: 15%;
		height: 40px;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 15px;
		color: rgb(123,70,242);
	}
	.infections_data {
		position: absolute;
		left: 53%;
		top: 15px;
		overflow: visible;
		width: 15%;
		height: 40px;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 15px;
		color: rgb(255,191,19);
	}
	.recoveries_data {
		position: absolute;
		left: 69%;
		top: 15px;
		overflow: visible;
		width: 15%;
		height: 40px;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 15px;
		color: rgb(59,183,76);
	}
	.deaths_data {
		position: absolute;
		left: 85%;
		top: 15px;
		overflow: visible;
		width: 15%;
		height: 40px;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 15px;
		color: rgb(246,104,166);
	}
	#list_id{
	    top: 535px;
	    left: 24px;
	    position: absolute;
	    width: 330px;
	}
	.country{
    position: absolute;
    font-size: 13px;
    width: -webkit-fit-content;
    height: fit-content;
    padding: 8px 0;
    background-color: #eaf3f9;
	text-align: center;
	}
</style>
