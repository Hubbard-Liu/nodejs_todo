//mongodb数据库连接
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://admin:123456@127.0.0.1:27017/todo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('连接数据成功'))
  .catch(err => console.log('连接数据库失败' + err));
