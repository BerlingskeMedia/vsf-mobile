'use strict';

app.factory('ContentItemById', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + '/mecommobile/node/:id?mmfd_version=2.0&show_embedded=true&field_keys=true&output_type=json&image_size=:imagesize&show_video&author_image_size=400x400-c');
});

app.factory('ContentItemByPath', function($resource, BACKEND_ADDRESS, DOMAIN) {
    return $resource(BACKEND_ADDRESS + '/mecommobile/node/' + DOMAIN + '/:tag/:id?mmfd_version=2.0&show_embedded=true&field_keys=true&output_type=json&image_size=:imagesize&show_video&author_image_size=400x400-c');
});