'use strict';
chatApp.controller('ChatController',
  function ChatController($scope, Client){
     $scope.messages = Client.messages;
  }
);
