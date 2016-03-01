'use strict';

app.factory('YoutubeoEmbed', function($resource) {

    return $resource(BACKEND_ADDRESS + '/yt_oembed?id=:youtubeid');

});



