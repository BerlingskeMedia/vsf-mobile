'use strict';

app.directive('stiftenFbcomments', function(){
    function createHTML(intro, href, numposts, colorscheme) {
         return '<div class="comment-welcome">' + intro + '</div>' +
                '<div class="fb-comments" ' +
                        'data-width="100%" ' +
                        'data-href="' + href + '" ' +
                        'data-numposts="' + numposts + '" ' +
                        'data-colorsheme="' + colorscheme + '">' +
                '</div>';
     }

     return {
         restrict: 'A',
         scope: {},
         controller: function($location, $element, $scope, config) {


           var intro = config.commentWelcome;
           var href        = config.canonicalDomain + $location.url();
           var numposts    = 5;
           var colorscheme = 'light';

           $element.html(createHTML(intro, href, numposts, colorscheme));
           if (typeof(FB) !== 'undefined') {
             FB.XFBML.parse($element[0]);
           }
         }
     };
});