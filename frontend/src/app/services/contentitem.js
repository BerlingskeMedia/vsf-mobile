'use strict';

app.factory('ContentItemById', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + '/mecommobile/node/:id?show_embedded=true&field_keys=true&output_type=json&image_size=:imagesize');
});

app.factory('ContentItemByPath', function($resource, BACKEND_ADDRESS, DOMAIN) {
    return $resource(BACKEND_ADDRESS + '/mecommobile/node/' + DOMAIN + '/:tag/:id?show_embedded=true&field_keys=true&output_type=json&image_size=:imagesize');
});