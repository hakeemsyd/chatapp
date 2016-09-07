'use strict';
chatApp.factory('Client',
  function($websocket){
    var messages = ["Hello, How are you?", "Are you there?", "wajj bhainjs"];
    var users = ["Pappu", "Gullu", "Jhon"];
    
    var dataStream = $websocket('ws://localhost:5000');

    dataStream.onMessage(function(message) {
      console.log(message);
    });

    var send = function(m){
      dataStream.send(m);
    };
    
    return {
      messages,
      users,
      send : function(m){
        return send(m);
      }
    };
  }
);
