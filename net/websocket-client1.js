var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8888');
ws.on('open', function(){
    var j = 1;
    setInterval(function(){
        //j += 2;
        ws.send(new Buffer(""+j)); // new Buffer() 字符串才行
    },1000);
});
ws.on('message', function(msg){
    console.log("from server: "+ msg);
});

ws.on('close', function(msg){
    console.log("server close");
});

ws.on('error', function(msg){
    console.log("server error");
});


// browser code  command + alt + i
//var webSocket =  new WebSocket('ws://localhost:8888');
//
//webSocket.onmessage = function(event) {
//    document.body.innerHTML = event.data;
//};
