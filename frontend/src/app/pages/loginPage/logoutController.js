'use strict';

app.controller('LogoutController', function($location, $scope) {
  document.cookie = 'sso_user_name=; path=/';
  document.cookie = 'sso_token=; path=/';
  $location.path('/');
});
