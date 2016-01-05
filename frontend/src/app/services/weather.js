'use strict';

app.factory('Weather', function($resource) {
    // Using realtive url, but it needs to be routed to http://search.berlingskemedia.net
    return $resource('http://api.openweathermap.org/data/2.5/forecast?q=:city&mode=json&units=metric&APPID=ac022275fd9d4d7886929e7db1cdddaf');
});



