/* global Hammer:true */

'use strict';

app.controller('ArticleController', function ($routeParams, $scope, TagContentItem, ContentItems, $location, config, $sce, $window, $rootScope) {

    var self = this;
    var element = null;
    var encodedHref = encodeURIComponent($location.absUrl());
    var scrolling = false;
    var touchietouchie = false;
    var img = $('.article-heading-wrapper .main-article-image');
    var cards = $('.article-container')[0];
    var contwidth = cards.offsetWidth;
    var addedMobileStaticPos = -1000;

    $scope.votingBarShow = '';
    $scope.swiping = '';

    // Note: facebook.com/dialog/share is the recommended way of sharing on Facebook. But we we're not able to test it properly.
    //$scope.facebookUrl = "https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=" + encodedHref + "&redirect_uri=" + encodedHref;
    $scope.facebookUrl = 'https://www.facebook.com/sharer.php?u=' + encodedHref;
    $scope.twitterUrl = 'http://twitter.com/share?url=' + $location.absUrl() + '&hashtags=stiftendk';

    $scope.votingText = config.texts.articleVoteText;
    $scope.votingTextUp = config.texts.votingTextUp;
    $scope.votingTextDown = config.texts.votingTextDown;

    $scope.tag = $routeParams.tag;

    var contentResponse = TagContentItem.get({tag: $routeParams.tag, id: $routeParams.id}, function (data) {
        // Checking of article title and body and redirect to the next article in case if its empty
        if (!data.items[0].body && !data.items[0].title) {
            self.next();
        }
        // Assign tag colors template
        $scope.template = data.items[0].tags[0].template;

        // Assign author object
        $scope.author = data.items[0].author;

        contentResponse.items[0].body = $sce.trustAsHtml(contentResponse.items[0].body);
        contentResponse.items[0].published *= 1000;
        $scope.contentitem = contentResponse.items[0];
        element = document.getElementById($scope.contentitem.nodeId);
    }, function (data) {
        $location.path('/404');
    });

    $scope.next = function () {
        window.scrollTo(0, 20);
        if (contentResponse && contentResponse.navigation && contentResponse.navigation.next) {
            $location.path(contentResponse.navigation.next.ref);
        } else {
            if (contentResponse) {
                // Last article in list, go to landing page for tag
                $location.path('/' + $routeParams.tag + '/finish');
            } else {
                $location.path('/404');
            }
        }
    };

    if ($rootScope.scrollstatus === 'scrolled') {
        window.scrollTo(0,20);
    } else {
        window.scrollTo(0,0);
    }

});
