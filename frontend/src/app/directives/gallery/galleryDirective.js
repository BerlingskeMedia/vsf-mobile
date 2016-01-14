'use strict';

app.directive('stiftenGallery', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/gallery/galleryTemplate.html',

        controller: function ($scope, $window, $timeout) {
            if ('media' in $scope.story && 'image' in $scope.story.media) {
                $scope.images = $scope.story.media.image;
                $scope.listenerAttached = false;
                $scope.currentSlide = 0;
                $scope.showGalleryOverlay = false;
                $scope.toggleGalleryOverlay = function() {
                    if ($scope.story.plus_access!==undefined && !$scope.story.plus_access) {
                      return;
                    }
                    $scope.showGalleryOverlay = !$scope.showGalleryOverlay;
                    if ($scope.showGalleryOverlay) {
                      $scope.flipsnap.element.style.width = ($scope.images.length * 100) + 'vw';
                      $timeout(function(){
                          $scope.flipsnap.refresh();
                      }, 500);
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
                    }
                }
            }

        }
    };
});