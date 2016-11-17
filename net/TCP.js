var net = require('net');
var server = net.createServer(function(socket){
    socket.write("hello world \n");
    socket.on('data', function(data){

        try{
            var arr = data.toString().split(' ');
            var sum = 0;
            for(var i = 0; i<arr.length; i++){
                sum += parseInt(arr[i]);
            }
            socket.write(new Buffer("合计：" + sum.toString() + "\n"));
        }catch(e){
            console.log("error"+ e.message)
        }
    })
});
server.listen(8888,function(){
});

// telnet 127.0.0.1 8888