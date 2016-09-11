'use strict';
chatApp.controller('ChatController',
  function ChatController($scope, Client, $socket){
    $scope.messages = [];
    $scope.textMessage = "";
    $scope.count = Client.count;

    $scope.messages.push({type:'log', log:'there are ' + Client.getCount() + ' people'});

    $socket.on('new message', function(data){
      $scope.messages.push(data);
    });

    $scope.send = function(){
      if($scope.textMessage !== ""){
        $socket.emit('new message', $scope.textMessage);
        $scope.textMessage = "";
      }
    };
  }
);
