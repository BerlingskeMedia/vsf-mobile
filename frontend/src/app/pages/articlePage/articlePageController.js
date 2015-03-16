/* global Hammer:true */

'use strict';

app.controller('ArticleController', function ($scope, $rootScope, ContentItemByPath, DOMAIN, $routeParams, localStorageService) {

  $rootScope.pageTypeClass = 'page-article-page';

  var article = localStorageService.get($routeParams.tag + '/' + $routeParams.articleid);
  if (article !== null) {
    $scope.article = article;
  }

  var content =  ContentItemByPath.get({tag:$routeParams.tag, id:$routeParams.articleid});
  content.$promise.then(function(){
    $scope.article = content.items[0];
    localStorageService.set($routeParams.tag + '/' + $routeParams.articleid, $scope.article);
  });



});
