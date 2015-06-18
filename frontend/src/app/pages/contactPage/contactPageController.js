/* global Hammer:true */

'use strict';

app.controller('ContactController', function ($scope, $rootScope) {

  $rootScope.pageTypeClass = 'page-list-page page-contact-page';
  $rootScope.$emit('tracking');
});
