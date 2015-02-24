/* global Hammer:true */

'use strict';

app.controller('ArticleController', function ($scope, $rootScope, ContentItem) {

  $rootScope.pageTypeClass = 'page-article-page';
  //http://www.bt.dk/mecommobile/node/www.bt.dk/krimi/kryds-spaerret-fodgaenger-ramt-af-bus-i-koebenhavn
  var content =  ContentItem.get({id:$rootScope.currentArticle});
  content.$promise.then(function(){
    $scope.article = content.items[0];
  });

});
