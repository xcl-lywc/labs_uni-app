<template>
	<view class="page-box">
		<view class="detail-box">
			<cmd-cell-item :title="name" slot-left>
				评价对象：
			</cmd-cell-item>
			<view class="detail-desc_">
					
					<view class="flex">
						<view class="flex-sub padding-sm margin-xs radius">
							<button class="cu-btn block line-orange" @click="pre">
								<text class="cuIcon-pullleft"></text> 上一项
							</button>
						</view>
						<view class="flex-sub padding-sm margin-xs radius text-center">第{{index+1}}项</view>
						<view class="flex-sub padding-sm margin-xs radius">
							<button class="cu-btn block line-orange" @click="next">
								下一项 <text class="cuIcon-pullright"></text> 
							</button>
						</view>
					</view>
			</view>
			<view>
				<cmd-cell-item :title="title" no-border/>
				<view class="detail-desc">
					<radio-group @change="radioChange">
							<view class="uni-list-cell-pd" v-for="item in options"><label class="radio" ><radio :value="item.id" class="marr10"/>{{item.name}}</label></view>
					</radio-group>
					<view class="answer-area">
						<textarea 
							class="answer-textarea" 
							@blur="bindTextAreaBlur" 
							auto-height  
							placeholder="简答区域..."
							placeholder-style="font-size:28upx;"
							maxlength="-1"/>
					</view>
				</view>
			</view>
			<view class="detail-desc_">
				<view class="grid col-3">
					<view v-for="(item,i) in arr">
						<button class="cu-btn block line-black" @click="index=i">{{item}}</button>
					</view>
				</view>
					
			</view>
		</view>
	</view>
</template>

<script>
	import cmdCellItem from '@/components/cmd-cell-item/cmd-cell-item.vue'
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		components: {cmdCellItem,uniIcon},
		data() {
			return {
				name:null,
				title:'某商场以每件20元的价格购进一种商品，试销中发现，这种商品每天的销售量m(件)与每件的销售价x(元)满足关系：m=140－2x.(1) 写出商场卖这种商品每天的销售利润y与每件的销售价x间的函数关系式；(2) 如果商场要想每天获得最大的销售利润，每件商品的售价定为多少最合适？最大销售利润为多少？',
				options:[{name:'AAAAAAAAAAAA',id:'0'},{name:'BBBBBBBBBBBB',id:'1'},{name:'CCCCCCCCCC',id:'2'},{name:'DDDDDDDDDDDD',id:'3'},],
				arr:['第一项','第二项','第三项','第四项','第五项','第六项','第七项',],
				index:0,
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
			console.info(option.name);
			option.name ? this.name = option.name: '暂无';
		},
		methods: {
			radioChange(e){
				console.log(e.detail.value)
			},
			bindTextAreaBlur(e) {
        console.log(e.detail.value)
			},
			/* 上一项与下一项 */
			pre(){
				if(this.index<=0){
					uni.showToast({title: '没有了'});
					return;
				}
				this.index--;
			},
			next(){
				this.index++;
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.page-box{
		height: calc(100vh - 88upx);
		width: 100%;
		background-color: #fff;
		.detail-box{
			// background-color: #fff;
			.cmd-cell-item{
				background-color: #fff;
			}
			.detail-desc{
				border-bottom:1px solid #E2E4EA ;
				// color: #858B9C;
				padding: 0 10upx 10upx;
				background-color: #fff;
			}
			.detail-desc_{
				border-top:1px solid #E2E4EA ;
				padding: 15upx 10px;
				border-bottom:1px solid #E2E4EA ;
				background-color: #fff;
			}
			.answer-area{
				background: #f1f1f1;
				overflow: hidden;
				border-radius: 10upx;
				.answer-textarea{
					min-height: 240upx;
					width: 100vw;
					text-indent: 40upx;
					box-sizing: border-box;
					padding: 20upx;
					font-size: 28upx;
				}
			}
		}
	}
</style>
