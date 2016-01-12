'use strict';



app.factory('User', function($http, config) {
 
  function login(user) {
    return $http.post(config.ssoEndpoint, user);
  }


  var service = {
    login: login,
  };

  return service;
});
