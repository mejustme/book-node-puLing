var http = require('http');
var req = http.request({
    hostname: '127.0.0.1',
    port: 8000,
    path: '/',
    method: "GET"
}, function(res){
    console.log(res.statusCode);
    res.setEncoding("utf8");
    console.log(res.headers);
    res.on('data',function(chunk){
        console.log(chunk)
    });
});
req.end(); // 必须有
