'use strict';


// This directive gets contents from Nodequeue service
app.directive('stiftenNodequeueList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Nodequeue) {
          var id  = 0;

          // Get id from a parent controller
          if ('list' in $scope && 'id' in $scope.list) {
            id = $scope.list.id;
          }

          // If an attribute with id exists, overwrite.
          if ('id' in $attrs) {
            id = $attrs.id;
          }
          var nodequeue =  Nodequeue.get({id:id, items:$attrs.items});
          nodequeue.$promise.then(function(){
            $scope.articles = nodequeue.items;
          });
        }
      }
});
// This gets contents from Latest service
app.directive('stiftenLatestList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Latest, localStorageService, $interval) {
          var id  = 0;

          // Get id from a parent controller
          if ('list' in $scope && 'id' in $scope.list) {
            id = $scope.list.id;
          }

          // If an attribute with id exists, overwrite.
          if ('id' in $attrs) {
            id = $attrs.id;
          }
          
          var articles = localStorageService.get('articles-' + id + '-' + $attrs.items);
          if (articles !== null) {
            $scope.articles = articles;
          }
          var latest =  Latest.get({id:id, items:$attrs.items, type:$attrs.type});
          latest.$promise.then(function(){
            $scope.articles = latest.items;
            localStorageService.set('articles-' + id + '-' + $attrs.items, $scope.articles);
          });
          $interval(function(){
            var latest =  Latest.get({id:id, items:$attrs.items, type:$attrs.type});
            latest.$promise.then(function(){
              $scope.articles = latest.items;
              localStorageService.set('articles-' + id + '-' + $attrs.items, $scope.articles);
            });
          }, 30000);
        }
      }
});
// This gets contents from parent controller
app.directive('stiftenFrontpageArticleList', function() {
    return {
        restrict: 'AEC',
        controller: function($scope, $attrs) {
          $scope.$watch('frontpageArticles', function(val) {
            if (typeof val !== 'undefined') {
              if ('offset' in $attrs) {
                $scope.articles = val.splice($attrs.offset, $attrs.items);
              } else {
                $scope.articles = val.splice(0, $attrs.items);
              }
                
            }
          });

        }
    };
});
// This directive just sets a template
app.directive('stiftenImageArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/imageArticleListTemplate.html',
        scope: true
    };
});
// This directive just sets a template
app.directive('stiftenHeaderArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/headerArticleListTemplate.html',
        scope: true
    };
});
// This directive just sets a template
app.directive('stiftenFeaturedArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/featuredArticleListTemplate.html',
        scope: true
    };
});

// This directive just sets a template
app.directive('stiftenMostPopularArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/mostPopularArticleListTemplate.html',
        scope: true
    };
});

// This directive just sets a template
app.directive('stiftenEditorialArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/editorialArticleListTemplate.html',
        scope: true
    };
});