//改变任务状态路由

const { Task } = require('../../model/task');

module.exports = async (req,res) => {
    let { _id, completed } = req.body;
    await Task.updateOne({_id: _id}, {completed: completed});//根据查询结果修改数据
    let newData = await Task.findOne({_id: _id});
    res.status(200).send(newData);
}