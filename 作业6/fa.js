/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')
var arr = process.argv;
var path = require('path');
module.exports = function (neme,extname1,callback) {
    fs.readdir(neme,eee)
    function eee(err,list) {
        if(err)
            return callback(err)
        for(var i=0 ;i<list.length;i++){
            if(path.extname(list[i]) == '.'+arr[3] ){
                console.log(list[i])
            }else {
            }
        }
        callback(null, list)
    }

}