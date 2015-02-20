'use strict';

app.directive('stiftenImageArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/imageArticleListTemplate.html',
        scope: true,
        controller: function($scope, $attrs, $rootScope, ForsideContent, $location) {
          
          if ($attrs.content = 'frontpageFeatured') {
            var frontpageContent = ForsideContent.get();
            frontpageContent.$promise.then(function(){
              $scope.articles = frontpageContent.items[0];
              
            });
          }

          if ($attrs.content = 'otherFrontpageArticles') {
            var frontpageContent = ForsideContent.get();
            frontpageContent.$promise.then(function(){
              $scope.articles = frontpageContent.items;
              $scope.articles.shift();
            });
          }
          $scope.showArticle = function(guid) {
            $location.path('/path/' + guid);
            console.log(guid);
          }  
        }
    };
});
