/* global Hammer:true */

'use strict';

app.controller('ContactController', function ($scope, $rootScope, ContactInfo, $sce) {

  $rootScope.pageTypeClass = 'page-list-page page-contact-page';
  ContactInfo.get().then(function(response) {
      $scope.raw_html = $sce.trustAsHtml(response.data);
  });
  $rootScope.$emit('tracking');
});
