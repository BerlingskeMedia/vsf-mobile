'use strict';

app.directive('stiftenScroller', function(){
    return {
        restrict: 'AEC',
        controller: function($rootScope, $window, $timeout, $location, $document) {

          if (!('scrollPositions' in $rootScope)) {
            $rootScope.scrollPositions = {};
          }


          $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.saveLastScrollPosition = false;
            if (current && current.scope.scrollRoute) {
              $rootScope.saveLastScrollPosition = true;
              $rootScope.lastLocation = current;
            }
          });


          $rootScope.$on("$locationChangeStart",function(event, next, current){
            if ($rootScope.saveLastScrollPosition) {
              $rootScope.scrollPositions[current] = $window.scrollY;
            }
          });


          $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
              if ($location.absUrl() in $rootScope.scrollPositions && !$rootScope.dontScroll) {
                $timeout(function(){
                  $document.scrollTopAnimated($rootScope.scrollPositions[$location.absUrl()], 400).then(function() {
                  });
                }, 1000)
              }
              $rootScope.dontScroll = false;
          });
        }
    };
});