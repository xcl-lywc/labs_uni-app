<template>
	<view class="container"> 
		<view class="list-cell pad10">
			<view @click="goToDetailPage(value)" class="marb10 list-cell-item" hover-class="" v-for="(value,key) in list" :key="key">
				<view class="title">
					<text class="fl bg">{{value.name}}</text>
					<text class="fr">{{value.cur_status == 1 ? '个人实验' : '分组实验'}}</text>
				</view>
				<view class="content">{{value.description}}</view>
			</view>
		</view>
	</view>
</template>

<script> 
	export default { 
		data() {
			return { 
				list: [{	//实验安排
					"id": 47,
					"creator": 107,
					"cur_status": 1,
					"create_time": 1556520717000,
					"name": "fgh",
					"course_id": 87,
					"etype": 1,
					"description": "fgh",
					"courseName": null,
					"creatorName": "姚",
					"participant": null,
					"experimentsData": [],
					"teacher": null
				}, {
					"id": 45,
					"creator": 107,
					"cur_status": 1,
					"create_time": 1555057070000,
					"name": "实验③",
					"course_id": 87,
					"etype": 1,
					"description": "实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③",
					"courseName": null,
					"creatorName": "姚",
					"participant": null,
					"experimentsData": [],
					"teacher": null
				}],
			}
		},
		methods: { 
			goToDetailPage(item){
				uni.navigateTo({
					url: '/pages/course/exersice-detail?id=' + item.id,
				})
			}
		}
	}
</script>

<style lang="scss"> 
	.list-cell{
		.list-cell-item{ 
			padding: 15upx;
			background: #fff;
			border: 1px solid #e4dede;
		} 
		.title{
			display: flow-root;
			font-size: 28upx;
			.bg{
				font-size: 30upx;
			}
		}
		.content{
			padding: 20upx;
			font-size: 26upx;
			min-height: 100upx;
		}
	}
</style>
