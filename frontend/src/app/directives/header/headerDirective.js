'use strict';

app.directive('stiftenHeader', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/header/headerTemplate.html',
        scope: false,
        controller: function($scope, $rootScope, $location) {
          $rootScope.menuOpen = false;
          $rootScope.searchOpen = false;
          $rootScope.searchLink = '/search';
          $rootScope.lastPage = '/';

          if ($location.path() == '/search') {
            $rootScope.searchLink = '/';
          }

          $scope.searchClick = function() {
            if ($location.path() == '/search') {
              $location.path($rootScope.searchLink);
              $rootScope.searchFocus = false;
            } else {
              $location.path($rootScope.searchLink);
              $rootScope.searchFocus = true;
            }
          }
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
            if ($location.path() == '/search') {
              $rootScope.searchLink = $rootScope.lastPage;
            } else {
              $rootScope.searchLink = '/search';
              $rootScope.lastPage = $location.path();
            }
            
          });
        }
    };
});