/* global Hammer:true */

'use strict';

app.controller('ListController', function ($scope, $rootScope, $routeParams, Category, Latest) {
  var id = 0;
  if ('tag' in $routeParams) {
     id = Category($routeParams.tag);
  }
  var latest =  Latest.get({id:id, items: 20, type: 'news_article'});
  latest.$promise.then(function(){
    $scope.header = latest.category;
    $scope.articles = latest.items;
  });
});
