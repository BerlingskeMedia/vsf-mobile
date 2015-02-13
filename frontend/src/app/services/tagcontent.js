'use strict';

app.factory('TagContent', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + 'tags/:tag/contentitems/:action');
});




