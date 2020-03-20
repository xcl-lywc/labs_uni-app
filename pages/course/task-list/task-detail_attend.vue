<template>
	<view class="page-box">
		<view class="detail-box" v-if="data">
			
			<cmd-cell-item title="任务名称" :addon="data.name" arrow />
			<cmd-cell-item title="打卡日期" :addon="data.time" arrow />
			<cmd-cell-item title="二维码" slot-right arrow="">
			    <view class="icon-qrcode"></view>
			</cmd-cell-item>
			<cmd-cell-item title="状态" :addon="data.status" arrow />
			<cmd-cell-item title="得分占比" :addon="data.percentage" arrow/>
			<cmd-cell-item title="打卡结果" :addon="data.people" arrow />
			
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
					percentage:'98%',
					name:'记录数据',
					status:'正在进行中...',
					time:'2015/01/14',
					people:'58人完成任务',
				}
			}
		},
		onLoad(option) {
			uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#04B5C6',
					animation: {
							duration: 400,
							timingFunc: 'easeIn'
					}
			});
			console.info(option.id)
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #B3F4FA;
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
