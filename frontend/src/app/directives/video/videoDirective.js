'use strict';

app.directive('stiftenVideo', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/video/videoTemplate.html',
        controller: function ($scope, $sce) {
            $scope.trustSrc = function(src) {
              return $sce.trustAsResourceUrl(src);
            }
            $scope.videoUrl = $scope.story.guid;
            console.log($scope.videoUrl);
        }
    };
});