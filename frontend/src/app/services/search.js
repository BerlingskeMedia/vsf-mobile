'use strict';

app.factory('Search', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + '/search?page=:page&query=:query');
});



