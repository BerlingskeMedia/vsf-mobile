'use strict';

app.directive('stiftenListmenu', function($routeParams){
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'app/directives/listmenu/listMenuTemplate.html',
        controller : function($scope, Tag) {
            $scope.tags = Tag.get({filter : 'menu', extendfirstitems: "yes", extendtemplates: "yes"});


            $scope.activeTag = function(TAG, COLOR) {

                if(TAG === $routeParams.tag) {
                    $scope.activeTagStatus = 'activetag';
                    $scope.activeTagColor = COLOR;
                }else {
                    $scope.activeTagStatus = 'diactivetag';
                    $scope.activeTagColor = '';
                }


            };
        }
    };
});