'use strict';

app.directive('stiftenFooter', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/footer/footerTemplate.html',
        $scope: false,
        controller : function($scope, config) {
            $scope.footer    = config.footer;
        }
    };
});