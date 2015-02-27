/* global Hammer:true */

'use strict';

app.controller('SearchController', function ($scope, $rootScope, $routeParams, Search) {
  $scope.searchphrase = $routeParams.searchphrase;

  $scope.page = 1;

  $scope.showMoreLink = false;

  $scope.results = [];

  $scope.fetchResults = function() {
    var results =  Search.get({query:$scope.searchphrase, page:$scope.page});
    results.$promise.then(function(){
      $scope.results = $scope.results.concat(results.response.sources[0].docs);
      $scope.updateMoreLink(results);
    });
  }

  $scope.updateMoreLink = function(results) {
    $scope.showMoreLink = (results.response.sources[0]['results-per-page'] * results.response.sources[0]['page-number']) < results.response.sources[0]['total-results'];
  }

  $scope.showMoreResults = function() {
    $scope.page++;
    $scope.fetchResults();
  }

  $scope.fetchResults();

  $rootScope.pageTypeClass = 'page-search-page';
});
