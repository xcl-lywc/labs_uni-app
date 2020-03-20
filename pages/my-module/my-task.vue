<template>
	<view class="page-box">
		<!-- 搜索区域 -->
		<view class="search-box cu-bar search bg-white fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="action">
				<view class="action marr50" @click="selectEvent(0);">
					<text class="marr10">选择课程 </text>
					<text class="cuIcon-triangledownfill"></text>
				</view>
				<view class="action" @click="selectEvent(1)">
					<text>选择实验 </text>
					<text class="cuIcon-triangledownfill"></text>
				</view>
			</view>
			<view class="action">
				<text class="cuIcon-search"></text>
			</view>
		</view>
		<!-- 下拉选择框区域 -->
		<view class='select-box'>
			<uni-list v-if="isShowSelectBox_class&&activeIndex===0">
			  <view v-for="item in selectArr" ><uni-list-item :title="item" show-arrow="false" @click="isShowSelectBox_class=false;selectClassVal = item;"></uni-list-item></view>
				<view v-if="selectArr.length===0"><uni-list-item title="暂无数据" show-arrow="false"></uni-list-item></view>
			</uni-list>
			<uni-list v-if="isShowSelectBox_test&&activeIndex===1">
				<view v-for="item in selectArr" ><uni-list-item :title="item" show-arrow="false" @click="isShowSelectBox_test=false;selectTestVal = item;"></uni-list-item></view>
				<view v-if="selectArr.length===0"><uni-list-item title="暂无数据" show-arrow="false"></uni-list-item></view>
			</uni-list>
		</view>
		<!-- 卡片区域 -->
		<scroll-view class="card-box" v-if="examData&&examData.total!=0" 
			@scrolltolower="scrollToLower" 
			scroll-y="true" 
			:style="[{height:'calc(100vh - 188upx)'}]">
			<uni-card 
			    is-full="false" 
					v-for='(item,index) in examData.rows'
			    title="考试任务" 
					class='kaishi'
					@click="cardClicked(item,'exam')"
			    thumbnail="../../static/course.png" 
			    extra="">
			    <view>
						<view>任务名称：<text>{{item.name}}</text></view>
						<view>截止时间：<text>{{item.time}}</text></view>
					</view>
					<view class="flex">
						<view class="flex-sub  margin-xs">
							<text class="cuIcon-activity marr10"></text>
							<text>{{item.score}}</text>
						</view>
						<view class="flex-sub  margin-xs">
							<text class="cuIcon-time marr10"></text>
							<text>{{item.percentage}}</text>
						</view>
					</view>
			</uni-card>
			<uni-card 
			    is-full="false" 
			    title="问卷任务"
					v-for='(item,index) in questionData.rows'
					class='shijuan'
					@click="cardClicked(item,'question')"
			    thumbnail="../../static/course.png" 
			    :extra="item.type">
			    <view>
						<view>问卷名称：<text>{{item.name}}</text></view>
					</view>
			</uni-card>
			<uni-card 
			    is-full="false" 
			    title="考勤任务" 
					v-for='(item,index) in attendanceData.rows'
					class='kaoqing'
					@click="cardClicked(item,'attend')"
			    thumbnail="../../static/course.png" 
			    extra="">
					<view class="flex solid-bottom align-center">
						<view class="flex-treble">
							<view><text class="cuIcon-timefill marr10"></text><text>{{item.time}}</text></view>
							<view><text class="cuIcon-location marr10"></text><text>{{item.address}}</text></view>
						</view>
						<view class="flex-sub icon-qrcode">
							二维码
						</view>
					</view>
			</uni-card>
			<uni-card 
			    is-full="false" 
			    title="实验报告"
					 class='shiyan'
					 v-for='(item,index) in testData.rows'
					 @click="cardClicked(item,'report')"
			    thumbnail="../../static/course.png" 
			    :extra="item.type">
			    <view>
						<view>任务名称：<text>{{item.name}}</text></view>
						<view>截止时间：<text>{{item.time}}</text></view>
					</view>
					<view class="flex">
						<view class="flex-sub  margin-xs">
							<text class="cuIcon-activity marr10"></text>
							<text>{{item.score}}</text>
						</view>
						<view class="flex-sub  margin-xs">
							<text class="cuIcon-time marr10"></text>
							<text>{{item.percentage}}</text>
						</view>
					</view>
			</uni-card>
			<uni-load-more :status="loadingStatus"></uni-load-more>
		</scroll-view>
		<!-- <view v-else class="no-data card-box">暂无数据</view> -->
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card.vue"
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniCard,uniLoadMore,uniList,uniListItem},
		data() {
			return {
				CustomBar: 44,
				loadingStatus: "noMore",
				selectArr:[],
				isShowSelectBox_class:false,
				isShowSelectBox_test:false,
				activeIndex:0,
				selectClassVal:null,//被选中的课程
				selectClassTest:null,//被选中的实验
				examData:{
					rows:[
						{score:'89分',percentage:'50%',name:"考试名称",time:"2019/05/05",id:0},
					],
					total:1,
				},
				questionData:{
					rows:[
						{type:'社会问卷调查',name:"问卷名称",id:0},
					],
					total:1,
				},
				attendanceData:{
					rows:[
						{time:'2018/02/12',address:"四川省武侯区磨子桥",id:0},
					],
					total:1,
				},
				testData:{
					rows:[
						{score:'89分',percentage:'50%',name:"考试名称",time:"2019/05/05",type:'报告类型',id:0},
					],
					total:1,
				},
			}
		},
		methods: {
			/* 
			* 选择实验和选择课程
			*  */
			selectEvent(val){
				let arr1 = ['课程一','课程一','课程一','课程一','课程一','课程一',];
				let arr2 = ['实验一','实验一','实验一','实验一','实验一','实验一',];
				
				val===0 ? this.selectArr = arr1 : this.selectArr = arr2;
				this.activeIndex = val;
				if(val===0){
					this.isShowSelectBox_class = !this.isShowSelectBox_class;
					this.isShowSelectBox_test = false;
				}else{
					this.isShowSelectBox_test = !this.isShowSelectBox_test;
					this.isShowSelectBox_class = false;
				}		
				
			},
			/**
			 * 滑动到页面底部触发scrollToLower事件
			 */
			scrollToLower(par) {
				console.log(par)
			},
			
			/**
			 * 点击card 跳转至详情 之前的所有内容将保留
			 */
			cardClicked(item,type) {
				if(type==="exam"){
					uni.navigateTo({url: `/pages/course/task-list/task-detail_exam?id=${item.id}`})
				}else if(type==="attend"){
					uni.navigateTo({url: `/pages/course/task-list/task-detail_attend?id=${item.id}`})
				}else if(type==="question"){
					uni.navigateTo({url: `/pages/course/task-list/task-detail_question?id=${item.id}`})
				}else if(type==="report"){
					uni.navigateTo({url: `/pages/course/task-list/task-detail_report?id=${item.id}`})
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #ACBDF2;
		.search-box{
			background-color: #fff;
		}
		.select-box{
			position: fixed;
			top: 188upx;
			z-index: 9;
			background-color: #fff;
			max-height: 400upx;
			overflow: auto;
			display: block;
			border-bottom: 1px solid #9fa5a8;
			border-bottom-left-radius: 10upx;
			border-bottom-right-radius: 10upx;
			width: calc(100% - 20upx);
			margin-left: 10upx;
		}
		.card-box{
			margin-top: 100upx;
			.uni-card.kaishi{
				background-color: #9c26b0;
				color: #fff;
			}
			.uni-card.shijuan{
				background-color: #0081ff;
				color: #fff;
			}
			.uni-card.kaoqing{
				background-color: aqua;
				color: #fff;
			}
			.uni-card.shiyan{
				background-color: #1cbbb4;
				color: #fff;
			}
		}
	}
</style>
