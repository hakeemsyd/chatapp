var ws = require('nodejs-websocket');

var server = ws.createServer(function(conn){
  console.log('New Connection');
 // console.log(this.socket.getConnections());

  conn.on("connect", function(){
    conn.message("Hello form server");
  });

  conn.on("text", function(m){
    var obj = JSON.parse(m);
    console.log(obj);
    console.log("Received: " + obj.message + ", from: " + obj.name);
    //conn.sendText('Message recieved');
    broadcast( obj.message, conn);
  });

  conn.on("close", function(code, reason){
    console.log("Connection closed");
  });

}).listen(5000);

function broadcast(m){
  server.connections.forEach(function(conn){
      conn.sendText(m);
  });
};
