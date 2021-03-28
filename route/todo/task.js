//任务列表获取路由

//获取任务集合
const { Task } = require('../../model/task');

module.exports = async (req,res) => {
    let task = await Task.find();
    res.send(task);
}