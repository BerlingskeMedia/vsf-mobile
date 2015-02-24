/* global Hammer:true */

'use strict';

app.controller('ArticleController', function ($scope, $rootScope, ContentItemByPath, DOMAIN, $routeParams) {

  $rootScope.pageTypeClass = 'page-article-page';
  var content =  ContentItemByPath.get({tag:$routeParams.tag, id:$routeParams.articleid});
  content.$promise.then(function(){
    $scope.article = content.items[0];
  });



});
