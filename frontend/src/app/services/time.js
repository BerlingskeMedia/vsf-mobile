'use strict';



app.factory('Time', function($http, config) {
 
  function getTime() {
    return $http.get(config.timeEndpoint);
  }


  var service = {
    getTime: getTime,
  };

  return service;
});
