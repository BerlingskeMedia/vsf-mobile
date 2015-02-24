'use strict';

app.directive('stiftenArticleList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Nodequeue, Latest, $location, $rootScope) {

          if ($attrs.content == 'latest') {
            var latest =  Latest.get({id:$attrs.id, items:$attrs.items, type:$attrs.type});
            latest.$promise.then(function(){
              $scope.articles = latest.items;
            });
          }

          if ($attrs.content == 'nodequeue') {
            var nodequeue =  Nodequeue.get({id:$attrs.id, items:$attrs.items});
            nodequeue.$promise.then(function(){
              $scope.articles = nodequeue.items;
            });
          }

          $scope.showArticle = function(article) {
            // article[0].value
            var absoluteUrl = article.link;
            console.log(absoluteUrl);
            var relativeUrl = absoluteUrl.replace('http://stiften.dk', '');
            console.log(relativeUrl);
            $rootScope.currentPage = '';
            $rootScope.currentArticle = article[0].value; 
            $location.path(relativeUrl);
            //console.log(guid);
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