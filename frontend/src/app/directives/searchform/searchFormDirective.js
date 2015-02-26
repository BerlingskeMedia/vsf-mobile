'use strict';

app.directive('stiftenSearchForm', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/searchform/searchFormTemplate.html',
        scope: false,
        controller: function($scope, $rootScope) {
          
          
          $scope.doSearch = function() {


            console.log($scope.searchphrase);

            $rootScope.toggleSearch();

          }
          if ($rootScope.menuOpen) {

          }

        }
    };
});