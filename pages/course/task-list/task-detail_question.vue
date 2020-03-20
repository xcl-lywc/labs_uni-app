<template>
	<view class="page-box">
		<view class="detail-box" v-if="data">
			
			<cmd-cell-item title="任务名称" :addon="data.name" arrow />
			<cmd-cell-item title="问卷名称" :addon="data.exam" arrow />
			<cmd-cell-item title="问卷类型" :addon="data.type" arrow />
			<view>
				<cmd-cell-item title="填写要求" no-border arrow/>
				<view class="detail-desc">
					{{data.tips}}
				</view>
			</view>
			<view>
				<cmd-cell-item title="评价对象" no-border arrow/>
				<view class="detail-desc">
					<view class='cu-tag round bg-black' v-for="item in data.arr" @click="doAnswer(item)">{{item}}</view>
				</view>
			</view>
			
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
					exam:'男子身高与体重调查',
					type:'社会调查',
					tips:'Nam id semper purus, sit amet scelerisque justo. Proin in blandit ligula. Nulla auctor aliquet ipsum, pulvinar tempus dolor maximus et. Quisque at velit vel nunc dignissim tincidunt. Phasellus vitae tempus tortor. Etiam nisi risus, tempus sit amet magna nec, luctus pellentesque enim. Nulla congue augue eu odio pretium, nec consectetur orci blandit. Proin vitae malesuada purus. Nam eu ante in tortor condimentum tempor. Proin tincidunt facilisis lorem sed facilisis. Quisque ut semper nulla, a facilisis nibh.',
					arr:['李思','张三','王兀','李思','张三','王兀',],
				}
			}
		},
		onLoad(option) {
			uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#E95098',
					animation: {
							duration: 400,
							timingFunc: 'easeIn'
					}
			});
			console.info(option.id)
		},
		methods: {
			/* 
			*去天填写问卷调查 
			*  */
			doAnswer(item){
				uni.navigateTo({url: `/pages/course/task-list/task-detail_answer?name=${item}`})
			},
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #FAD8E8;
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
