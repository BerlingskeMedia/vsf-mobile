/* global Hammer:true */

'use strict';

app.controller('LatestController', function ($scope, $rootScope) {
  $scope.scrollRoute = true;
  $rootScope.pageTypeClass = 'page-list-page page-latest-page';
  $rootScope.$emit('tracking');
});
