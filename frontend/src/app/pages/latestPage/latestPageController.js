/* global Hammer:true */

'use strict';

app.controller('LatestController', function ($scope, $rootScope) {

  $rootScope.pageTypeClass = 'page-list-page page-latest-page';
  $rootScope.$emit('tracking');
});
