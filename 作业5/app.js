/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')
var arr = process.argv;
var path = require('path');
fs.readdir(arr[2],eee)
function eee(err,list) {
for(var i=0 ;i<list.length;i++){
       if(path.extname(list[i]) == '.'+arr[3] ){
           console.log(list[i])
       }else {
       }
}
}