<template>
	<table>
		<tbody v-for="(area,index) in areas">
			<tr class="areaBox">
				<th class="area">
					<p><span>{{area.name}}</span></p>
					<p></p>
				</th>
				<td>
					<p class="bold">{{area.newadd}}</p>
					<p></p>
				</td>
				<td>
					<p class="bold">{{area.nowinc}}</p>
					<p></p>
				</td>
				<td>
					<p class="bold">{{area.suminc}}</p>
					<p></p>
				</td>
				<td>
					<p class="bold">{{area.recov}}</p>
					<p></p>
				</td>
				<td>
					<p class="bold">{{area.death}}</p>
					<p></p>
				</td>
			</tr>
			<tr class="tip">
				<td colspan="6">{{area.abroad}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		name: 'AreaData',
		data() {
			return {
				areas: [[]]
			}
		},
		created() {
			this.loadArea();
		},
		methods: {
			readfile(){
				const self=this;
				// 请求本地系统文件对象 plus.io.PRIVATE_WWW：应用运行资源目录常量
				plus.io.requestFileSystem(plus.io.PRIVATE_WWW, function(fobject) {
					self.areas=[];
					var directoryReader = fobject.root.createReader();
					directoryReader.readEntries(function(entries) {
						var sta;
						for(var i=0;i<entries.length;i++){
							if(entries[i].name=="static"){
								sta=i;break;
							}
						}
						var fso = entries[sta].createReader();
						fso.readEntries(function(cs) {
							cs[0].getFile('covid_china.csv', {
								create: false
							}, function(fileEntry) {
								fileEntry.file(function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.readAsText(file, 'utf-8');
									fileReader.onloadend = function(evt) {
										self.str=evt.target.result;
										var strl=self.str.split("\r\n");
										strl.pop();
										for(var i=1;i<strl.length;i++){
											self.data=strl[i].split(',');
											self.areas.push({
												name: self.data[0],
												newadd: self.data[1],
												nowinc: self.data[2],
												suminc: self.data[3],
												recov: self.data[4],
												death: self.data[5],
												abroad: ''
											});
										}
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
			loadArea() {
				this.areas=[{
						name: '香港',
						newadd: '12',
						nowinc: '127',
						suminc: '5380',
						recov: '5146',
						death: '107',
						abroad: ''
					},
					{
						name: '上海',
						newadd: '12',
						nowinc: '105',
						suminc: '1255',
						recov: '1143',
						death: '7',
						abroad: '上海累计报告境外输入确诊病例912例。'
					},
					{
						name: '新疆',
						newadd: '12',
						nowinc: '59',
						suminc: '980',
						recov: '918',
						death: '3',
						abroad: ''
					},
				];
				this.str='';
				this.readfile();
			}
		}
	}
</script>

<style>
	.listWraper table {
	border: 0;
	padding: 0;
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	}
	.listWraper tbody {
	    line-height: 10.667vw;
	    height: 10.667vw;
	    font-size: 3.2vw;
	}
	.listWraper thead {
	    border-collapse: collapse;
	    border-spacing: 0;
	}
	.listWraper thead th {
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
	.listWraper table td:first-child, .listWraper table th:first-child {
	    width: 20vw;
	}
	.listWraper table th:first-child {
	    border-top-left-radius: 1.5vw;
		border-bottom-left-radius: 1.5vw;
	}
	.listWraper table th:last-child {
	    border-top-right-radius: 1.5vw;
		border-bottom-right-radius: 1.5vw;
	}
	.listWraper tbody .areaBox {
	    font-size: 3.733vw;
		border-bottom: 1px solid #f0f0f0;
	}
	.listWraper tbody td p, .listWraper tbody th p {
	    line-height: 5.333vw;
	    min-height: 5.333vw;
	    padding-top: 2.667vw;
	}
	.listWraper tbody td p:last-child, .listWraper tbody th p:last-child {
	    line-height: 3.2vw;
	    height: 3.2vw;
	    min-height: auto;
	    font-size: 2.667vw;
	    padding: 0 0 2.667vw;
	    color: #737373;
	}
	.listWraper table td:nth-child(2), .listWraper table td:nth-child(3),.listWraper table td:last-child, .listWraper table th:nth-child(2), .listWraper table th:nth-child(3),.listWraper table th:last-child {
	    width: 13vw;
	}
	.listWraper tbody td {
	    text-align: center;
	    position: relative;
	    border-right: 1px solid #fff;
	}
	.listWraper tbody tr.tip td {
	    text-align: left;
	    line-height: 4.8vw;
	    color: #737373;
	    padding: 1.333vw 4.533vw;
	}
</style>
