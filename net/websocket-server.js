var WebSocket = require('ws');
var wss = WebSocket.Server({
    port: 8888
});

var wsMap = {};
var wsCount = 0;
var id;
var total = 0;
wss.on('connection', function(ws){
    ws.id = id = new Date().getTime();
    wsMap[id] = {
        name: "client" + (++wsCount),
        sum: 0,
        ws: ws
    };

    (function (ws){
        ws.on('message', function(msg){
            var value = parseInt(msg.toString());
            wsMap[ws.id].sum += value ;
            var response = wsMap[ws.id].name + " current total sum is：" + wsMap[ws.id].sum;
            ws.send(response);

            total += value;
            console.log("all client total is: " + total);
        });
    })(ws);

    ws.send('welcome, I am you server');

});

setInterval(function(){
   for(var key in wsMap){
       wsMap[key].ws.send("all client total is: " + total)
   }
}, 3000);
