'use strict';

app.factory('Search', function($resource, BACKEND_ADDRESS) {
    return $resource('http://search.berlingskemedia.net/gateway/Search.json?source_X_name=stiften.dk&query=:query');
});



