'use strict';

app.directive('stiftenVideoLink', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/videolink/videoLinkTemplate.html',
        controller: function ($scope, YoutubeoEmbed,$sce) {
          if ($scope.story.youtube_video_id) {
            // Youtube videos just have an id, so we use a proxied oEmbed to get dimensions and iframe html.
            // It's proxied to avoid CORS-issues.
            var data = YoutubeoEmbed.get({ youtubeid: $scope.story.youtube_video_id });
            data.$promise.then(function(data){
              $scope.video = $sce.trustAsHtml(data.html);
            });
          }

        }
    };
});