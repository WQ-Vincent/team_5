<template>
<div class="epidmc">
	<div class="epidmc_name"> 
		<span>{{attribute}}</span> 
	</div>
	<div class="epidmc_data" :style="{color:textcolor}"> 
		<span>{{totalnumber}}</span> 
	</div>
	<div class="epidmc_add" :style="{background:bgcolor}">
		<div class="data_change" :style="{color:textcolor}"> 
			<span>{{addnumber}}</span> 
		</div>
	</div>
</div>
</template>

<script>
export default {
  props: ['attribute','totalnumber','addnumber','textcolor','bgcolor'],
  methods:{

  }
}
</script>

<style scoped>
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