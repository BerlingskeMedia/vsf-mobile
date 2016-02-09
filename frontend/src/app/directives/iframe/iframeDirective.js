'use strict';

app.directive('iframe', function($window) {
  return {
    restrict: 'E',
    scope: {},
    link: function (scope, element, attrs) {

      element[0].width = '100%';
      if (attrs.width && attrs.height) {
        element[0].height = element[0].offsetWidth / (attrs.width/attrs.height);
        angular.element($window).bind('resize', function () {
          element[0].height = element[0].offsetWidth / (attrs.width/attrs.height);
        });
      }

    }
  };
});
