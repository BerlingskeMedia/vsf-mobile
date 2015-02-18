'use strict';

app.directive('stiftenArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/articleListTemplate.html',
        scope: true,
        controller: function($scope, $attrs, $rootScope, ForsideContent) {
     

          if ($attrs.content = 'otherFrontpageArticles') {
            var frontpageContent = ForsideContent.get();
            frontpageContent.$promise.then(function(){
              $scope.articles = frontpageContent.items;
              $scope.articles.shift();
            });
          }
            
        }
    };
});
