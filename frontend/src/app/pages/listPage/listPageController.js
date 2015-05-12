/* global Hammer:true */

'use strict';

app.controller('ListController', function ($scope, $rootScope, $routeParams, config, localStorageService, Latest) {
    // We need to lookup term-ids based on slugs in BOND - this is an UGLY  hack.
  var id = 0;
  if (('tag' in $routeParams) && ($routeParams.tag in config.sections)) {
    id = config.sections[$routeParams.tag].id;
  }
  if (id === 0) {
    // TODO: 404
    console.log('ERROR');
    return;
  }

  $scope.subsectionVisible = false;
  $scope.contentLoading = true;

  if ('subsections' in config.sections[$routeParams.tag]) {
      $scope.hasSubsection = true;
      $scope.submenuLinks = config.sections[$routeParams.tag].subsections;
  }

  $scope.showTime = true;

  $scope.toggleSubsectionMenu = function() {
    $scope.subsectionVisible = !$scope.subsectionVisible;
  }
  var section = localStorageService.get('section-' + id + '-' + config.itemsInSection);
  if (section !== null) {
    $scope.articles = section.items;
    $scope.header = section.category;
    $scope.contentLoading = false;
  }
  var latest =  Latest.get({id:id, items: config.itemsInSection, type: 'news_article'});
  latest.$promise.then(function(){
    $scope.contentLoading = false;
    $scope.header = latest.category;
    $scope.articles = latest.items;
    localStorageService.set('section-' + id + '-' + config.itemsInSection, latest);
  });

  $rootScope.pageTypeClass = 'page-list-page';
  $rootScope.$emit('tracking');
});
