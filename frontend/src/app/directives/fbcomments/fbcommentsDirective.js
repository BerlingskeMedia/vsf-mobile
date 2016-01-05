'use strict';

app.directive('stiftenFbcomments', function($location){
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
         link: function postLink(scope, elem, attrs) {


             var href        = $location.absUrl();
             var numposts    = 5;
             var colorscheme = 'light';

             elem.html(createHTML(href, numposts, colorscheme));
             FB.XFBML.parse(elem[0]);

         }
     };
});