'use strict';
chatApp.factory('Client',
  function(ngSocket){
    var username = "";
    var ws = ngSocket('ws://localhost:5000');
    //ws.send("Hello from client");

    return {
      ws : function(){
        return ws;
      },
      setUsername: function(user){
        username = user;
      }
    };
  }
);
