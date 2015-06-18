'use strict';

app.directive('stiftenRating', function(config){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/rating/ratingTemplate.html',
        link: function ($scope, $element, $attrs) {
            if ('rating' in $attrs) {
                var rateArray = [];
                for (var n=0; n< config.maxStarRating; n++) {
                    rateArray.push(n);
                }
                $scope.rating = $attrs.rating;
                $scope.ratingArray = rateArray;
            }
        }
    };
});