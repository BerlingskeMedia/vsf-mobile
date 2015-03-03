'use strict';

app.factory('Search', function($resource, BACKEND_ADDRESS) {
    // Using realtive url, but it needs to be routed to http://search.berlingskemedia.net
    return $resource('/gateway/Search.json?source_1_name=stiften.dk&source_1_sort_by=date&source_1_rpp=5&source_1_page=:page&query=:query');
});



