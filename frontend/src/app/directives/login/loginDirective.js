'use strict';

app.directive('stiftenLogin', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/login/loginTemplate.html',
        controller: function ($scope, User) {
          $scope.inactive = false;
          $scope.login = function(user) {
            $scope.inactive = true;
            $scope.loginError = false;
            User.login(user).then(function(data){
              var today = new Date()
              var expire = new Date(today.getTime() + 30*24*60*60*1000);
              if (data.data.code == 1) {
                $scope.inactive = false;                
                document.cookie = 'sso_token=' + data.data.response.sso_session_id + '; expires=' + expire.toUTCString() + '; path=/';
              } else {
                $scope.inactive = false;
                $scope.loginError = true;                
                document.cookie = 'sso_token=; expires=' + expire.toUTCString() + '; path=/';
              }
            });
          }
        }
    };
});

