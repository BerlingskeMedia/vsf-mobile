'use strict';

app.directive('stiftenMainMenu', function(){
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'app/directives/menu/menuTemplate.html',
        controller: function ($scope, $rootScope, $location, config, $cookies) {
            $scope.userName = $cookies['sso_user_name'];
            $scope.token = $cookies['sso_token'];
            $scope.socials = config.socials;
            $scope.menuClickHandler = function(newPath) {
                newPath = '/' + newPath;
                $rootScope.menuOpen = false;
                if ($location.path() !=  newPath) {
                    $rootScope.dontScroll = true;
                    $location.path(newPath);
                }
            }
        }
    };
});