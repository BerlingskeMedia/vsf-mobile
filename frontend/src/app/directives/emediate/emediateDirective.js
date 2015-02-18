'use strict';

app.directive('berlEmediate', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/emediate/emediateTemplate.html',
        scope: true,
        controller: function($scope, $window, $location, config, $attrs) {
            var cu      = $attrs.cu;
            $scope.cu   = cu;

            this.ready  = false;
            this.stackBanners = false;

            $scope.emediate = function() {
                if (!this.ready) {
                    var url     = $location.url(),
                        tag     = $attrs.tag,
                        id      = cu + "-" + tag + url.replace(/\//g,"-");

                    $scope.id   = id;
                    $scope.status = "unstick";

                    // Evaluate emediate script only in case if banner wrapper ready and ad block is not installed
                    if (typeof(EAS_load_fif) != "undefined" && angular.element(document.getElementById("#"+id))[0] && config.emediate[cu].cu && config.emediate[cu].cu != "0") {
                        EAS_load_fif(id, "./assets/html/EAS_fif.html",
                            "http://ad1.emediate.dk/eas?cu=" + config.emediate[cu].cu + ";cre=mu;js=y;pageviewid=;target=_blank",
                            config.emediate[cu].w,
                            config.emediate[cu].h
                        );

                        // Prevent evaluating this controller multiple times
                        this.ready = true;
                    }

                    

                    if (!this.stackBanners && (cu == "I1" || cu == "I2")) {
                        this.stackBanners = true;

                        angular.element(window).bind('scroll', function() {
                            var id =  "#B1-" + tag + url.replace(/\//g,"-"),
                                offsetToHide = angular.element(document.getElementById(id)).height();

                            
                            // if B1 banner didn't load and build then get away
                            if(offsetToHide == 0) {
                                return;
                            }

                            if(window.pageYOffset > offsetToHide) {
                                $scope.status = 'stick';
                            } else {
                                $scope.status = 'unstick';
                            }

                            $scope.$apply();
                            
                        });

                    }
                }
            }
        }
    };
});
