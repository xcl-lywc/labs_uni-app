<template>
	<view class="page_login">
		<!-- 头部logo -->
		<view class="head">
			<view class="head_bg">
				<view class="head_inner_bg">
					<!-- <image style="width: 55px;height: 65px;" :src="imgInfo.head" class="head_logo" /> -->
				</view>
			</view>
		</view>
		<!-- 登录form -->
		<view class="login_form">
			<view class="input">
				<view class="img">
					<image style="width:48upx;height: 48upx;" :src="imgInfo.icon_user" />
				</view>
				<input type="text" v-model="username" placeholder="请输入用户账号" >
				<view class="img">
					<image @tap="delUser" class="img_del" :src="imgInfo.icon_del" />
				</view>
			</view>
			<view class="line" />
			<view class="input">
				<view class="img">
					<image style="width:40upx;height: 50upx;" :src="imgInfo.icon_pwd" />
				</view>
				<input :type="pwdType" :value="userpwd" @input="inputPwd" placeholder="请输入密码" >
				<view class="img" @tap="switchPwd">
					<image class="img_pwd_switch" :src="imgInfo.icon_pwd_switch" />
				</view>
			</view>
		</view>
		<!-- 登录提交 -->
		<button class="submit" type="primary" @tap="login">登录</button>
		<!-- 	<view class="opts">
			<text @tap="goReg" class="text">立即注册</text>
			<text @tap="findPwd" class="text">忘记密码？</text>
		</view>
		<view class="quick_login_line">
			<view class="line" />
			<text class="text">快速登录</text>
			<view class="line" />
		</view>
		<view class="quick_login_list">
			<image @tap="thirdLogin('qq')" class="item" :src="imgInfo.qq" />
			<image @tap="thirdLogin('wechat')" class="item" :src="imgInfo.wechat" />
			<image @tap="thirdLogin('weibo')" class="item" :src="imgInfo.weibo" />
		</view> -->
	</view>
</template>
<script>
	import util from "@/common/util.js"
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				username: 'admin',
				userpwd: '123456',
				pwdType: 'password',
				imgInfo: {
					head: isUni ? '/static/logo.png' : require('../../static/logo.png'),
					icon_user: isUni ? '/static/icon_user.png' : require('../../static/icon_user.png'),
					icon_del: isUni ? '/static/icon_del.png' : require('../../static/icon_del.png'),
					icon_pwd: isUni ? '/static/icon_pwd.png' : require('../../static/icon_pwd.png'),
					icon_pwd_switch: isUni ? '/static/icon_pwd_switch.png' : require('../../static/icon_pwd_switch.png')
				}
			}
		},
		methods: {
			inputUsername(e) {
				this.username = e.target.value
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			delUser() {
				this.username = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			login() {
				if (!this.username || this.username.replace(' ', '') == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入用户名!',
						duration: 2000
					});
					return;
				}
				if (!this.userpwd) {
					uni.showToast({
						icon: 'none',
						title: '请输入密码!',
						duration: 2000
					});
					return;
				}

				
				this.http.post("login/in", {data: {"account":this.username,"pass":this.userpwd}}).then(res=>{
					var header = util.replaceAll(JSON.stringify(res.header)," ","");
					header = JSON.parse(util.replaceAll(header,"-",""));
					uni.setStorageSync("AccessToken",header.AccessToken);
					console.info(res.data)
					uni.reLaunch({
						url:'/pages/index/index'
					})
				}) .catch(error => {
					console.error('error:',error);
				});
				
// 
// 				uni.request({
// 					url: 'https://uestcapp.iect.net/login/in', //仅为示例，并非真实接口地址。
// 					data: {
// 						"account": this.username,
// 						"pass": this.userpwd
// 					},
// 					method:"POST",
// 					header: {
// 						'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
// 						'Accept': '*/*',
// 						'type': 'dev',
// 						// 'authorization': getToken()
// 					},
// 					success: (res) => {
// 						console.log(JSON.stringify(res.data));
// 						this.text = 'request success';
// 					}
// 				});
			}
		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #E8F2FC;
	}
</style>
<style lang="scss" scoped>
	$logo-padding: 120upx;
	$form-border-color: rgba(214, 214, 214, 1);
	$text-color: #B6B6B6;

	.page_login {
		padding: 20upx;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;

		.head_bg {
			border: 2upx solid #99CCFF; //#fbecf1;
			border-radius: 100upx;
			width: 200upx;
			height: 200upx;
			display: flex;
			align-items: center;
			justify-content: center;

			.head_inner_bg {
				border-radius: 80upx;
				width: 160upx;
				height: 160upx;
				display: flex;
				// background-color: #3D8FEA;
				align-items: flex-end;
				justify-content: center;
				overflow: hidden;
				background-image: url('../../static/logo.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;

			}
		}
	}

	.login_form {
		display: flex;
		margin: 40upx;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 2upx solid $form-border-color;
		border-radius: 20upx;

		.line {
			width: 100%;
			height: 2upx;
			background-color: $form-border-color;
		}

		.input {
			width: 100%;
			max-height: 90upx;
			display: flex;
			padding: 6upx;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.img {
				min-width: 80upx;
				min-height: 80upx;
				margin: 10upx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.img_del {
				width: 42upx;
				height: 42upx;
			}

			.img_pwd_switch {
				width: 56upx;
				height: 24upx;
			}

			input {
				outline: none;
				height: 60upx;
				width: 100%;

				&:focus {
					outline: none;
				}
			}
		}
	}

	.submit {
		margin-top: 60upx;
		margin-left: 40upx;
		margin-right: 40upx;
		color: white;
		background-color: #3D8FEA; //rgba(252, 44, 93, 1.0);
		-webkit-tap-highlight-color: #3D8FEA; //rgba(252, 44, 93, 1.0);

		&:active {
			color: #B6B6B6;
			background-color: #0095d9; //rgba(252, 44, 93, 0.8);
		}
	}
</style>
