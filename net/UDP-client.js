var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var message = new Buffer("hello first UDP message");
client.send(message, 0, message.length, 8888, "localhost", function () {
    console.log("send success");
});

