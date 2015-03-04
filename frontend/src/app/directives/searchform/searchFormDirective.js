'use strict';

app.directive('stiftenSearchForm', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/searchform/searchFormTemplate.html',
        scope: false,
        controller: function($scope, $rootScope, $location) {
          $scope.doSearch = function() {
            //TODO: validation + formatting
            $rootScope.searchOpen = false;
            $location.path('/search/' + $scope.searchphrase);
          }
        }
    };
});