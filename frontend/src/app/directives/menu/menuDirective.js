'use strict';

app.directive('stiftenMainMenu', function(){
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'app/directives/menu/menuTemplate.html',
        controller: function ($scope, $rootScope, $location) {
            $scope.menuClickHandler = function(newPath) {
                $rootScope.menuOpen = false;
                if ($location.path() !=  newPath) {
                    $location.path(newPath);
                }
            }
        }
    };
});