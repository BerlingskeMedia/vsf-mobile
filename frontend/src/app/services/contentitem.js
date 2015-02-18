'use strict';

app.factory('ContentItems', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + 'contentitems/:id/:action');
});
