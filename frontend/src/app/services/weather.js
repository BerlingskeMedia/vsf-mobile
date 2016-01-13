'use strict';

app.factory('Weather', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + '/weather?q=:city');
});



