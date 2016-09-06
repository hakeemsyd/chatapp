'use strict';
chatApp.factory('Client',
  function(){
    var messages = ["Hello, How are you?", "Are you there?", "wajj bhainjs"];
    var users = ["Pappu", "Gullu", "Jhon"];

    return {
      messages,
      users
    }
  }
);
