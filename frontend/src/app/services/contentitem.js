'use strict';

app.factory('ContentItemById', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + '/mecommobile/node/:id');
});

app.factory('ContentItemByPath', function($resource, BACKEND_ADDRESS, DOMAIN) {
    return $resource(BACKEND_ADDRESS + '/mecommobile/node/' + DOMAIN + '/:tag/:id');
});