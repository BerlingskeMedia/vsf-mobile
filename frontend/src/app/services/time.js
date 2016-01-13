'use strict';



app.factory('Time', function($http, BACKEND_ADDRESS) {
 
  function getTime() {
    return $http.get(BACKEND_ADDRESS + '/time');
  }


  var service = {
    getTime: getTime,
  };

  return service;
});
