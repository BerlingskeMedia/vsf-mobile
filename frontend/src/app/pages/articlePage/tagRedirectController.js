'use strict';

/**
 *
 * Created by exg-xnich on 27/11/2014.
 */
// URL REDIRECT. IF URL xxx.com/tag => redirect to first article from the tag.
app.controller('TagRedirectController', function($routeParams, $location, TagContent) {

    TagContent.get({tag: $routeParams.tag, action: 'first'}, function(response) {
            //vars for url
            var contentItemSlug = response.items[0].slug,
                tagId = response.items[0].tags[0].slug;
            //url build
            var url = tagId + '/' + contentItemSlug;
            $location.path(url);
    },
    function(error) {
        //error callback
        $location.path('/404');
    });

});

