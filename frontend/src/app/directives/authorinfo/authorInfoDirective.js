'use strict';

app.directive('stiftenAuthorInfo', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/authorinfo/authorInfoTemplate.html',
    };
});