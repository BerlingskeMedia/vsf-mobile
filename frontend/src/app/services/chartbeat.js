'use strict';

app.factory('Chartbeat', function($resource, config) {
  return $resource('http://api.chartbeat.com/live/toppages/v3/?apikey=' + config.chartbeatApikey + '&host=stiften.dk&types=1&limit=20');
});

