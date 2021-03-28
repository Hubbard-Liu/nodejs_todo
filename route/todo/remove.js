//根据id删除路由

//引入集合
const { Task } = require('../../model/task');

module.exports = async (req,res) => {
    let id = req.query._id;
    let removeId = await Task.findOneAndRemove({_id: id});
    res.send(removeId);
}