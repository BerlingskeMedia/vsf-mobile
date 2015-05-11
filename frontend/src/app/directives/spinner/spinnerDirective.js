'use strict';

app.directive('stiftenSpinner', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/spinner/spinnerTemplate.html'
    };
});