//在todo数据库创建集合task
const mongoose = require('mongoose');

//创建task集合规则
const taskSchema = new mongoose.Schema({
    completed: {
        type: Boolean,
        required: [true,'是否完成为必填项目'],
        default: false
    },
    title: {
        type: String,
        required: [true,'内容为必填项']
    }
});

//创建集合
const Task = mongoose.model('Task',taskSchema);

// Task.create({
//     title: '睡觉'
// },{
//     title: '上网'
// },{
//     title: '打游戏'
// }
// )

//导出任务集合
module.exports = {
    Task
}