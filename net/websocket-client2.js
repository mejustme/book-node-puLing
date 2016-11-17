var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8888');
ws.on('open', function(){
    var i = 1;
    setInterval(function(){
        //i += 1;
        ws.send(new Buffer(""+i));
    },1000);

});
ws.on('message', function(msg){
    console.log("msg from server: "+ msg);
});

ws.on('close', function(msg){
    console.log("server close");
});

ws.on('error', function(msg){
    console.log("server error");
});