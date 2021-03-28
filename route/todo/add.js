//添加任务

//导入用户集合
const { Task } = require('../../model/task');

module.exports = async (req,res) => {
    let titles = req.body.title; //此处接收json对象 使用body接收解析 需要引入模块bodyParser 并设置
    let add = await Task.create({
        title: titles
    });
    res.status(200).send(add);
}