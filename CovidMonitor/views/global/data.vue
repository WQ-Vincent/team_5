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
				countrys: [[]]
			}
		},
		created() {
			this.loadCountry();
		},
		methods: {
			loadCountry(){
				this.countrys=[[]];
				this.countrys=[{
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
					},
					{
						name: '巴西',
						newadd: '10k',
						infec: '160k',
						recor: '27k',
						death: '15k'
					}];
			},
			goCountry(name) {
				uni.navigateTo({
					url: '/views/global/country?name='+name
				});
			}
		}
	}
</script>

<style>
	.Inf_county{
		display: flex;
		margin-left: 7vw;
		position: relative;
		width: 86vw;
	}
	.country_name {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 24vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-size: 4vw;
		color: rgb(33, 74, 118);
	}
	
	.newadd_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 17vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 4vw;
		color: rgb(123, 70, 242);
	}
	
	.infections_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 23vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 4vw;
		color: rgb(255, 191, 19);
	}
	
	.recoveries_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 17vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 4vw;
		color: rgb(59, 183, 76);
	}
	
	.deaths_data {
		position: relative;
		padding-top: 4.6vw;
		overflow: visible;
		width: 17vw;
		white-space: nowrap;
		text-align: center;
		font-family: SF Pro Display;
		font-style: normal;
		font-weight: bold;
		font-size: 4vw;
		color: rgb(246, 104, 166);
	}
</style>
