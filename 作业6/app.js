/**
 * Created by Administrator on 2017/8/11.
 */

var filterFn = require('./fa.js')
var name = process.argv[2]
var extname1 = process.argv[3]
filterFn(name,extname1, function (err, list) {
   if(err)
       return console.log('您输入的参数不正确 正确路径为:node app 路径 文档类型')
})