/**
 * Created by Administrator on 2017/8/11.
 */
var http = require('http');
var arr = process.argv;
http.get("http://"+ arr[2],callback)
    function callback(res){
        res.setEncoding('utf8');
        res.headers['content-type'];
        res.on('data',function(data){
            console.log(data.split('\n'))
        })
    }
