'use strict';

app.factory('Search', function($resource, BACKEND_ADDRESS) {
    //return $resource('http://search.berlingskemedia.net/gateway/Search.json?source_1_name=stiften.dk&query=:query');
    return $resource('/gateway/Search.json?source_1_name=stiften.dk&source_1_sort_by=date&source_1_rpp=5&source_1_page=:page&query=:query');
});



