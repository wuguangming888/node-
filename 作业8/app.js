/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http');
var arr = process.argv;
var bl = require('bl')
http.get("http://"+ arr[2],callback)
function callback(res){
    // /不使用模块
    // var  even = ''
    //   res.on('data',function(data){
    //      even = data.toString()
    //       console.log(even.length)
    //  })
    // res.on('end',function(data){
    //  不知道为什么 这个变量的作用域不生效  并没有把 复制之后的带来过
    //     even = data +even
    //     console.log(even.length)
    //     console.log(even)
    // })
    res.pipe(bl(function(err,data){
        console.log(data.length)
        console.log(data.toString())
    }))
}

