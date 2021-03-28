//清空路由
const { Task } = require('../../model/task');

module.exports = async (req,res) => {
    await Task.deleteMany({});
    res.send('ok');
}