'use strict';

app.directive('berlEmediate', function() {
  return {
    restrict: 'AEC',
    templateUrl: 'app/directives/emediate/emediateTemplate.html',
    scope: true,
    link: function (scope, element, attrs) {
      var cu = attrs.cu;
      var id = 'banner-' + cu;
      scope.id = id;
      element.ready(function () {  

              //  && config.emediate[cu].cu && config.emediate[cu].cu != "0"
              if (typeof(EAS_load_fif) != "undefined" && document.getElementById(id)) {
                EAS_load_fif(id, "./assets/html/EAS_fif.html",
                  "http://ad1.emediate.dk/eas?cu=" + cu + ";cre=mu;js=y;pageviewid=;target=_blank"
                );

                // Prevent evaluating this controller multiple times

              }
      });   
    }
  };
});
