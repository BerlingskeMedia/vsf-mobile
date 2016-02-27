'use strict';

app.directive('stiftenShareLinks', function(config, $location){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/sharelinks/shareLinksTemplate.html',
        link: function ($scope, $element, $attrs) {
          var path = $location.url();
          var domain = config.canonicalDomain;
          var url = domain + path;
          if ('anchor' in $attrs) {
              url = url + '#' + $attrs.anchor;
          }
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
          $scope.links.twitter = 'https://twitter.com/intent/tweet?text=' + tweet;
          $scope.links.google = 'https://plus.google.com/share?url=' + url;
          $scope.links.mail = 'mailto:?subject=' + subject + '&body=' + subject + " \n" + url;
          $scope.links.sms = 'sms:&body=' + subject + " \n" + url;
          // Check for andoird
          var ua = navigator.userAgent.toLowerCase();
          var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
          if(isAndroid) {
            // Do something!
            // Redirect to Android-site?
            $scope.links.sms = 'sms:?body=' + subject + " \n" + url;
          }
        }
    };
});