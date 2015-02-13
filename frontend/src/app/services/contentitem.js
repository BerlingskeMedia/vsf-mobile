'use strict';

app.factory('TagContentItem', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + 'tags/:tag/contentitems/:id');
});

app.factory('ContentItems', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + 'contentitems/:id/:action');
});
