'use strict';

app.directive('berlEmediate', function() {
  return {
    restrict: 'AEC',
    templateUrl: 'app/directives/emediate/emediateTemplate.html',
    scope: true,
    controller: function($scope, $element, $attrs, $timeout, $location, $rootScope, $window) {
      var cu = $attrs.cu;
      var id = 'banner-' + cu;
      $scope.id = id;
      $scope.showBanner = function() {
        $element.ready(function () {
          // Wait for next render-cycle to make sure, id is set.
          var EAS_uuid = '';
          if ($window.EAS_uuid !== undefined) {
            EAS_uuid = $window.EAS_uuid();
          }
          $timeout(function(){
            if (typeof(EAS_load_fif) != "undefined" && document.getElementById(id)) {
              console.log('Load AD: ' + id + ' - ' + EAS_uuid);
              EAS_load_fif(id, "./assets/html/EAS_fif.html",
                "http://ad1.emediate.dk/eas?cu=" + cu + ";cre=mu;js=y;url=" + $location.absUrl() + ";pageviewid=" + EAS_uuid + ";target=_blank", 0, 0
              );
            }
          }, 500);
        });
      }
      $scope.showBanner();
    }
  };
});
