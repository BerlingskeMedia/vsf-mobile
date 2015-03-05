/* global Hammer:true */

'use strict';


// TODO: This should be a directive to put on ng-view instead!
app.controller('FrontpageController', function ($scope, $rootScope,  Nodequeue, $location) {
  $rootScope.pageTypeClass = 'page-front-page';
  
  if ($location.path() === '/search') {
    $rootScope.searchOpen = true;
  }
  
  var nodequeue =  Nodequeue.get({id:1011, items:10});
  nodequeue.$promise.then(function(){
    $scope.frontpageArticles = nodequeue.items;
  });
  
});
