/* global Hammer:true */

'use strict';


// TODO: This should be a directive to put on ng-view instead!
app.controller('FrontpageController', function ($scope, $rootScope,  Nodequeue, $location, localStorageService, PreprocesAlertArticle, config) {

  $rootScope.pageTypeClass = 'page-front-page';
  var queueId = config.frontpageQueueId;
  var items = config.frontpageItems;

  var frontpageArticles = localStorageService.get('articles-' + queueId + '-' + items);
  if (frontpageArticles !== null) {
    $scope.frontpageArticles = frontpageArticles;
  }

  if ($location.path() === '/søg') {
    $rootScope.searchOpen = true;
  }
  

  var nodequeue =  Nodequeue.get({id:queueId, items:items});
  nodequeue.$promise.then(function(){
    $scope.frontpageArticles = nodequeue.items;
    $scope.frontpageArticles[0] = PreprocesAlertArticle($scope.frontpageArticles[0]);
    localStorageService.set('articles-' + queueId + '-' + items, $scope.frontpageArticles);
  });
});