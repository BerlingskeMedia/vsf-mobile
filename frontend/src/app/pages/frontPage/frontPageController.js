/* global Hammer:true */

'use strict';


// TODO: This should be a directive to put on ng-view instead!
app.controller('FrontpageController', function ($scope, $rootScope,  Nodequeue) {
  $rootScope.pageTypeClass = 'page-front-page';
  
  var nodequeue =  Nodequeue.get({id:1011, items:10});
  nodequeue.$promise.then(function(){
    $scope.frontpageArticles = nodequeue.items;
  });
});
