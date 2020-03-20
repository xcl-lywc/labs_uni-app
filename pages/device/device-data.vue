<template>
	<view class="page-box">
		<view class="detail-box" v-if="data">
			<view class="marb100">
				<cmd-cell-item title="图片" no-border arrow/>
				<view class="detail-desc">
					<view class="grid flex-sub padding-lr col-3 grid-square data-img">
						<view class="bg-img" :style="{backgroundImage:'url('+item+')'}" v-for="(item,index) in data.img" :key="index" @tap="showModal(item)"></view>
					</view>
				</view>
			</view>
			<view>
				<cmd-cell-item title="视频" no-border arrow/>
				<view class="detail-desc">
					<view v-for="item in data.video" class="data-video">
						<view class="flex-sub text-center">
							<view class="padding">{{item.title}}</view>
						</view>
						<video class="myVideo" 
								:src="item.url"
								@error="videoErrorCallback" 
								controls>
						</video>
					</view>
				</view>
			</view>
			
			<!-- 图片窗口 -->
			<view class="cu-modal" :class="isShowmodal?'show':''" v-if="modalImage" @tap="hideModal">
				<view class="cu-dialog">
					<view class="bg-img" :style="{backgroundImage:'url('+modalImage+')',minHeight:'600upx'}">
						<view class="cu-bar justify-end text-white">
							<view class="action" @tap="hideModal">
								<text class="cuIcon-close "></text>
							</view>
						</view>
					</view>
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
					img:[
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						'https://ossweb-img.qq.com/images/lol/img/champion/Taric.png',
					],
					video:[
						{
							title:'uni-app教程',
							url:'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4'
						},
						{
							title:'uni-app教程',
							url:'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4'
						},
					],
				},
				isShowmodal: false,//是否展示图片窗口
				modalImage:null,//图片窗口的src
				src: '',
			}
		},
		onLoad(option) {
			console.info(option.id)
		},
		methods: {
			showModal(val) {
				this.isShowmodal = true;
				this.modalImage = val;
			},
			hideModal(e) {
				this.isShowmodal = null;
				this.modalImage = null;
			},
			videoErrorCallback: function(e) {
					uni.showModal({
							content: e.target.errMsg,
							showCancel: false
					})
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #e1e5e7;
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
				.data-img{
					
				},
				.data-video{
					width: 100%;
					.myVideo{
						width: 100%;
						margin-bottom:20upx ;
						border-bottom: 2upx solid #9E9E9E;
						border-top: 2upx solid #9E9E9E;
					}
				}
			}
		}
	}
</style>
