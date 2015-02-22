'use strict';

app.factory('Latest', function($resource, BACKEND_ADDRESS) {
    
    return $resource('http://www.stiften.dk/mecommobile/latest/:type/:id/:items?output_type=json&mmfd_version=2.0&show_related=true&show_external=true&show_external_sources=true&image_size=866x487-c');
});

