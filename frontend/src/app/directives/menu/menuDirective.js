'use strict';

app.directive('stiftenMainMenu', function(){
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'app/directives/menu/menuTemplate.html',
        controller : function($rootScope) {
          
          $rootScope.toggleMenu = function() {
            $rootScope.menuOpen = !$rootScope.menuOpen;
            $rootScope.menuStatusClass = $rootScope.menuOpen ? 'menu-open' : '';
          }
          
          $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.menuOpen) {
              $rootScope.toggleMenu();
            }
          });

        }
    };
});