/* global Hammer:true */

'use strict';

app.controller('StoryController', function ($scope, $rootScope, ContentItemByPath, $routeParams, localStorageService, PreprocesAlertArticle, PreprocesArticle) {

  $rootScope.pageTypeClass = 'page-story-page';

  var defaultTemplatePath = 'app/pages/storyPage/';


  // First we get the story from local storage
  var story = localStorageService.get($routeParams.tag + '/' + $routeParams.articleid);
  if (story !== null) {
    $scope.story = story;
  }

  // secondly we get it from the server.
  var content =  ContentItemByPath.get({tag:$routeParams.tag, id:$routeParams.articleid, imagesize: '650x'});
  content.$promise.then(function(){
    $scope.story = PreprocesAlertArticle(content.items[0]);
    PreprocesArticle($scope);
    localStorageService.set($routeParams.tag + '/' + $routeParams.articleid, $scope.story);
  });

  $scope.displayed = 3;
  $scope.showMore = function() {
    $scope.displayed = $scope.story.relatedStories.length;
  }


  // When we have the story we set the matchnig template
  // Inspired by: http://blog.freeside.co/2013/02/11/dynamic-templates-in-angular-routes/
  $scope.$watch('story', function() {
    if ('story' in $scope && 'content_type' in $scope.story) {
      switch ($scope.story['content_type']) {
        case 'image_gallery':
          $scope.templateUrl = defaultTemplatePath + 'galleryPageTemplate.html';
          $rootScope.pageTypeClass = 'page-article-page page-gallery-page';
          break;
        case 'news_article':
        default:
          $rootScope.pageTypeClass = 'page-article-page';
          $scope.templateUrl = defaultTemplatePath + 'articlePageTemplate.html';
          break;
      }
    }
  })
});