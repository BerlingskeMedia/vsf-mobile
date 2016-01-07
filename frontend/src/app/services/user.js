'use strict';



app.factory('User', function($http) {
 
  function login(user) {
      console.log('login sertvice!' ,user);
    $http.post('/api/sso-server/authenticate-extended.json', user).then(function(data){
             console.log(data);
    });
  }


  var service = {
    login: login,
  };

  return service;
});
