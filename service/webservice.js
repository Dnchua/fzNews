0:请求未初始化
1：服务器已建立连接
2：请求已接受
3：请求处理中
4：请求已完成，响应已就绪

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        //响应处理
    }else{
        alert('error')
    }
}
xmlHttp.open('GET',URL,true);
xmlHttp.send(null);