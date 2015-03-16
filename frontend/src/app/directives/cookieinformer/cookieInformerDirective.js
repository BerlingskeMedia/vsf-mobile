'use strict';

app.directive('cookieinformer', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/cookieinformer/cookieInformerTemplate.html',
        $scope: false,
        controller : function($scope, $cookies) {
          
          $scope.showCookieInformer = false;
          // Checking if user already clicked the OK button
          if(!('informed' in $cookies)) {
            $scope.showCookieInformer = true;
          }

          // Handling click on the OK button and hiding the element
          $scope.closeInformer = function() {
            document.cookie = 'informed=true; expires=Fri, 3 Aug 2200 00:00:00 UTC; path=/';
            $scope.showCookieInformer = false;
          }
        }
    };
});