'use strict';

app.directive('stiftenResultList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        templateUrl: 'app/directives/resultlist/searchResultArticleListTemplate.html',
    };
});
