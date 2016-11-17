var http = require('http');
var helloword = '';
for(var i = 0; i < 1024 * 10; i++){
    helloword += 'a';
}
//helloword = new Buffer(helloword);
http.createServer(function(req, res){
    res.writeHead(200);
    res.end(helloword);
}).listen(8000);

// buffer 性能测试
// ab -c 1000 -n 1000 http:127.0.0.1:8000