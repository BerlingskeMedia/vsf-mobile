'use strict';

app.directive('stiftenArticlelist', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/articleListTemplate.html',
        scope: true,
        controller: function($scope, $attrs, ForsideContent) {
            var params = {};
            params.tag = $attrs.tag;
            if ($attrs.count) {
                params.pagesize = $attrs.count;
            }
            $scope.articles = ForsideContent.get(params);
        }
    };
});
