<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{t('你好')}}</text>
		</view>
		 <button v-for="lng of languages" 
		    @click="change(lng.name)"  
		    >{{ lng.title }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lang: 'zh'
			}
		},
		onLoad() {

		},
		methods: {
			change(lang) {
				this.changeLanguage(lang) // 切换语言
				uni.showToast({
					title: this.$t('切换成功')
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
