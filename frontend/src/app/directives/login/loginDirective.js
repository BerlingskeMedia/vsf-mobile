'use strict';

app.directive('stiftenLogin', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/login/loginTemplate.html',
        controller: function ($scope, User) {
          console.log('login directive loaded');
          $scope.inactive = false;

          $scope.login = function(user) {
            $scope.inactive = true;
            //console.log('login func', user);
            var user = User.login(user);
            console.log(user);
          }
          console.log($scope);
        }
    };
});