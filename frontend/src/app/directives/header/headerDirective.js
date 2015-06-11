'use strict';

app.directive('stiftenHeader', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/header/headerTemplate.html',
        scope: false,
        controller: function($scope, $rootScope, $location, $route) {
          $rootScope.menuOpen = false;
          $rootScope.searchOpen = false;
          $rootScope.searchLink = '/søg';
          $rootScope.lastPage = '/';

          if ($location.path() == '/søg') {
            $rootScope.searchLink = '/';
          }
          $scope.closeMenu = function () {
              $rootScope.menuOpen = false;
          }
          $scope.logoClickHandler = function() {
              $rootScope.menuOpen = false;
              if ($location.path() != "/") {
                  $location.path("/");
              } else {
                  $route.reload();
              }
          }
          $scope.searchClick = function(event) {
            event.preventDefault();
            if ($location.path() == '/søg') {
              $location.path($rootScope.searchLink);
              $rootScope.searchFocus = false;
            } else {
              $location.path($rootScope.searchLink);
              $rootScope.searchFocus = true;
            }
          }
          $rootScope.$watch('searchOpen', function(value) {
            $rootScope.searchStatusClass = $rootScope.searchOpen ? 'search-open' : 'search-closed';
            if (value) {
              $rootScope.menuOpen = false;
            }
          });
          $rootScope.$watch('menuOpen', function(value) {
            $rootScope.menuStatusClass = $rootScope.menuOpen ? 'menu-open' : 'menu-closed';
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
            if ($location.path() == '/søg') {
              $rootScope.searchLink = $rootScope.lastPage;
            } else {
              $rootScope.searchLink = '/søg';
              $rootScope.lastPage = $location.path();
            }
            
          });
        }
    };
});