'use strict';

app.directive('stiftenArticleList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Nodequeue, Latest, $location, $rootScope) {
          var id  = 0;
          if ('list' in $scope && 'id' in $scope.list) {
            id = $scope.list.id;
          }
          if ('id' in $attrs) {
            id = $attrs.id;
          }

          // Notice, that if the content attribute is not set, then
          // articles can be loaded from a parent controller

          if ($attrs.content == 'latest') {
            var latest =  Latest.get({id:id, items:$attrs.items, type:$attrs.type});
            latest.$promise.then(function(){
              $scope.articles = latest.items;
            });
          }

          if ($attrs.content == 'nodequeue') {
            var nodequeue =  Nodequeue.get({id:id, items:$attrs.items});
            nodequeue.$promise.then(function(){
              $scope.articles = nodequeue.items;
            });
          }

          $scope.showArticle = function(article) {
            // article[0].value
            var absoluteUrl = article.link;
            var relativeUrl = absoluteUrl.replace('http://stiften.dk', '');
            $rootScope.currentPage = '';
            $rootScope.currentArticle = article[0].value;
            $location.path(relativeUrl);
          }
        }
    };
});

app.directive('stiftenImageArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/imageArticleListTemplate.html',
        scope: true
    };
});

app.directive('stiftenHeaderArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/headerArticleListTemplate.html',
        scope: true
    };
});