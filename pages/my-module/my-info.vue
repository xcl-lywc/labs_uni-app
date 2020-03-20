<template>
	<view class="page-box">
		<view class="detail-box" v-if="data">
			<cmd-cell-item title="头像" slot-right arrow="">
					<view class="cu-avatar radius margin-left" :style="{backgroundImage:'url('+data.head_img+')'}"></view>
			</cmd-cell-item>
			<cmd-cell-item title="账号" :addon="data.account" arrow />
			<cmd-cell-item title="二维码" slot-right arrow="">
			    <view class="icon-qrcode"></view>
			</cmd-cell-item>
			<cmd-cell-item title="入校时间" :addon="data.time" arrow />
			<cmd-cell-item title="院系" :addon="data.school" arrow  class="marb100" />
			
			<cmd-cell-item title="姓名" :addon="data.name" arrow />
			<cmd-cell-item title="性别" :addon="data.sex" arrow/>
			<cmd-cell-item title="手机" :addon="data.tel" arrow />
			<cmd-cell-item title="邮箱" :addon="data.email" arrow />
			
		</view>
		<view v-else class="no-data detail-box">暂无数据</view>
	</view>
</template>

<script>
	import cmdCellItem from '@/components/cmd-cell-item/cmd-cell-item.vue'
	export default {
		components: {cmdCellItem},
		data() {
			return {
				data:{
					head_img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					account:'15184769548',
					qrcode:'',
					time:'2015/01/14',
					school:"石油学院",
					name:'李思',
					sex:'男',
					tel:'13000000000',
					email:"2584965411@qq.com",
				}
			}
		},
		onLoad(option) {
			uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#0DC770',
					animation: {
							duration: 400,
							timingFunc: 'easeIn'
					}
			});
			// console.info(option.id)
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #9EF8CE;
		.detail-box{
			// background-color: #fff;
			.cmd-cell-item{
				background-color: #fff;
			}
			.detail-desc{
				border-bottom:1px solid #E2E4EA ;
				color: #858B9C;
				padding: 0 10upx 10upx;
				background-color: #fff;
			}
		}
	}
</style>
