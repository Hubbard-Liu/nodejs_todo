//封装jsonp 函数
function jsonp(params){
    let script = document.createElement('script');
    //0.拼接传输的data数据
    let data = ``;
    for (let i in params.data) { //遍历传输过来的data数据 然后拼接
        data += `&${i}=${params.data[i]}`;
    }

    console.log(data);
    //1.创建任意函数名
    let fuName = 'jsonp' + Math.random().toString().replace('.',''); //此处函数名不能以字母开头
    //2.把传入的函数引入全局
    window[fuName] = params.success;
    script.src = params.url + '?callback=' + fuName + data;
    document.body.appendChild(script);
    script.onload = function(){
        document.body.removeChild(script);
    }
}

// jsonp({
//     url: 'http://127.0.0.1:81/jsonp?callback=',
//     success: function (data) {
//         console.log(data);
//     },
//     data: {
//         name: 'xbw',
//         age: 18
//     }
// })