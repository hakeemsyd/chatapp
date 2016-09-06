'use strict';
chatApp.controller('UsersController',
  function($scope, Client){
    $scope.users = Client.users; 
  }
);
