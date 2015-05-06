/* global Hammer:true */

'use strict';

app.controller('SearchController', function ($scope, $rootScope, $location, Search) {
  
  $rootScope.searchOpen = true;

  $scope.page = 1;
  $scope.searching = false;
  $scope.showMoreLink = false;

  $scope.results = [];

  $scope.fetchResults = function(event) {
    var results =  Search.get({query:$scope.searchphrase, page:$scope.page});
    results.$promise.then(function(){
      if ($scope.results.length == 0) {
        $scope.resultphrase = $scope.searchphrase;
        $scope.numberOfResults = results.response.sources[0]['total-results'];
      }
      $scope.searching = false;
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
  $scope.doSearch = function(event) {
    //TODO: validation + formatting
    if ($scope.searchphrase.length > 0) {
      $scope.searching = true;
      $location.search('q', $scope.searchphrase)
      $scope.fetchResults(event);
      $scope.searched = true;
      $rootScope.searchFocus = false;

    }
  }
  $scope.hopla = function(event, msg) {
    console.log(event);
    console.log('type: ' + msg);
  }
  
  if ('q' in $location.search()) {
    $scope.searchphrase = $location.search()['q'];
    $scope.doSearch();
  }
  
  $rootScope.pageTypeClass = 'page-search-page';
  $rootScope.$emit('tracking');
});
