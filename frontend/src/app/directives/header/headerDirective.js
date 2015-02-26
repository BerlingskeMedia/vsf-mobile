'use strict';

app.directive('stiftenHeader', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/header/headerTemplate.html',
        scope: false,
        controller: function($scope, $rootScope) {
          $rootScope.menuOpen = false;
          $rootScope.searchOpen = false;
          
          $rootScope.toggleMenu = function() {
            $rootScope.menuOpen = !$rootScope.menuOpen;
            $rootScope.menuStatusClass = $rootScope.menuOpen ? 'menu-open' : '';
            if ($rootScope.searchOpen) {
              $rootScope.toggleSearch();
            }
          }
          $rootScope.toggleSearch = function($event) {
            if (typeof $event === 'object') {
              $event.preventDefault();
            }
            $rootScope.searchOpen = !$rootScope.searchOpen;
            $rootScope.searchStatusClass = $rootScope.searchOpen ? 'search-open' : '';
          }
          
          $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.menuOpen) {
              $rootScope.toggleMenu();
            }
            if ($rootScope.searchOpen) {
              $rootScope.toggleSearch();
            }
          });
        }
    };
});