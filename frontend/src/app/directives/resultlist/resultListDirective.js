'use strict';

app.directive('stiftenResultList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        templateUrl: 'app/directives/resultlist/searchResultArticleListTemplate.html',
        controller: function($scope, $location) {
          $scope.showArticle = function(article) {
            var absoluteUrl = article.link;
            var relativeUrl = absoluteUrl.replace('http://stiften.dk', '');
            $location.path(relativeUrl);
          }
        }
    };
});
