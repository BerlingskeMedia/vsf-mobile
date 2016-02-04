/* global Hammer:true */

'use strict';

app.controller('DebateController', function ($scope, $rootScope) {

  $rootScope.pageTypeClass = 'page-list-page page-debate-page';
  $rootScope.$emit('tracking');
});
