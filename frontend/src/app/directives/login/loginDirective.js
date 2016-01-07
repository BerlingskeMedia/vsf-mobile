'use strict';

app.directive('stiftenLogin', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/login/loginTemplate.html',
        controller: function ($scope, User) {
          console.log('login directive loaded');
          $scope.doLogin = function(user) {
            console.log('login func', user);
            User.login(user);
          }
          console.log($scope);
        }
    };
});