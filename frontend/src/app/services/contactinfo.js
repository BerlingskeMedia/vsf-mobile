'use strict';

app.factory('ContactInfo', function($http, BACKEND_ADDRESS) {
  return {
    get: function() {
      return $http.get(BACKEND_ADDRESS + '/contactinfo');
    }
  }
});

