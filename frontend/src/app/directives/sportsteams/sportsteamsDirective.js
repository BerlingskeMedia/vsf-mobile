'use strict';

app.directive('stiftenSportsTeams', function(){
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'app/directives/sportsteams/sportsteamsTemplate.html',
        controller: function ($scope, config) {
            $scope.sportsTeams = config.sportsTeams;
            $scope.getImageURL = function(image) {
                return '/assets/images/sportsteams/' + image +'.png';
            }
        }
    };
});