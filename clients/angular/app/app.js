'use strict';
/* jshint -W079 */
//Declare app level modle which depends on views, and components
var chatApp = angular.module('chatApp', [
  'ngRoute',
  'ngSocket'
]);

chatApp.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'views/login.html',
    controller: 'UsersController'
  })
    .when('/chat', {
      templateUrl: 'views/chatpage.html',
      controller: 'ChatController'
    }).
    otherwise({
      redirectTo: '/'
    });
}
);
