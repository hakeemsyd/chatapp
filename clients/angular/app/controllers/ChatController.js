'use strict';
chatApp.controller('ChatController',
  function ChatController($scope, Client){
    $scope.messages = [];
    $scope.textMessage = "";

    Client.ws().onMessage(function(m){
      $scope.messages.push({user:Client.user(), message:m.data});
    });

    $scope.send = function(){
      if($scope.textMessage !== ""){
        Client.ws().send($scope.textMessage);
        $scope.textMessage = "";
      }
    };
  }
);
