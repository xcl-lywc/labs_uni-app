<template>
	<view class="page-box">
		<!-- 搜索区域 -->
		<view class="search-box cu-bar search bg-white fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="输入设备编号或序列号插序" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		<!-- 卡片区域 -->
		<scroll-view class="card-box" v-if="data&&data.total!=0" 
			@scrolltolower="scrollToLower" 
			scroll-y="true" 
			:style="[{height:'calc(100vh - 100upx)'}]">
			<view v-for="(item,index) in data.rows" :key="index">
				<uni-card 
				    is-full="false" 
				    :title="item.num" 
						@click="cardClicked(item)"
				    thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" 
				    :extra="item.room">
				    <view class="flex solid-bottom align-center">
				    	<view class="flex-treble">
								<view>规格-型号：<text>{{item.model}}</text></view>
								<view>序列号：<text>{{item.index}}</text></view>
								<view>管理员姓名：<text>{{item.name}}</text></view>
							</view>
				    	<view class="flex-sub text-xxl">
								<text v-if="item.type===1" :style="[{color:'#0081ff'}]">在库</text>
								<text v-if="item.type===2" :style="[{color:'#39b54a'}]">借入</text>
								<text v-if="item.type===3" :style="[{color:'#fbbd08'}]">维修</text>
								<text v-if="item.type===4" :style="[{color:'#e54d42'}]">借出</text>
							</view>
				    </view>
				</uni-card>
			</view>
			<uni-load-more :status="loadingStatus"></uni-load-more>
		</scroll-view>
		<view v-else class="no-data card-box">暂无数据</view>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card.vue"
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components: {uniCard,uniLoadMore},
		data() {
			return {
				InputVal: null,
				CustomBar: 44,
				loadingStatus: "noMore",
				data:{
					rows:[
						{num:'001',model:'51611619',index:'012',name:"李思",type:1,room:"fx-01",id:0,power:0,},
						{num:'002',model:'12575724',index:'013',name:"李思",type:2,room:"fx-04",id:1,power:1,},
						{num:'003',model:'27227272',index:'014',name:"李思",type:3,room:"fx-08",id:2,power:0,},
						{num:'004',model:'28382547',index:'015',name:"李思",type:4,room:"fx-05",id:3,power:1,},
						{num:'005',model:'86676745',index:'016',name:"李思",type:1,room:"fx-011",id:4,power:0,},
					],
					total:5,
				},
			}
		},
		methods: {
			InputFocus(e) {
				this.InputVal = e.detail.value
			},
			InputBlur(e) {
				this.InputVal = null;
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
			cardClicked(item) {
				//power为0，管理员；power为1，学生；
				item.power === 0 ? 
				uni.navigateTo({url: `/pages/device/device-detail_admin?id=${item.id}`}) : uni.navigateTo({url: `/pages/device/device-detail_student?id=${item.id}`});
			},
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #0BABE0;
		.search-box{
			background-color: #fff;
		}
		.card-box{
			margin-top: 100upx;
		}
	}
</style>
