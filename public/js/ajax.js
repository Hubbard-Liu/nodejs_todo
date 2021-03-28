//封装好的ajax
//封装ajax函数 判断get post请求方式
function ajax(params) {
    //设置参数默认值
    defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function () {},
        error: function () {}
    };

    Object.assign(defaults, params); //此处为拷贝当前传输过来的对象，没有的话用默认值 assign为浅拷贝
    // console.log(defaults);


    let xhr = new XMLHttpRequest();
    let urlData = ``; //储存拼接字符串
    //拼接字符串
    for (let value in defaults.data) {
        urlData += value + '=' + defaults.data[value] + '&';
    }
    //字符串切片
    urlData = urlData.substr(0, urlData.length - 1);

    //判断当前请求方式
    if (params.type == 'get') {
        //设置ajax请求方式
        xhr.open(defaults.type, `${defaults.url}?${urlData}`);
        xhr.send();
    } else if (defaults.type == 'post') {
        let contentType = defaults.header['Content-Type'];
        xhr.open(defaults.type, defaults.url)
        xhr.setRequestHeader('Content-Type', contentType);
        if (contentType == 'application/json') { //判断当前头文件的格式
            xhr.send(JSON.stringify(defaults.data));
        } else {
            xhr.send(urlData);
        }

    }
    //服务器向客户端响应
    xhr.onload = function () {
        //获取响应头数据
        let getType = xhr.getResponseHeader('Content-Type');
        //获取响应数据
        let responseText = xhr.responseText;
        // console.log(getType);
        //判断当前响应的数据类型
        if (getType.includes('application/json')) { //判断当前头文件是否包含json格式
            responseText = JSON.parse(responseText); //转换接收到的json数据
        }

        //判断当前http状态码
        if (xhr.status == 200) { //status为状态码
            //请求成功
            params.success(responseText);
        } else {
            params.error(responseText, xhr)
        }
    }
}

