//browser code  command + alt + i
var webSocket =  new WebSocket('ws://localhost:8888');
webSocket.onmessage = function(event) {
    document.body.innerHTML = event.data;
};