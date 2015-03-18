'use strict';

app.directive('stiftenNewsAlert', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/newsalert/newsAlertTemplate.html',
        controller : function($scope) {
          $scope.displayAlert = false;
          $scope.alertVisibility = 'alert-displayed';
          $scope.alertLabel = 'Alarm';
          $scope.alertTitle = 'Test alert tekst';
          $scope.alertType = 'alert-breaking';
          $scope.alertUrl = 'http://stiften.dk';
        }
    };
});