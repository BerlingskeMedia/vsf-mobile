'use strict';



app.factory('User', function($http, BACKEND_ADDRESS) {
 
  function login(user) {
    return $http.post(BACKEND_ADDRESS + '/sso', user);
  }


  var service = {
    login: login,
  };

  return service;
});
