'use strict';

app.directive('stiftenHeader', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/header/headerTemplate.html',
        scope: false,
        controller: function($scope, $rootScope) {
          $rootScope.menuOpen = false;
          $rootScope.searchOpen = false;
          $rootScope.$watch('searchOpen', function(value) {
            $rootScope.searchStatusClass = $rootScope.searchOpen ? 'search-open' : '';
            if (value) {
              $rootScope.menuOpen = false;
            }
          });
          $rootScope.$watch('menuOpen', function(value) {
            $rootScope.menuStatusClass = $rootScope.menuOpen ? 'menu-open' : '';
            if (value) {
              $rootScope.searchOpen = false;
            }
          });
          
          $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.menuOpen) {
              $rootScope.menuOpen = false;
            }
            if ($rootScope.searchOpen) {
              $rootScope.searchOpen = false;
            }
          });
        }
    };
});