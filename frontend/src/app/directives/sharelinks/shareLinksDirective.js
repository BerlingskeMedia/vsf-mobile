'use strict';

app.directive('stiftenShareLinks', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/sharelinks/shareLinksTemplate.html',
        controller : function($scope, $location, config) {
          var path = $location.url();
          var url = config.canonicalDomain + path;
          var tweet = '';
          var subject = 'Stiften.dk';
          if ('story' in $scope.$parent) {
            if ('title' in $scope.$parent.story) {
              tweet += $scope.$parent.story.title + ': ';
              subject += ': ' + $scope.$parent.story.title;
            }
          }
          tweet += url;

          $scope.links = {};
          $scope.links.fb = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
          $scope.links.twitter = 'https://twitter.com/home?status=' + tweet;
          $scope.links.google = 'https://plus.google.com/share?url=' + url;
          $scope.links.mail = 'mailto:?subject=' + subject + '&body=' + subject + " \n" + url;
        }
    };
});