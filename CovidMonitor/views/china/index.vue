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
								<th>现有确诊</th>
								<th>累计确诊</th>
								<th>治愈</th>
								<th>死亡</th>
							</tr>
						</thead>
					</table>
					<table>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>香港</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">127</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">5380</p>
									<p> 较上日+10 </p>
								</td>
								<td>
									<p class="bold">5146</p>
									<p></p>
								</td>
								<td>
									<p class="bold">107</p>
									<p></p>
								</td>
								
							</tr>
							<!---->
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>上海</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">105</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">1255</p>
									<p> 较上日+14 </p>
								</td>
								<td>
									<p class="bold">1143</p>
									<p></p>
								</td>
								<td>
									<p class="bold">7</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">上海累计报告境外输入确诊病例912例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>新疆</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">59</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">980</p>
									<p> 3天0新增 </p>
								</td>
								<td>
									<p class="bold">918</p>
									<p></p>
								</td>
								<td>
									<p class="bold">3</p>
									<p></p>
								</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>台湾</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">45</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">578</p>
									<p> 较上日+5 </p>
								</td>
								<td>
									<p class="bold">526</p>
									<p></p>
								</td>
								<td>
									<p class="bold">7</p>
									<p></p>
								</td>
								
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>四川</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">43</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">773</p>
									<p> 较上日+4 </p>
								</td>
								<td>
									<p class="bold">727</p>
									<p></p>
								</td>
								<td>
									<p class="bold">3</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">四川累计报告232例境外输入病例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>陕西</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">41</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">478</p>
									<p> 较上日+6 </p>
								</td>
								<td>
									<p class="bold">434</p>
									<p></p>
								</td>
								<td>
									<p class="bold">3</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">陕西累计报告境外输入确诊病例233例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>广东</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">37</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">1949</p>
									<p> 较上日+4 </p>
								</td>
								<td>
									<p class="bold">1904</p>
									<p></p>
								</td>
								<td>
									<p class="bold">8</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">广东省累计报告境外输入病例553例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>福建</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">36</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">456</p>
									<p> 1天0新增 </p>
								</td>
								<td>
									<p class="bold">419</p>
									<p></p>
								</td>
								<td>
									<p class="bold">1</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">福建省累计报告境外输入确诊病例160例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>内蒙古</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">32</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">305</p>
									<p> 较上日+2 </p>
								</td>
								<td>
									<p class="bold">272</p>
									<p></p>
								</td>
								<td>
									<p class="bold">1</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">内蒙古自治区累计报告境外输入确诊病例228例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>天津</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">11</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">277</p>
									<p> 较上日+2 </p>
								</td>
								<td>
									<p class="bold">263</p>
									<p></p>
								</td>
								<td>
									<p class="bold">3</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">天津市累计报告境外输入确诊病例139例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>浙江</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">10</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">1290</p>
									<p> 1天0新增 </p>
								</td>
								<td>
									<p class="bold">1279</p>
									<p></p>
								</td>
								<td>
									<p class="bold">1</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">浙江累计报告境外输入确诊病例71例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>江苏</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">9</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">675</p>
									<p> 较上日+1 </p>
								</td>
								<td>
									<p class="bold">666</p>
									<p></p>
								</td>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">江苏累计报告境外输入确诊病例44例。
								</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>湖北</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">8</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">68147</p>
									<p> 1天0新增 </p>
								</td>
								<td>
									<p class="bold">63627</p>
									<p></p>
								</td>
								<td>
									<p class="bold">4512</p>
									<p></p>
								</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>北京</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">7</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">945</p>
									<p> 4天0新增 </p>
								</td>
								<td>
									<p class="bold">929</p>
									<p></p>
								</td>
								<td>
									<p class="bold">9</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">北京累计报告境外输入确诊病例186例。
									北京卫健委未明确治愈病例和死亡病例的归属分区，北京分区现有确诊数据暂无法获取。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>河南</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">6</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">1286</p>
									<p> 4天0新增 </p>
								</td>
								<td>
									<p class="bold">1258</p>
									<p></p>
								</td>
								<td>
									<p class="bold">22</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">河南累计报告13例境外输入型病例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>河北</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">6</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">373</p>
									<p> 9天0新增 </p>
								</td>
								<td>
									<p class="bold">361</p>
									<p></p>
								</td>
								<td>
									<p class="bold">6</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">河北累计报告境外输入确诊病例34例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>山西</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">5</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">218</p>
									<p> 较上日+1 </p>
								</td>
								<td>
									<p class="bold">213</p>
									<p></p>
								</td>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">山西省累计报告境外输入确诊病例84例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>辽宁</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">4</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">285</p>
									<p> 较上日+1 </p>
								</td>
								<td>
									<p class="bold">279</p>
									<p></p>
								</td>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">辽宁累计报告境外输入病例61例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>云南</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">4</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">214</p>
									<p> 3天0新增 </p>
								</td>
								<td>
									<p class="bold">208</p>
									<p></p>
								</td>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">云南省累计报告境外输入确诊病例40例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>重庆</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">3</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">589</p>
									<p> 17天0新增 </p>
								</td>
								<td>
									<p class="bold">580</p>
									<p></p>
								</td>
								<td>
									<p class="bold">6</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">重庆市累计报告境外输入确诊病例13例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>甘肃</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">180</p>
									<p> 7天0新增 </p>
								</td>
								<td>
									<p class="bold">176</p>
									<p></p>
								</td>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">甘肃累计报告境外输入确诊病例88例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>山东</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">848</p>
									<p> 6天0新增 </p>
								</td>
								<td>
									<p class="bold">839</p>
									<p></p>
								</td>
								<td>
									<p class="bold">7</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">山东累计报告境外输入确诊病例71例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>湖南</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">1</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">1020</p>
									<p> 8天0新增 </p>
								</td>
								<td>
									<p class="bold">1015</p>
									<p></p>
								</td>
								<td>
									<p class="bold">4</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">湖南省累计报告境外输入确诊病例2例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>黑龙江</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">1</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">949</p>
									<p> 13天0新增 </p>
								</td>
								<td>
									<p class="bold">935</p>
									<p></p>
								</td>
								<td>
									<p class="bold">13</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">黑龙江省累计报告境外输入确诊病例388例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>澳门</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">46</p>
									<p> 137天0新增 </p>
								</td>
								<td>
									<p class="bold">46</p>
									<p></p>
								</td>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>吉林</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">157</p>
									<p> 105天0新增 </p>
								</td>
								<td>
									<p class="bold">155</p>
									<p></p>
								</td>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">吉林累计报告境外输入确诊病例19例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>海南</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">171</p>
									<p> 150天0新增 </p>
								</td>
								<td>
									<p class="bold">165</p>
									<p></p>
								</td>
								<td>
									<p class="bold">6</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">海南省累计报告境外输入确诊病例2例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>宁夏</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">75</p>
									<p> 250天0新增 </p>
								</td>
								<td>
									<p class="bold">75</p>
									<p></p>
								</td>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">宁夏累计确诊病例中包含3名境外输入型病例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>安徽</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">991</p>
									<p> 214天0新增 </p>
								</td>
								<td>
									<p class="bold">985</p>
									<p></p>
								</td>
								<td>
									<p class="bold">6</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">安徽省累计报告境外输入确诊病例1例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>广西</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">260</p>
									<p> 36天0新增 </p>
								</td>
								<td>
									<p class="bold">258</p>
									<p></p>
								</td>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">广西累计报告境外输入确诊病例8例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>西藏</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">1</p>
									<p> 284天0新增 </p>
								</td>
								<td>
									<p class="bold">1</p>
									<p></p>
								</td>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>江西</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">935</p>
									<p> 81天0新增 </p>
								</td>
								<td>
									<p class="bold">934</p>
									<p></p>
								</td>
								<td>
									<p class="bold">1</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">江西累计报告境外输入病例5例。</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>青海</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">18</p>
									<p> 277天0新增 </p>
								</td>
								<td>
									<p class="bold">18</p>
									<p></p>
								</td>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
							</tr>
						</tbody>
						<tbody class="">
							<tr class="areaBox">
								<th class="area">
									<p><span>贵州</span></p>
									<p></p>
								</th>
								<td>
									<p class="bold">0</p>
									<p></p>
								</td>
								<td class="confirmTd">
									<p class="bold">147</p>
									<p> 225天0新增 </p>
								</td>
								<td>
									<p class="bold">145</p>
									<p></p>
								</td>
								<td>
									<p class="bold">2</p>
									<p></p>
								</td>
							</tr>
							<tr class="tip">
								<td colspan="6">贵州累计报告境外输入确诊病例1例。</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="dataTips ac-dataqs moveNavLast"><span>数据来源：各地卫健委每日公开数据</span></div>
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
	.chinaListWraper table td:nth-child(2), .chinaListWraper table td:nth-child(3), .chinaListWraper table th:nth-child(2), .chinaListWraper table th:nth-child(3) {
	    width: 15.467vw;
	}
	.chinaListWraper tbody td {
	    text-align: center;
	    position: relative;
	    border-right: 1px solid #fff;
	}
	.chinaListWraper tbody tr.tip td {
	    text-align: left;
	    line-height: 4.8vw;
	    color: #737373;
	    padding: 1.333vw 4.533vw;
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
