<template>
    <view>
        <web-view :webview-styles="webviewStyles" v-bind:src="weburl"></web-view>
    </view>
</template>

<script>
	export default {
		name: 'outweb',
		data() {
			return {
				weburl:'http://www.gov.cn/fuwu/bm/wsjkw/index.htm'
			}
		},
		created() {
		},
		methods: {}
	}
</script>

<style>
</style>
