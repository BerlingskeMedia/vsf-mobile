'use strict';

app.directive('stiftenMainMenu', function(){
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'app/directives/menu/menuTemplate.html',
        controller: function ($scope, $rootScope, $location, config) {
            $scope.socials = config.socials;
            $scope.menuClickHandler = function(newPath) {
                $rootScope.menuOpen = false;
                if ($location.path() !=  newPath) {
                    $location.path(newPath);
                }
            }
        }
    };
});