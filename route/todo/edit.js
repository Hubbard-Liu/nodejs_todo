//修改当前标题信息

const { Task } = require('../../model/task');

module.exports = async (req,res) => {
    const { _id, title } = req.body;
    await Task.updateOne({_id: _id},{title: title});
    let newId = await Task.findOne({_id: _id});
    res.status(200).send(newId);
}