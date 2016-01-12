'use strict';

app.directive('stiftenLogin', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/login/loginTemplate.html',
        controller: function ($scope, User, $location) {

          $scope.inactive = false;
          $scope.login = function(user) {
            $scope.inactive = true;
            $scope.loginError = false;
            User.login(user).then(function(data){
              var today = new Date();
              if (data.data.code == 1) {
                var expire = new Date(today.getTime() + 30*24*60*60*1000);
                $scope.inactive = false;
                document.cookie = 'sso_token=' + data.data.response.sso_session_id + '; expires=' + expire.toUTCString() + '; path=/';
                document.cookie = 'sso_user_name=' + data.data.response.profile_name + '; expires=' + expire.toUTCString() + '; path=/';
                $location.path('/');
              } else {
                $scope.inactive = false;
                $scope.loginError = true;
                document.cookie = 'sso_user_name=; path=/';
                document.cookie = 'sso_token=; path=/';
              }
            });
          }
        }
    };
});

