<template>
	<view class="container"> 
		<view class="list-cell">
			<cmd-cell-item class="cell-item_I" title="课程名称" slot-right>
				<view>{{detailData.courseName}}</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="实验名称" slot-right>
				<view>{{detailData.name}}</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="实验简介" :brief="detailData.description"> 
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="实验类型" slot-right>
				<view>{{detailData.cur_status == 1 ? '个人实验' : '分组实验'}}</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="实验资料" slot-right>
				<view v-for="(item, index) in detailData.experimentsData" :key="index">{{item.name}}，</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I mart15" title="实验安排" slot-right arrow>
				
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="实验任务" slot-right arrow @click="goToTaskPage">
				<view>{{taskListData.length}}个</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I mart15" title="教师" slot-right arrow @click="goToExersicePage">
				<view v-for="(item, index) in teachers" :key="index">{{item.user_name}}，</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="助教" slot-right arrow>
				<view v-for="(item, index) in tutors" :key="index">{{item.user_name}}，</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="学生" slot-right arrow>
				<view>{{studentCount(students)}}人</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I mart15" title="留言板" slot-right arrow>
				<view>{{messageListData.length}}条</view>
			</cmd-cell-item>
		</view>
	</view>
</template>

<script>
	import cmdCellItem    from '../../components/cmd-cell-item/cmd-cell-item.vue'
	export default {
		components:{cmdCellItem},
		data() {
			return {
				detailData: {
					"id": 45,
					"creator": 107,
					"cur_status": 1,
					"create_time": 1555057070000,
					"name": "实验③",
					"course_id": 87,
					"etype": 1,
					"description": "实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③实验③",
					"courseName": "计算机网络管理",
					"creatorName": "姚",
					"participant": {
						"id": 206,
						"creator": null,
						"cur_status": 1,
						"create_time": null,
						"member_id": 322,
						"experiment_id": 45,
						"group_num": 6,
						"group_type": 1,
						"type": 3,
						"score": null,
						"user_id": null,
						"course_id": null,
						"account": null,
						"user_name": "姚",
						"sim_desc": null,
						"head_img": null,
						"faculty": null,
						"facultyName": null,
						"phone_num": null,
						"mail": null,
						"admission_time": null,
						"sex": null,
						"sheet_id": null
					},
					"experimentsData": [{
						"id": 17,
						"creator": null,
						"cur_status": null,
						"create_time": null,
						"name": "微信图片_20190319170654.jpg",
						"path": "/public/user/107/yaohy/1557385338553.jpg",
						"associated_object": null,
						"ao_type": null
					}],
					"teacher": [{
						"id": 205,
						"creator": null,
						"cur_status": null,
						"create_time": null,
						"member_id": null,
						"experiment_id": null,
						"group_num": 5,
						"group_type": null,
						"type": 2,
						"score": null,
						"user_id": 107,
						"course_id": 87,
						"account": "yaohy",
						"user_name": "姚",
						"sim_desc": null,
						"head_img": "/public/user/107/yaohy/1557028578307.jpg",
						"faculty": 75,
						"facultyName": "通信学院",
						"phone_num": null,
						"mail": null,
						"admission_time": null,
						"sex": null,
						"sheet_id": null
					}],  
				},
				"teachers": [{	//教师
					"id": 316,
					"creator": null,
					"cur_status": null,
					"create_time": null,
					"course_id": null,
					"user_id": 107,
					"type": 2,
					"score": null,
					"account": "yaohy",
					"user_name": "姚",
					"sim_desc": null,
					"head_img": "/public/user/107/yaohy/1557028578307.jpg",
					"faculty": 75,
					"facultyName": "通信学院",
					"group_num": null,
					"phone_num": null,
					"mail": null,
					"admission_time": null,
					"sex": null,
					"sex_str": null
				}],
				"tutors": [{	//助教
					"id": 315,
					"creator": null,
					"cur_status": null,
					"create_time": null,
					"course_id": null,
					"user_id": 107,
					"type": 1,
					"score": null,
					"account": "yaohy",
					"user_name": "姚",
					"sim_desc": null,
					"head_img": "/public/user/107/yaohy/1557028578307.jpg",
					"faculty": 75,
					"facultyName": "通信学院",
					"group_num": null,
					"phone_num": null,
					"mail": null,
					"admission_time": null,
					"sex": null,
					"sex_str": null
				}],
				"students": [	//学生
					[{
						"id": 206,
						"creator": null,
						"cur_status": null,
						"create_time": null,
						"member_id": null,
						"experiment_id": null,
						"group_num": 6,
						"group_type": null,
						"type": 3,
						"score": null,
						"user_id": 107,
						"course_id": 87,
						"account": "yaohy",
						"user_name": "姚",
						"sim_desc": null,
						"head_img": "/public/user/107/yaohy/1557028578307.jpg",
						"faculty": 75,
						"facultyName": "通信学院",
						"phone_num": null,
						"mail": null,
						"admission_time": null,
						"sex": null,
						"sheet_id": null
					}]
				],
				messageListData: [{	//留言条数
					"id": 1,
					"creator": 107,
					"cur_status": 1,
					"create_time": 1557367994000,
					"type": 1,
					"associated_object": 87,
					"info": "de",
					"creatorName": "姚",
					"head_img": "/public/user/107/yaohy/1557028578307.jpg"
				}],
				"taskListData": [{  //实验任务
					"id": 4,
					"creator": 107,
					"cur_status": 2,
					"create_time": 1557034572000,
					"experiment_id": 45,
					"name": "考勤考勤001",
					"value": 1,
					"score": 1.0,
					"adopt_score": null,
					"end_time": null,
					"is_block": 2,
					"description": "我卡上开发法",
					"genre": null,
					"type": 3,
					"task_files": null,
					"associated_object": null
				}]
			}
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: this.detailData.name,
			})
		},
		methods: { 
			/* 组装学生人数 */
			studentCount(studentsList){
				var count = 0;
				studentsList.forEach((item) => {
					item.forEach((itemM) => {
						count++;
					})
				});
				return count;
			}, 
			goToTaskPage(){ 
				uni.navigateTo({
					url: "/pages/course/task-list/task-list?exersice_id=" + this.detailData.id,
				})
			},
		}
	}
</script>

<style lang="scss" scoped>  
.cell-item_I{
	background: #fff;
}
.cmd-cell-item-brief{
	max-height: initial!important;
}
</style>
