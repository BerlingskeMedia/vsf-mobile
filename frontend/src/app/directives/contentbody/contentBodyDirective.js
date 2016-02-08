app.directive('stiftenContentBody', function ($compile) {
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.prepro = false;
          scope.$watch(function () {
              return scope.$eval(attrs.stiftenContentBody);
          }, function (value) {

    


                element.html(value && value.toString());
                // If scope is provided use it, otherwise use parent scope
                var compileScope = scope;

                if (attrs.contentBody) {
                  compileScope = scope.$eval(attrs.stiftenContentBody);
                }

                $compile(element.contents())(compileScope);




          });
      }
    };
});