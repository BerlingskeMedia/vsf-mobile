'use strict';

app.factory('YoutubeoEmbed', function($resource, BACKEND_ADDRESS) {
    return $resource(BACKEND_ADDRESS + '/yt_oembed?id=:youtubeid');
});



