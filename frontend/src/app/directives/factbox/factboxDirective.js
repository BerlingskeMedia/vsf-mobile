'use strict';

app.directive('stiftenFactbox', function(ContentItemById, localStorageService){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/factbox/factboxTemplate.html',
        link: function ($scope, $element, $attrs) {
          var box = localStorageService.get('node/' + $attrs.factId);
          if (box !== null) {
            $scope.box = box;
          }
          // secondly we get it from the server.
          var content =  ContentItemById.get({id:$attrs.factId, imagesize: '650x'});
          content.$promise.then(function(){
            $scope.box = content.items[0];
            localStorageService.set('node/' + $attrs.factId, $scope.box);
          });
        }
    };
});