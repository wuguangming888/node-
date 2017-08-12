/**
 * Created by Administrator on 2017/8/12.
 */
var net = require('net')
var arr = process.argv;
var server = net.createServer(function(socket){
    //socket 处理逻辑

})
server.listen(arr[2],function() {
    var date = new Date();
    var year =  date.getFullYear()
     var month = date.getMonth()+1
  var data = date.getDate()
   var hours = date.getHours()
   var minutes =    date.getMinutes()
    month < 10 ? '0'+month :month
    data < 10 ? '0'+data :data
    hours < 10 ? '0'+hours :hours
    minutes < 10 ? '0'+minutes :minutes
    console.log(year.toString() +'-' + month.toString()+'-' + data.toString()+'   ' + hours.toString() +':'+ minutes.toString())

})