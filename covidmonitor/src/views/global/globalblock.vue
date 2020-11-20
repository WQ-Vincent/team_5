<template>
	<div class="world_list">
		<div class="epidmc" v-for="(item,index) in list">
			<div class="epidmc_name">
				<span>{{item.attribute}}</span>
			</div>
			<div class="epidmc_data">
				<span>{{item.totalnumber}}</span>
			</div>
			<div class="epidmc_add">
				<div class="data_change">
					<span>{{item.addnumber}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GlobalBlock',
		data() {
			return {
				list: [],
				name: ['现有确诊', '累计确诊', '累计治愈', '累计死亡'],
				str: ''
			}
		},
		created() {
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
										for (var i = 6; i < strl.length-1; i++) {
											self.list.push({
												attribute: self.name[i - 6],
												totalnumber: strl[i],
												addnumber: '+123'
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
			loadData() {
				this.list=[{
						attribute: '现有确诊',
						totalnumber: '15930167',
						addnumber: '+644'
					},
					{
						attribute: '累计确诊',
						totalnumber: '55832242',
						addnumber: '+580451'
					},
					{
						attribute: '累计治愈',
						totalnumber: '38564110',
						addnumber: '+257218'
					},
					{
						attribute: '累计死亡',
						totalnumber: '1337965',
						addnumber: '+6880'
					}
				]
				this.readfile()
			}
		}
	}
</script>

<style scoped>
	.world_list {
		display: flex;
		flex-wrap: wrap;
		box-pack: center;
		justify-content: center;
		box-align: center;
		align-items: center;
		padding-top: 4vw;
		padding-bottom: 2vw;
	}

	.world_list .epidmc:first-child {
		background: linear-gradient(#FFF2D5, #fff);
	}

	.world_list .epidmc:first-child .epidmc_data,
	.world_list .epidmc:first-child .data_change {
		color: rgb(255, 199, 66);
	}

	.world_list .epidmc:first-child .epidmc_add {
		background-color: rgba(255, 199, 66, 0.1);
	}

	.world_list .epidmc:nth-child(2) {
		background: linear-gradient(#E8DFFF, #fff);
	}

	.world_list .epidmc:nth-child(2) .epidmc_data,
	.world_list .epidmc:nth-child(2) .data_change {
		color: rgb(123, 70, 242);
	}

	.world_list .epidmc:nth-child(2) .epidmc_add {
		background-color: rgba(123, 70, 242, 0.1);
	}

	.world_list .epidmc:nth-child(3) {
		background: linear-gradient(#D6FFDC, #fff);
	}

	.world_list .epidmc:nth-child(3) .epidmc_data,
	.world_list .epidmc:nth-child(3) .data_change {
		color: rgb(40, 194, 133);
	}

	.world_list .epidmc:nth-child(3) .epidmc_add {
		background-color: rgba(40, 194, 133, 0.1);
	}

	.world_list .epidmc:last-child {
		background: linear-gradient(#FFD3E6, #fff);
	}

	.world_list .epidmc:last-child .epidmc_data,
	.world_list .epidmc:last-child .data_change {
		color: rgb(231, 71, 130);
	}

	.world_list .epidmc:last-child .epidmc_add {
		background-color: rgba(231, 71, 130, 0.1);
	}

	.epidmc {
		position: relative;
		overflow: visible;
		width: 42vw;
		height: 35vw;
		border-radius: 3.5vw;
		margin: 0 1.2vw;
	}

	.epidmc_add {
		position: relative;
		overflow: visible;
		width: fit-content;
		height: 7vw;
		right: 2vw;
		top: 11vw;
		border-radius: 4vw;
		float: right;
	}

	.epidmc_data {
		position: relative;
		margin-left: 6vw;
		top: 8vw;
		overflow: visible;
		width: fit-content;
		white-space: nowrap;
		text-align: margin-left;
		font-size: 6vw;
		font-weight: 700;
	}

	.epidmc_name {
		position: relative;
		margin-left: 6vw;
		top: 4vw;
		overflow: visible;
		width: 21vw;
		white-space: nowrap;
		text-align: margin-left;
		font-style: normal;
		font-size: 4vw;
		color: rgba(80, 93, 111, 1);
	}

	.data_change {
		position: relative;
		margin: 0 2.8vw;
		top: 0.6vw;
		overflow: visible;
		width: fit-content;
		white-space: nowrap;
		text-align: margin-left;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: normal;
		font-size: 4vw;
	}
</style>
