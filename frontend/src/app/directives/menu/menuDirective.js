'use strict';

app.directive('stiftenMainMenu', function($routeParams){
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'app/directives/menu/menuTemplate.html',
        controller : function($scope) {

        }
    };
});