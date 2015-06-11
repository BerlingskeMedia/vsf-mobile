'use strict';

app.directive('stiftenRating', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/rating/ratingTemplate.html',
        link: function ($scope, $element, $attrs) {
            if ('rating' in $attrs) {
                var rateArray = [];
                console.log($attrs.rating);
                for (var n=0; n<$attrs.rating; n++) {
                    console.log(n);
                    rateArray.push(n);
                }
                $scope.rating = $attrs.rating;
                $scope.ratingArray = rateArray;
            }
        }
    };
});