<template>
	<view class="page-box">
		<view class="detail-box" v-if="data">
			
			<cmd-cell-item title="设备型号" :addon="data.model" arrow />
			<cmd-cell-item title="设备编号" :addon="data.num" arrow />
			<cmd-cell-item title="序列号" :addon="data.index" arrow />
			<cmd-cell-item title="设备状态" :addon="data.status" arrow  class="marb100"/>
			
			<cmd-cell-item title="管理员" :addon="data.admin" arrow />
			<cmd-cell-item title="位置" :addon="data.position" arrow   class="marb100"/>
			
			<view>
				<cmd-cell-item title="设备功能" no-border arrow/>
				<view class="detail-desc">
					{{data.function}}
				</view>
			</view>
			<view>
				<cmd-cell-item title="注意事项" no-border arrow addon="注意"/>
				<view class="detail-desc">
					{{data.tips}}
				</view>
			</view>
			<cmd-cell-item title="学习资料" slot-right arrow="" @click="toLearn(data.learn)">
			    <view>{{data.learn.name}}</view>
			</cmd-cell-item>
			
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
					num:'fx-09821',
					model:'15asadaskjsd',
					index:'02',
					status:'在库',
					admin:'张云非',
					position:'撒旦',
					function:'监测功能',
					tips:'怕火！！',
					learn:{name:'学习资料',id:89},
				}
			}
		},
		onLoad(option) {
			console.info(option.id)
		},
		methods: {
			/* 
			* 去学习
			*  */
			toLearn(data){
				uni.navigateTo({url: `/pages/device/device-data?id=${data.id}`})
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #95E0F9;
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
