'use strict';

app.directive('searchField', function($rootScope) {
    return {
      link : function(scope, elm) {
        $rootScope.$watch('searchFocus', function (val) {
          if (val) {
            elm[0].focus();
          } else {
            elm[0].blur();
          }
        }); 
      }
    };
});