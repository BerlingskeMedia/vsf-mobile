/* global Hammer:true */

'use strict';

app.controller('ListController', function ($scope, $rootScope, $routeParams, config, Latest) {
    // We need to lookup term-ids based on slugs in BOND - this is an UGLY  hack.
  var id = 0;
  if (('tag' in $routeParams) && ($routeParams.tag in config.sections)) {
    id = config.sections[$routeParams.tag].id;
  }
  if (id === 0) {
    // TODO: 404
    console.log('ERROR');
  }

  $scope.subsectionVisible = false;

  if ('subsections' in config.sections[$routeParams.tag]) {
      $scope.hasSubsection = true;
      $scope.submenuLinks = config.sections[$routeParams.tag].subsections;
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
