<template>
	<view class="page-box">
		<view class="detail-box" v-if="data">
			
			<cmd-cell-item title="任务名称" :addon="data.name" arrow />
			<cmd-cell-item title="报告类型" :addon="data.type" arrow />
			<view>
				<cmd-cell-item title="报告要求" no-border arrow/>
				<view class="detail-desc">
					{{data.tips}}
				</view>
			</view>
			<cmd-cell-item title="截止时间" :addon="data.time" arrow />
			<cmd-cell-item title="报告模板" slot-right arrow=""  class="marb100">
			    <view>{{data.file}}</view>
			</cmd-cell-item>
			
			<cmd-cell-item title="报告总分" :addon="data.all_score" arrow/>
			<cmd-cell-item title="得分占比" :addon="data.percentage" arrow/>
			
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
					name:'记录数据',
					type:'实验记录报告',
					tips:'至少1000字，硕大的去啊去啊qq去qq芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊芊',
					time:'2015/01/14',
					file:'00sda0.doc',
					percentage:'98%',
					time:'2015/01/14',
					all_score:'100分',
				}
			}
		},
		onLoad(option) {
			uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#EDBE00',
					animation: {
							duration: 400,
							timingFunc: 'easeIn'
					}
			});
			console.info(option.id);
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #EFDA86;
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
