<template>
	<view class="container">
		<mehation-search button="inside" @search="search" backgroundColor="transparent"></mehation-search>
		<view class="list-cell">
			<view @click="goToDetailPage(value)" class="mar10 list-cell-item" hover-class="" v-for="(value,key) in list" :key="key" :style="{'background': colorList[key%4]}">
				<view class="title">{{value.name}}</view>
				<view class="content">{{value.description}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mehationSearch from '../../components/mehaotian-search/mehaotian-search.vue'
	export default {
		components:{mehationSearch,},
		data() {
			return {
				colorList: ['#d8369d','#f75f32','#09b1df','#edbb00'],
				title: 'media-list',
				showImg: true,
				list: [{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 2,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					},
					{
						id: 1,
						name: "新建教室01",
						description: "查看化学实验课程",
					}
				]
			}
		},
		methods: {
			/* 搜索列表 */
			search(ev){   
				
			},
			goToDetailPage(item){
				uni.navigateTo({
					url: '/pages/course/course-detail?id=' + item.id,
				})
			}
		}
	}
</script>

<style lang="scss"> 
	.list-cell{
		.list-cell-item{
			border-radius: 20upx;
			padding: 15upx;
			
		}
		color: #fff;
		.title{
			font-size: 28upx;
		}
		.content{
			padding: 10upx;
			font-size: 26upx;
			min-height: 100upx;
		}
	}
</style>
