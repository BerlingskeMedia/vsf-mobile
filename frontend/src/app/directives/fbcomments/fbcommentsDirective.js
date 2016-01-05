'use strict';

app.directive('stiftenFbcomments', function(){
    function createHTML(href, numposts, colorscheme) {
         return '<div class="fb-comments" ' +
                        'data-width="100%" ' +
                        'data-href="' + href + '" ' +
                        'data-numposts="' + numposts + '" ' +
                        'data-colorsheme="' + colorscheme + '">' +
                '</div>';
     }

     return {
         restrict: 'A',
         scope: {},
         controller: function($location, $element) {


             var href        = $location.absUrl();
             var numposts    = 5;
             var colorscheme = 'light';

             $element.html(createHTML(href, numposts, colorscheme));
             if (typeof(FB) !== 'undefined') {
               FB.XFBML.parse($element[0]);
             }
         }
     };
});