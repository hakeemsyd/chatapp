'use strict';
chatApp.factory('Client',
  function($socket){
    var username = "chuss";
    var count = 0;

    var that = this;
    return {
      setUsername: function(user){
        that.username = user;
      },
      user: function(){
        return username;
      },
      setUserCount: function(c){
       that.count = c;
      },
      getCount : function(){
        return that.count;
      }
    };
  }
);
