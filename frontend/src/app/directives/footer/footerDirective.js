'use strict';

app.directive('stiftenFooter', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/footer/footerTemplate.html',
        $scope: false,
        controller : function($scope,config) {
            $scope.copyright    = config.footer.copyright;
            $scope.policies     = config.footer.policies;
            $scope.socials      = config.footer.socials;
        }
    };
});