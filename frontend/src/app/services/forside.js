'use strict';

app.factory('ForsideContent', function($resource, BACKEND_ADDRESS) {
    return $resource('http://stiften.dk/mecommobile/nodequeue/1011/15?output_type=json&mmfd_version=2.0&show_related=true&show_external=true&show_external_sources=true');
});




