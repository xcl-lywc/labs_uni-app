<template>
	<view class="container"> 
		<view class="list-cell">
			<cmd-cell-item class="cell-item_I" title="课程名称" slot-right>
				<view>{{detailData.name}}</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="课程简介" :brief="detailData.description"> 
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="课程大纲" slot-right>
				<view v-for="(item, index) in detailData.syllabus" :key="index">{{item.name}}，</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="课程资料" slot-right>
				<view v-for="(item, index) in detailData.courseData" :key="index">{{item.name}}，</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="课程组长" slot-right arrow>
				<view v-for="(item, index) in groupLeaders" :key="index">{{item.user_name}}，</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="任课教师" slot-right arrow>
				<view>{{teachers ? teachers.length : 0}}人</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="实验安排" slot-right arrow @click="goToExersicePage">
				<view>{{exersicesListData ? exersicesListData.length : 0}}个</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="学生名单" slot-right arrow>
				<view>{{studentCount(students)}}人</view>
			</cmd-cell-item>
			<cmd-cell-item class="cell-item_I" title="留言板" slot-right arrow>
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
				detailData: { 	//课程详情
					"id": 90,
					"creator": 115,
					"cur_status": 1,
					"create_time": 1557298085000,
					"name": "新建教室01",
					"c_code": "01",
					"c_teacher": "苏大强",
					"c_nature": "教学实验",
					"description": "查看化学实验课程",
					"courseManager": "教师",
					"courseLeader": [],
					"courseData": [{
						"id": 12,
						"creator": null,
						"cur_status": null,
						"create_time": null,
						"name": "党员考察记录.docx",
						"path": "/public/user/115/js01/1557298105276.docx",
						"associated_object": null,
						"ao_type": null
					}],
					"syllabus": [{
						"id": 11,
						"creator": null,
						"cur_status": null,
						"create_time": null,
						"name": "政审材料.docx",
						"path": "/public/user/115/js01/1557298101715.docx",
						"associated_object": null,
						"ao_type": null
					},{
						"id": 11,
						"creator": null,
						"cur_status": null,
						"create_time": null,
						"name": "政审材料.docx",
						"path": "/public/user/115/js01/1557298101715.docx",
						"associated_object": null,
						"ao_type": null
					}]
				},
				"teachers": [{	//任课教师
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
				"groupLeaders": [{	//课程组长
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
				exersicesListData: [{	//实验安排
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
				students: [{	//学生名单
					"facultyName": "通信学院",
					"cMembers": [{
						"id": 322,
						"creator": null,
						"cur_status": null,
						"create_time": null,
						"course_id": null,
						"user_id": 107,
						"type": 3,
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
					}]
				}],
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
				}]
			}
		},
		methods: { 
			/* 组装学生人数 */
			studentCount(studentsList){
				var count = 0;
				studentsList.forEach((item) => {
					item.cMembers.forEach((itemM) => {
						count++;
					})
				});
				return count;
			},
			/* 跳转实验安排页 */
			goToExersicePage(){
				uni.navigateTo({
					url: '/pages/course/exersice'
				})
			}
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
