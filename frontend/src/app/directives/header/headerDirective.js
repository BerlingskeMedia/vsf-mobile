'use strict';

app.directive('stiftenHeader', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/header/headerTemplate.html',
        scope: false,
        controller: function($scope, $rootScope) {
          $rootScope.menuOpen = false;
          $rootScope.toggleMenu = function() {
            $rootScope.menuOpen = !$rootScope.menuOpen;
            $rootScope.menuStatusClass = $rootScope.menuOpen ? 'menu-open' : '';
          }
        }
    };
});