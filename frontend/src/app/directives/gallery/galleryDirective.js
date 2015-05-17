'use strict';

app.directive('stiftenGallery', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/gallery/galleryTemplate.html',
        controller : function($scope) {

            $scope.images = $scope.story.media.image;
        }
    };
});