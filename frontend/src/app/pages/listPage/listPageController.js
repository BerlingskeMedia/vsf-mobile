/* global Hammer:true */

'use strict';

app.controller('ListController', function ($scope, $rootScope, $routeParams, Category, Latest) {
    // We need to lookup term-ids based on slugs in BOND - this is an UGLY  hack.
  var id = 0;
  if ('tag' in $routeParams) {
    if (isNaN(parseFloat($routeParams.tag))) {
      id = Category($routeParams.tag);
    } else {
      id = $routeParams.tag;
    }
  }

  $scope.hasSubsection = true; // TODO: Make "dynamic"
  $scope.subsectionVisible = false;
  if ($scope.hasSubsection) {

  }
  //TODO temp data
  $scope.submenuLinks = [
    {slug: 'fodbold', name: 'Fodbold'},
    {slug: 'haandbold', name: 'Håndbold'},
    {slug: 'cricket', name: 'Cricket'}
  ];
  $scope.toggleSubsectionMenu = function() {
    $scope.subsectionVisible = !$scope.subsectionVisible;
  }

  var latest =  Latest.get({id:id, items: 20, type: 'news_article'});
  latest.$promise.then(function(){
    $scope.header = latest.category;
    $scope.articles = latest.items;
  });

  $rootScope.pageTypeClass = 'page-list-page';

});
