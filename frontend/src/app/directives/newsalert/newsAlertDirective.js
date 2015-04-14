'use strict';

app.directive('stiftenNewsAlert', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/newsalert/newsAlertTemplate.html',
        controller : function($scope, $rootScope, localStorageService, Nodequeue, PreprocesArticle, dismissedFilter, $filter) {
          $scope.displayAlert = false;
          $scope.alertVisibility = 'alert-displayed';
          //var date = Date.now();
          $scope.hourIconClass = 'wi-time-' + $filter('date')(Date.now(), 'h');
          var alertArticles = localStorageService.get('alertArticles');
          var dismissedArticles = localStorageService.get('dismissedArticles');
          if (alertArticles !== null) {
            $scope.alertArticles = dismissedFilter(alertArticles);
          }
          var nodequeue =  Nodequeue.get({id:5910, items:2});
          nodequeue.$promise.then(function(){
            // If the breaking queu is not empty we update.
            if (nodequeue.items.length != 0) {

              // Here we traverse to extract presentation-tags.
              for (var i=0; i < nodequeue.items.length; i++) {
                nodequeue.items[i] = PreprocesArticle(nodequeue.items[i]);
              }

              $scope.alertArticles = dismissedFilter(nodequeue.items);
              localStorageService.set('alertArticles', $scope.alertArticles);


            // If its empty we just clear local storage.
            // so articles will be removed on next load
            } else {

              localStorageService.set('alertArticles', $scope.alertArticles);
            }

          });
          // Dsimiss callback
          $scope.dismissAlert = function(alert) {
            //dismissedArticles.push(alert.link);
            if (dismissedArticles === null) {
              dismissedArticles = [];
            }
            dismissedArticles.push(alert.link);
            localStorageService.set('dismissedArticles',dismissedArticles);
            $scope.alertArticles = dismissedFilter($scope.alertArticles);
          }
          $scope.$watch('alertArticles', function() {
            $rootScope.alertStatusClass = 'alerts-open-' + $scope.alertArticles.length;
          })



        }
    };
});