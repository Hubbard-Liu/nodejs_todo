//todo 项目
//引入express 框架
const express = require('express');

//引入path模块拼接地址
const path = require('path');

//接收post请求处理模块 
const bodyParser = require('body-parser');

//连接数据库
require('./model/connect');

//导入todo二级路由
const todo = require('./route/todo');

//创建服务器
const app = express();

//接收json请求
app.use(bodyParser.json());

// //接收post请求
// app.use(bodyParser.urlencoded({extended: false}));

//静态资源响应
app.use(express.static(path.join(__dirname,'public')));

//创建二级路由
app.use('/todo',todo);

//监听端口
app.listen(80);

console.log('服务器启动成功');