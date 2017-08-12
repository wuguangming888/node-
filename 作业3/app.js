/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')
var buf =    fs.readFileSync('ls3.txt')
var str = buf.toString()
console.log(str.split('\n').length)
