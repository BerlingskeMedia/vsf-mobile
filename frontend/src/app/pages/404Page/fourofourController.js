'use strict';

app.controller('fourofourController', function($rootScope, config) {
    $rootScope.pageTypeClass = 'page-404-page';
    $rootScope.$emit('tracking');
});
