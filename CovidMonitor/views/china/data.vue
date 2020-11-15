<template>
	<table>
		<tbody v-for="(area,index) in areas">
			<tr class="areaBox">
				<th class="area">
					<p><span>{{area.name}}</span></p>
					<p></p>
				</th>
				<td>
					<p class="bold">{{area.nowinf}}</p>
					<p></p>
				</td>
				<td class="confirmTd">
					<p class="bold">{{area.allinf}}</p>
					<p> {{area.tip}} </p>
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
			loadArea(){
				this.areas=[[]];
				this.areas=[{
						name: '香港',
						nowinf: '127',
						allinf: '5380',
						tip: ' 较上日+10 ',
						recov: '5146',
						death: '107',
						abroad: ''
					},
					{
						name: '上海',
						nowinf: '105',
						allinf: '1255',
						tip: ' 较上日+14 ',
						recov: '1143',
						death: '7',
						abroad: '上海累计报告境外输入确诊病例912例。'
					},
					{
						name: '新疆',
						nowinf: '59',
						allinf: '980',
						tip: ' 3天0新增 ',
						recov: '918',
						death: '3',
						abroad: ''
					}];
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
	.listWraper table td:nth-child(2), .listWraper table td:nth-child(3), .listWraper table th:nth-child(2), .listWraper table th:nth-child(3) {
	    width: 15.467vw;
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
