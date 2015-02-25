'use strict';

app.directive('focusField', function() {
    return {
      link : function(scope, elm, $rootScope) {
        scope.$watch('searchOpen', function(value){
          if (value === true) {
            elm[0].focus(); 
          }
        })
      }
    };
});