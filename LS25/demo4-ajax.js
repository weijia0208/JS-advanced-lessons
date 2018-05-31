/*
http标识符
    1xx:信息位
    2xx:请求成功
    3xx:重定向，请求没有成功
    4xx:客户端错误
    5xx:服务器错误
*/
//XMLHttpRequest();
//open:open(method(发送请求方法get/post),url,async(同步(false)/异步(true默认)))


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get","http://127.0.0.1:8080?getInfo=MyGetInformation",true);
xhr.send();