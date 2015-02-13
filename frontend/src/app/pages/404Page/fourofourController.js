'use strict';

app.controller('fourofourController', function($routeParams, $scope, $location, config, ContentItems) {
    var params = {extendfirstitems: 'no', extendtemplates: 'yes', filter : 'tiles'};

    params.pagesize = 10;
    params.sortby = 'published';

    $scope.articles = ContentItems.get(params);

});
