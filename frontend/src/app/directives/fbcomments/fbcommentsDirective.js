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
         controller: function($location, $element, $scope, Time, config) {

             Time.getTime().then(function(data){

               var time = new Date(data.data.time);
               var hour = time.getHours();
               if ((hour > config.commentOpenHour) && (hour < config.commentClosingHour)) {
                 var intro = config.commentWelcome;
                 var href        = $location.absUrl();
                 var numposts    = 5;
                 var colorscheme = 'light';

                 $element.html(createHTML(intro, href, numposts, colorscheme));
                 if (typeof(FB) !== 'undefined') {
                   FB.XFBML.parse($element[0]);
                 }
               } else {
                 var commentsClosed = config.commentClosed;
                 $element.html('<div class="comment-welcome">' + commentsClosed + '</div>');
               }
             });

         }
     };
});