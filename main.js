import Vue from 'vue'
import App from './App'
import './common/icon.css'
import request  from '@/common/request.js'
Vue.config.productionTip = false

/* 引入页面样式文件 */
import '@/static/css/color-ui.css'//colorui-uni-app 通用样式
import '@/static/css/color-icon.css'//colorui-uni-app icon 样式
import '@/static/css/icon.css'//uni-app icon 样式
import '@/static/css/common.css'//自定义通用样式

App.mpType = 'app'
request.setConfig({
  baseUrl: 'http://192.168.31.9:18082', 
	dataType: 'json', //formdata 可删除，默认为json
	responseType: 'json', // 可删除，默认为text
  // 设置请求头，支持所有请求头设置，也可不设置，去掉header就行
  header: {
   'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
   'Accept': '*/*',
	 'type':'dev',
   'Access-Token': uni.getStorageSync("AccessToken")
  }
})
// 设置请求拦截器
request.interceptors.request(config => {
  // 配置参数和全局配置相同，此优先级最高，会覆盖在其他地方的相同配置参数

  // 追加请求头，推荐
  // config.header['content-type'] = 'application/json';
  // config.header.token = 'token from interceptors';

  // 覆盖请求头
  // config.header = {
    // 'content-type': 'application/json',
    // 'token': 'token from interceptors'
  // }

  // return false; // 终止请求
  // return Promise.reject('error from request interceptors'); // 向外层抛出错误，用catch捕获
  return config; // 返回修改后的配置，如未修改也需添加这行
})

// 设置响应拦截器
request.interceptors.response(res => {
  // 接收请求，执行响应操作
  // 您的逻辑......

  // return false;    // 阻止返回,页面不会接收返回值
  // return {message: '自定义值，来自拦截器'};   // 返回您自定义的值，将覆盖原始返回值
  // return Promise.reject('error from response interceptors') // 向外层抛出错误，用catch捕获
  return res; // 原样返回
})

// // 挂载到全局vue实例上，在页面中可以使用this.$request调用request实例下相应方法
Vue.prototype.http = request;
const app = new Vue({
    ...App
})
app.$mount()
