'use strict';

app.directive('stiftenNewsAlert', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/newsalert/newsAlertTemplate.html',
        controller : function($scope, $rootScope, localStorageService, Nodequeue, PreprocesAlertArticle, dismissedFilter, relativizeFilter, $filter, $location) {
          $scope.displayAlert = false;
          $scope.alertVisibility = 'alert-displayed';
          //var date = Date.now();
          $scope.hourIconClass = 'wi-time-' + $filter('date')(Date.now(), 'h');
          $scope.alertArticles = localStorageService.get('alertArticles');
          $scope.dismissedArticles = [];
          $scope.dismissedArticles = localStorageService.get('dismissedArticles');
          if ($scope.alertArticles !== null) {
            $scope.alertArticles = dismissedFilter($scope.alertArticles);
          }
          var nodequeue =  Nodequeue.get({id:5910, items:2});
          nodequeue.$promise.then(function(){
            // If the breaking queu is not empty we update.
            if (nodequeue.items.length != 0) {

              // Here we traverse to extract presentation-tags.
              for (var i=0; i < nodequeue.items.length; i++) {
                nodequeue.items[i] = PreprocesAlertArticle(nodequeue.items[i]);
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
            if ($scope.dismissedArticles === null) {
              $scope.dismissedArticles = [];
            }
            $scope.dismissedArticles.push(relativizeFilter(alert.link));
            localStorageService.set('dismissedArticles', $scope.dismissedArticles);
            $scope.alertArticles = dismissedFilter($scope.alertArticles);
          }
          $scope.$watch('alertArticles', function() {
              if ('alertArticles' in $scope && $scope.alertArticles !== null) {
                $rootScope.alertStatusClass = 'alerts-open-' + $scope.alertArticles.length;
              }
          })
          $rootScope.$on("$routeChangeStart", function (event, next, current) {
              // Dismiss article-alert, if we hit an alert article.
              angular.forEach($scope.alertArticles, function(value, key) {
                  var current = relativizeFilter($location.path());
                  if (relativizeFilter(value.link) == current) {
                      if ($scope.dismissedArticles === null) {
                         $scope.dismissedArticles = [];
                      }
                      $scope.dismissedArticles.push(current);
                      localStorageService.set('dismissedArticles', $scope.dismissedArticles);
                      $scope.alertArticles = dismissedFilter($scope.alertArticles);
                  }
              });
          });


        }
    };
});