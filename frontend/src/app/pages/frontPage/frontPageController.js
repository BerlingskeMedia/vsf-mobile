/* global Hammer:true */

'use strict';


// TODO: This should be a directive to put on ng-view instead!
app.controller('FrontpageController', function ($scope, $rootScope,  Nodequeue, $location, localStorageService, PreprocesArticle) {

  $rootScope.pageTypeClass = 'page-front-page';


  var frontpageArticles = localStorageService.get('frontpageArticles');
  if (frontpageArticles !== null) {
    $scope.frontpageArticles = frontpageArticles;
  }

  if ($location.path() === '/search') {
    $rootScope.searchOpen = true;
  }
  

  var nodequeue =  Nodequeue.get({id:1011, items:10});
  nodequeue.$promise.then(function(){
    $scope.frontpageArticles = nodequeue.items;
    //$scope.frontpageArticles.shift(); ID 5910
    $scope.frontpageArticles[0] = PreprocesArticle($scope.frontpageArticles[0]);
    localStorageService.set('frontpageArticles', $scope.frontpageArticles);
  });
});