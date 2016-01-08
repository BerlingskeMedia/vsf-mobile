'use strict';

app.directive('stiftenPaywall', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/paywall/paywallTemplate.html',
        controller: function ($scope, User) {

        }
    };
});