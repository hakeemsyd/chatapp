'use strict'

//Declare app level modle which depends on views, and components
angular.module('chatClient', [
   'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: 'index.html'});
}]);
