'use strict';

app.directive('stiftenNewsAlert', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/newsalert/newsAlertTemplate.html',
        controller : function($scope, localStorageService, Nodequeue) {
          $scope.displayAlert = false;
          $scope.alertVisibility = 'alert-displayed';
          var alertArticles = localStorageService.get('alertArticles');
          if (alertArticles !== null) {
            $scope.alertArticles = alertArticles;
          }

          var nodequeue =  Nodequeue.get({id:5910, items:2});
          nodequeue.$promise.then(function(){
            // If the breaking queu is not empty we update.
            if (nodequeue.items.length != 0) {

              // Here we traverse to extract presentation-tags.
              for (var i=0; i < nodequeue.items.length; i++) {
                for (var x=0; x < nodequeue.items[i].fields.length; x++) {
                  if (nodequeue.items[i].fields[x].attributes.keys == 'p_tag') {
                    if (nodequeue.items[i].fields[x].attributes.label == 328917) {
                    // Breaking, presentation tag
                      nodequeue.items[i].alertType = 'alert-breaking';
                      nodequeue.items[i].alertLabel = 'Breaking';
                    }
                    // Just-now, presentation tag
                    if (nodequeue.items[i].fields[x].attributes.label == 328920) {

                      nodequeue.items[i].alertType = 'alert-justnow';
                      nodequeue.items[i].alertLabel = 'Netop nu';
                    }
                  }
                }
              }

              $scope.alertArticles = nodequeue.items;
              localStorageService.set('alertArticles', $scope.alertArticles);


            // If its empty we just clear local storage.
            // so articles will be removed on next load
            } else {

              localStorageService.set('alertArticles', $scope.alertArticles);
            }

          });




        }
    };
});