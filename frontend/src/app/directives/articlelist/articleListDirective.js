'use strict';

app.directive('stiftenArticleList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Nodequeue, Latest, $location) {

          if ($attrs.content == 'latest') {
            var latest =  Latest.get({id:$attrs.id, items:$attrs.items, type:$attrs.type});
            latest.$promise.then(function(){
              console.log(latest.items);
              $scope.articles = latest.items;
            });
          }

          if ($attrs.content == 'nodequeue') {
            var nodequeue =  Nodequeue.get({id:$attrs.id, items:$attrs.items});
            nodequeue.$promise.then(function(){
              $scope.articles = nodequeue.items;
            });
          }

          $scope.showArticle = function(guid) {
            $location.path('/path/' + guid);
            console.log(guid);
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