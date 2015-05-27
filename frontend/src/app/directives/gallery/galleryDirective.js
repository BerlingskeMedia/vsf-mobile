'use strict';

app.directive('stiftenGallery', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/gallery/galleryTemplate.html',
        controller: function ($scope) {
            $scope.images = $scope.story.media.image;
            $scope.listenerAttached = false;
            $scope.currentSlide = 0;

            $scope.$watch('flipsnap', function(){
                if ('flipsnap' in $scope) {
                    $scope.setSlide = function(id) {
                        $scope.currentSlide = id;
                        $scope.flipsnap.moveToPoint(id);
                    }
                    if (!$scope.listenerAttached) {
                        $scope.listenerAttached = true;
                        var el = $scope.flipsnap.element;
                        el.addEventListener('fstouchend', function(ev) {
                            $scope.currentSlide = ev.newPoint;
                        }, false);
                    }

                };
            })
        }
    };
});