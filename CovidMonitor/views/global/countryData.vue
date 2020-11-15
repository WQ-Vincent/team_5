<template>
	<table>
		<tbody v-for="(area,index) in areas" :key=index>
			<tr class="areaBox">
				<th class="area">
					<p><span>{{area.name}}</span></p>
				</th>
				<td class="confirmTd">
					<p class="bold">{{area.allinf}}</p>
				</td>
				<td>
					<p class="bold">{{area.recov}}</p>
				</td>
				<td>
					<p class="bold">{{area.death}}</p>
				</td>
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
			loadArea() {
				this.areas = [
					[]
				];
				this.areas = [{
						name: '香港',
						allinf: '5380',
						recov: '5146',
						death: '107'
					},
					{
						name: '上海',
						allinf: '1255',
						recov: '1143',
						death: '7'
					},
					{
						name: '新疆',
						allinf: '980',
						recov: '918',
						death: '3'
					}
				];
			}
		}
	}
</script>

<style>
	.listWraper tbody {
		line-height: 10.667vw;
		height: 10.667vw;
		font-size: 3.2vw;
	}

	.listWraper table td:first-child,
	.listWraper table th:first-child {
		width: 20vw;
	}

	.listWraper table th:first-child {
		border-top-left-radius: 1.5vw;
		border-bottom-left-radius: 1.5vw;
	}

	.listWraper tbody .areaBox {
		font-size: 3.733vw;
		border-bottom: 1px solid #f0f0f0;
	}

	.listWraper tbody td p,
	.listWraper tbody th p {
		line-height: 5.333vw;
		min-height: 5.333vw;
		padding-top: 2.667vw;
	}

	.listWraper table td:nth-child(2),
	.listWraper table th:nth-child(2) {
		width: 25vw;
	}

	.listWraper table td:nth-child(3),
	.listWraper table th:nth-child(3) {
		width: 20vw;
	}

	.listWraper tbody td {
		text-align: center;
		position: relative;
		border-right: 1px solid #fff;
	}
</style>
