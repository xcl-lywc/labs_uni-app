<template>
	<view class="page-box">
		<view class="detail-box" v-if="data">
			
			<cmd-cell-item title="任务名称" :addon="data.name" arrow />
			<cmd-cell-item title="截止时间" :addon="data.time" arrow />
			<cmd-cell-item title="通过分数" :addon="data.score" arrow />
			<cmd-cell-item title="得分占比" :addon="data.percentage" arrow  class="marb100"/>
			
			<cmd-cell-item title="试卷名称" :addon="data.exam" arrow />
			<cmd-cell-item title="试卷总分" :addon="data.all_score" arrow/>
			<cmd-cell-item title="任务完成情况" :addon="data.people" arrow />
			
			<!-- <view>
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
			<cmd-cell-item title="学习资料" slot-right arrow="">
			    <view>{{data.learn}}</view>
			</cmd-cell-item> -->
			
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
					score:'95分',
					time:'2015/01/14',
					exam:'全国卷（一）',
					all_score:'100分',
					people:'58人完成任务',
				}
			}
		},
		onLoad(option) {
			uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#F65737',
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
		background-color: #FAA898;
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
