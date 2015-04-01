'use strict';

app.factory('Cities', function($resource) {
    // Using realtive url, but it needs to be routed to http://search.berlingskemedia.net
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:city&type=like');
});



