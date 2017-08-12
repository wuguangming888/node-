/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http');
var bum = [];
var arr = process.argv;
http.get("http://"+arr[2], function(res){
    res.setEncoding('utf8');
    res.headers['content-type'];
    res.on('data', function(data){
        bum[0] += data.toString();
    });
    res.on('end', function(data){


    });
});
http.get("http://"+arr[3], function(res){
    res.setEncoding('utf8');
    res.headers['content-type'];
    res.on('data', function(data){
        bum[1] += data.toString();
    });
    res.on('end', function(data){

    });
});
http.get("http://"+arr[4], function(res){
    res.setEncoding('utf8');
    res.headers['content-type'];
    res.on('data', function(data){
        bum[2] += data;
    });
    res.on('end', function(data){

            console.log(bum[0]+bum[1]+bum[2]);
       console.log('乱码问题解决不掉  百度的可以获取所有代码 别的网址不行')
    });
});
