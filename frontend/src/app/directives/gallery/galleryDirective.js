'use strict';

app.directive('stiftenGallery', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/gallery/galleryTemplate.html',
        controller: function ($scope, $window) {
            $scope.images = $scope.story.media.image;
            $scope.listenerAttached = false;
            $scope.currentSlide = 0;
            $scope.showGalleryOverlay = true;
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

                        angular.element($window).bind('resize', function() {
                            $scope.flipsnap.element.style.width = ($scope.images.length * 100) + 'vw';
                            $scope.flipsnap.refresh();
                        });
                    }
                };
            })
        }
    };
});