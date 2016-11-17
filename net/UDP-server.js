var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on("message",function(msg, rinfo){
    console.log(msg.toString());
    console.log("from: " + rinfo.address + ":" + rinfo.port);
});
server.bind("8888");

