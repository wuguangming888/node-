/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')
var arr = process.argv;

// fs.readFile(arr[2],(err,data){
//     if (err) throw err;
//      console.log(data);
// })
fs.readFile(arr[2],'utf8',eee)
function eee(err,data) {
    if (err) throw err;
    console.log(data.split('\n').length);
}
