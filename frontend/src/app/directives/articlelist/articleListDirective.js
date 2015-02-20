'use strict';

app.directive('stiftenImageArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/imageArticleListTemplate.html',
        scope: true,
        controller: function($scope, $attrs, ForsideContent, $location) {
          
          /*
          if ($attrs.content = 'frontpageFeatured') {
            $scope.article = $rootScope.frontpageArticles.items;
          }*/
          
          if ($attrs.content = 'otherFrontpageArticles') {
            //articles = $rootScope.frontpageArticles.items;
            //articles.shift();
           
            var frontpageContent = ForsideContent.get();
            frontpageContent.$promise.then(function(){
              $scope.articles = frontpageContent.items;
            });
            
          }

          $scope.showArticle = function(guid) {
            $location.path('/path/' + guid);
            console.log(guid);
          }  
        }
    };
});
