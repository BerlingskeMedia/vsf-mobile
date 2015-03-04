'use strict';


// This is the baseline list directive
app.directive('stiftenArticleList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Nodequeue, Latest, $location) {
          $scope.showArticle = function(article) {
            var absoluteUrl = article.link;
            var relativeUrl = absoluteUrl.replace('http://stiften.dk', '');
            $location.path(relativeUrl);
          }
        }
    };
});

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
        controller: function($scope, $attrs, Latest) {
          var id  = 0;

          // Get id from a parent controller
          if ('list' in $scope && 'id' in $scope.list) {
            id = $scope.list.id;
          }

          // If an attribute with id exists, overwrite.
          if ('id' in $attrs) {
            id = $attrs.id;
          }

          var latest =  Latest.get({id:id, items:$attrs.items, type:$attrs.type});
          latest.$promise.then(function(){
            $scope.articles = latest.items;
          });
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

