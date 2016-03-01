'use strict';

app.directive('stiftenVideoLink', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/videolink/videoLinkTemplate.html',
        controller: function ($scope, YoutubeoEmbed,$sce) {
          if ($scope.story.youtube_video_id) {
            
            //$scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.story.youtube_video_id);
            var data = YoutubeoEmbed.get({ youtubeid: $scope.story.youtube_video_id });
            data.$promise.then(function(data){
              console.log(data);
              $scope.video = $sce.trustAsHtml(data.html);
            });
          }

        }
    };
});