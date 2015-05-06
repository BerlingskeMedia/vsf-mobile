/*jslint nomen: true*/
/*global udm_, ga, pp_gemius_event, pp_gemius_identifier, _sf_async_config*/
app.directive('berlTracking', function ($rootScope, $location, $routeParams) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: 'app/directives/tracker/trackerTemplate.html',
        link: function () {
            var track = function () {

                // Comscore
                udm_('//int.sitestat.com/berlingske/bite/s?<SectionName>.panel');

                // Facebookththth
                //window._fbq = window._fbq || [];
                //window._fbq.push(['track', 'PixelInitialized', {}]);

                // Gemius
                pp_gemius_event(pp_gemius_identifier);

                // Google Analytics
                ga('send', 'pageview');
            };

            $rootScope.$on('tracking', function () {
                if ($location.$$host === 'm.stiften.dk') {
                    track();
                }
            });
        }
    };
});

