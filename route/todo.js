//引入express 框架
const express = require('express');

//创建 todo路由
const todo = express.Router();

//创建二级路由
//获取任务列表路由
todo.get('/task',require('./todo/task'));

//添加任务
todo.post('/add',require('./todo/add'));

//删除任务
todo.get('/remove',require('./todo/remove')); 

//改变任务状态
todo.post('/checked',require('./todo/checked'));

//改变任务信息
todo.post('/edit',require('./todo/edit'));

//清空任务
todo.post('/clear',require('./todo/clear'));

//导出当前二级路由
module.exports = todo;