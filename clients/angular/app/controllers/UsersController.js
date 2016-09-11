'use strict';
chatApp.controller('UsersController',
  function($scope,$location, Client){
    $scope.username = "";

    $scope.enterChat = function(){
      if($scope.username !== ""){
        Client.setUsername($scope.username);
        $location.url('/chat');
      }
    };
  }
);
