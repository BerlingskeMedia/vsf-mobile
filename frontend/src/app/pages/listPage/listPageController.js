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
  //TODO temp data
  var submenuLinks = {
    'sport': [
      {slug: 'fodbold', name: 'Fodbold'},
      {slug: 'haandbold', name: 'Håndbold'},
      {slug: 'cricket', name: 'Cricket'}
    ],
    'lokal': [
      {slug: 'aarhus', name: 'Aarhus'},
      {slug: 'skanderborg', name: 'Skanderborg'},
      {slug: 'odder', name: 'Odder'}
    ]
  };
  $scope.subsectionVisible = false;
  // TODO: Make "dynamic"
  if ($routeParams.tag == 'lokal' || $routeParams.tag == 'sport') {
      $scope.hasSubsection = true;
      $scope.submenuLinks = submenuLinks[$routeParams.tag];
  }



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
