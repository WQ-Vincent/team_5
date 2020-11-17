<!--各国统计列表-->
<template>
	<view>
		<view class="Inf_county" v-for="(country,index) in countrys" :key=index @click="goCountry(country.name)">
			<div class="country_name"><span>{{country.name}}</span></div>
			<div class="newadd_data"> <span>{{country.newadd}}</span> </div>
			<div class="infections_data"> <span>{{country.infec}}</span> </div>
			<div class="recoveries_data"> <span>{{country.recor}}</span> </div>
			<div class="deaths_data"> <span>{{country.death}}</span> </div>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CountryData',
		data() {
			return {
				countrys: [
					[]
				],
				data:[],
				str:''
			}
		},
		created() {
			this.loadCountry()
		},
		methods: {
			readfile(){
				const self=this;
				// 请求本地系统文件对象 plus.io.PRIVATE_WWW：应用运行资源目录常量
				plus.io.requestFileSystem(plus.io.PRIVATE_WWW, function(fobject) {
					self.countrys=[];
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
							cs[0].getFile('covid_global.csv', {
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
											self.countrys.push({
												name: self.data[0],
												newadd: self.data[1],
												infec: self.data[2],
												recor: self.data[3],
												death: self.data[4]
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
			loadCountry() {
				this.countrys = [{
						name: '美国',
						newadd: '10k',
						infec: '160k',
						recor: '27k',
						death: '15k'
					},
					{
						name: '印度',
						newadd: '20k',
						infec: '160k',
						recor: '27k',
						death: '15k'
					}
				];
				var str='';
				this.readfile();
			},
			goCountry(name) {
				uni.navigateTo({
					url: '/views/global/country?name=' + name
				});
			}
		}
	}
</script>

<style>
	.Inf_county {
		display: flex;
		margin-left: 7vw;
		position: relative;
		width: 86vw;
	}

	.country_name {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 30vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-size: 3.5vw;
		color: rgb(33, 74, 118);
	}

	.newadd_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 14vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-size: 3.5vw;
		color: rgb(255, 191, 19);
	}

	.infections_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 22vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-size: 3.5vw;
		color: rgb(123, 70, 242);
	}

	.recoveries_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 20vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-size: 3.5vw;
		color: rgb(59, 183, 76);
	}

	.deaths_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 14vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-size: 3.5vw;
		color: rgb(246, 104, 166);
	}
</style>
