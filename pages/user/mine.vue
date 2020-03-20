<template>
	<view>
		<view class="header" v-bind:class="{'status':isH5Plus}">
			<view class="userinfo">
				<view class="face">
					<image :src="userinfo.face"></image>
				</view>
				<view class="info">
					<view class="username">{{userinfo.username}}</view>
					<view class="username" style="font-size: 24upx;;">{{userinfo.clasz}}</view>
					<!-- <view class="integral">实验次数:{{userinfo.integral}}</view> -->
				</view>
				<view class="news cuIcon-mail" style="color: white;font-size: 50upx;">
					<!-- <text class="cuIcon-mail" style="color: white;font-size: 40upx;"></text> -->
					<!-- <view class='cuIcon-mail'> -->
						<view class='cu-tag badge' style="top:52upx;right: 40upx;">2</view>
					<!-- </view> -->
				</view>
			</view>
			<!-- <view class="setting">
				<image src="../../static/HM-PersonalCenter/setting.png"></image>
			</view> -->
		</view>
		<!-- 	<view class="orders">
			<view class="box">
				<view class="label" v-for="(row,index) in orderTypeLise" :key="row.name" hover-class="hover"  @tap="toOrderType(index)">
					<view class="icon"><view class="badge" v-if="row.badge>0">{{row.badge}}</view><image :src="'../../static/HM-PersonalCenter/'+row.icon"></image></view>
					{{row.name}}
				</view>
			</view>
		</view> -->
		<view class="list" v-for="(list,list_i) in severList" :key="list_i">
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(li)" v-bind:class="{'noborder':li_i==list.length-1}"
			 hover-class="hover" :key="li.name">
				<view class="icon">
					<image :src="li.icon"></image>
				</view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/to.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
					isH5Plus: true,
				//#endif
				//#ifndef APP-PLUS
					isH5Plus: false,
				//#endif
				userinfo: {},
				severList: [
					[{
							name: '个人信息',
							icon: '../../static/point.png',
							url: '/pages/my-module/my-info'
						},
						{
							name: '我的课程',
							icon: '../../static/quan.png'
						},
						{
							name: '我的任务',
							icon: '../../static/momey.png',
							url: '/pages/my-module/my-task',
						},
						{
							name: '我的设备',
							icon: '../../static/renw.png'
						},
					],[
						{
							name: '服务器设置',
							icon: '../../static/choujiang.png'
						},
						{
							name: '消息设置',
							icon: '../../static/mingxi.png'
						},
						{
							name: '清空缓存',
							icon: '../../static/bank.png',
						},
						{
							name: '退出登录',
							icon: '../../static/kefu.png',
							action:'logout',
							url:'/pages/user/login'
						},
					]
				],
			};
		},
		onLoad() {
			//加载
			this.init();
		},
		methods: {
			init() {
				//用户信息
				this.userinfo = {
					face: '../../static/face.jpg',
					clasz:'软件工程系2018级网络组建于与维护专业2班',
					username: "张某某",
					integral: "10"
				}
			},
			//用户点击列表项
			toPage(li) {
				// uni.showToast({
				// 	title: this.severList[list_i][li_i].name
				// });
				if(li.action == 'logout'){
					uni.setStorageSync("AccessToken",null);
					uni.reLaunch({
						url:li.url
					})
				}
				if(li.url){
					uni.navigateTo({
						url: li.url
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff
	}
	
	.header {
// 		&.status {
// 			padding-top: var(--status-bar-height);
// 		}
//  
		background-color:#3D8FEA;
		width:100%;
		height:30vw;
		// padding:0 4%;
		display:flex;
		align-items:center;

		.userinfo {
			width: 90%;
			display: flex;
			margin-left: 20upx;
			.face {
				flex-shrink: 0;
				width: 20vw;
				height: 20vw;
				image {
					width: 100%;
					height: 100%;
					border-radius: 100%
				}
			}
			.info {
				display: flex;
				flex-flow: wrap;
				padding-left: 30upx;
				.username {
					width: 100%;
					color: #fff;
					font-size: 40upx
				}
				.integral {
					display: flex;
					align-items: center;
					padding: 0 20upx;
					height: 40upx;
					color: #fff;
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 20upx;
					font-size: 24upx
				}
			}
		}
	}

	.hover {
		background-color: #eee
	}

	.list {
		width: 100%;
		border-bottom: solid 26upx #f1f1f1;
		.li {
			width: 100%;
			height: 100upx;
			padding: 0 4%;
			border-bottom: solid 1upx #e7e7e7;
			display: flex;
			align-items: center;
			&.noborder {
				border-bottom: 0
			}
			.icon {
				flex-shrink: 0;
				width: 50upx;
				height: 50upx;
				image {
					width: 50upx;
					height: 50upx
				}
			}
			.text {
				padding-left: 20upx;
				width: 100%;
				color: #666
			}
			.to {
				flex-shrink: 0;
				width: 40upx;
				height: 40upx
			}
		}
	}
</style>
