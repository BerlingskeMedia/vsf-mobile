/* global Hammer:true */

'use strict';

app.controller('ArticleController', function ($scope, $rootScope, ContentItem) {

  var content =  ContentItem.get({id:$rootScope.currentArticle});
  content.$promise.then(function(){
    $scope.article = content.items[0];
  });

});
