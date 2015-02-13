/**
 * Created by Tore Julø on 19/01/15.
 */
'use strict';

app.directive('articleDirective', function($routeParams, $window, ContentItems, $timeout) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {

            var self = this;
            var scrolling = false;
            var touchietouchie = false;
            var contwidth = element[0].offsetWidth;
            var scrolly = window.scrollY;
            var addedMobileStaticPos = -1000;
            var socialbox = $('.social-box');
            var sharebuttons = $(socialbox).find('.button');
            var stickysocialbox = $('.sticky-social-box');

            var watcher = scope.$watch('contentitem', function(data) {
                if (data) {
                    scope.loaded = true;
                    init(data);
                    watcher();
                }
            });

            var moveElem = function(element, transform, origin, transition, opacity) {
                var cssattributes = {};
                var transformorigin = getTransformOrigin();
                if (transform !== null) {
                    cssattributes.MsTransform       = transform;
                    cssattributes.MozTransform      = transform;
                    cssattributes.WebkitTransform   = transform;
                    cssattributes.transform         = transform;
                }

                cssattributes['-webkit-transform-origin']  = transformorigin;
                cssattributes['-ms-transform-origin']      = transformorigin;
                cssattributes['transform-origin']         = transformorigin;

                if (transition !== null) {
                    cssattributes.MsTranstion         = transition;
                    cssattributes.MozTransition       = transition;
                    cssattributes.WebkitTransition    = transition;
                    cssattributes.transition          = transition;
                }
                cssattributes.opacity = opacity ? opacity : 1;

                angular.element(element).css(cssattributes);
            };

            var getScrollY = function() {
                if (!scrolly) {
                    scrolly = window.scrollY;
                }
                return scrolly;
            };

            var getTransformOrigin = function() {
                return 'center ' + (window.screen.availHeight + getScrollY()) + 'px';
            };

            var getBounds = function () {

                scope.$apply(function() {
                    scope.pageHeight = angular.element(window).height();
                    scope.pageLeft = angular.element('.main').offset().left;
                    scope.tagBgHeight = '300px';
                    /*$scope.tagBgHeight = (function () {
                     var height = img.height() + img.offset().top - 150;
                     height = (height > 250) ? height : 250;
                     return height;
                     })();*/
                });
            };

            var setDraggable = function (targetel) {

                var clipdist = 20;
                var transform = 0;

                var dragelem = function (ev) {

                    var offsetdist = Math.abs(ev.deltaX) - clipdist,
                        num         = (1 - ((Math.abs(ev.deltaX) / (contwidth / 2)) * 0.4)).toFixed(2);

                    if (ev.deltaX < 0) {
                        offsetdist = -offsetdist;
                        scope.$apply(function() {
                            scope.voteDirection = 'downvote';
                        });
                    } else {
                        scope.$apply(function() {
                            scope.voteDirection = 'upvote';
                        });
                    }
                    transform   = 'rotate(' + offsetdist / 10 + 'deg) translate3d(0,0,0)';
                    if (!scrolly) {
                        scrolly = window.scrollY;
                    }

                    //TODO: Cache this value somewhere, so that it isn't called every time we move.
                    var transformorigin = true;

                    if (Math.abs(ev.deltaX) > clipdist) {
                        moveElem(targetel, transform, transformorigin, 'none', num);
                    }
                };



                var resetelem = function (ev) {
                    scope.votingBarShow = 'show';
                    scope.$apply();

                    if (Math.abs(ev.deltaX) > (contwidth / 3) && !scrolling) {
                        var deltaX = ev.deltaX;
                        if (deltaX > 0) {
                            scope.upvote();
                        } else {
                            scope.downvote();
                        }

                    } else {
                        scope.swiping = '';
                        scope.voteDirection = '';
                        scope.$apply();
                        moveElem(targetel, '', null, 'all .3s', 1);
                    }
                };

                var refresh = function () {
                    if (!touchietouchie) {
                        scrolling = false;
                    }
                };

                var options = {
                    dragLockToAxis: true,
                    dragBlockHorizontal: true
                };

                var initlisteners = function (element) {
                    var control = new Hammer(element, options);
                    var timer;
                    //setTransformOrigin(element);

                    control
                        .on('panleft panright swipeleft swiperight', function (ev) {
                            if (!scrolling) {
                                dragelem(ev);
                            }
                        })
                        .on('panend', function (ev) {
                            resetelem(ev);
                        });

                    $window.addEventListener('touchstart', function() {
                        touchietouchie = true;
                        scrolling = false;
                    }, false);
                    $window.addEventListener('touchend', function() {
                        touchietouchie = false;
                    }, false);

                    $window.onscroll = function() {
                        scrolling = true;
                        scrolly = false;
                        moveElem(targetel, '', null, 'all .3s', 1);
                        clearTimeout(timer);
                        timer = setTimeout(refresh, 10);
                        scrollActions();
                    };
                };
                initlisteners(targetel);
            };

            var scrollActions = function () {
                scope.votingBarShow = 'show';

                if ($(socialbox).length > 1) {
                    socialbox.splice(0, 1);
                    return;
                }

                if ($(socialbox).offset().top - $(document).scrollTop() < 45 && !$(sharebuttons[0]).hasClass('mobile-static')) {
                    setSocialbuttonsSticky();
                }
                if ($(document).scrollTop() < addedMobileStaticPos) {
                    setSocialbuttonsFixed();
                }
            };


            scope.upvote = function () {
                moveElem(element, '', null ,'','');
                scope.vote = 'upvoted';
                ContentItems.save({id: $routeParams.id, action: 'upvote'}, null);
                scope.next();
            };

            scope.downvote = function () {
                moveElem(element, '', null ,'','');
                scope.vote = 'downvoted';
                ContentItems.save({id: $routeParams.id, action: 'downvote'}, null);
                scope.next();
            };

            var setSocialbuttonsFixed = function () {
                scope.sticky = false;
                $.each($(sharebuttons), function (key, value) {
                    $(value).removeClass('mobile-static');
                });
                addedMobileStaticPos = -1000;
            };

            var setSocialbuttonsSticky = function () {
                scope.sticky = true;
                $.each($(sharebuttons), function (key, value) {
                    $(value).addClass('mobile-static');
                });
                addedMobileStaticPos = $(document).scrollTop();
            };

            setTimeout(function () {
                scope.votingBarShow = 'show';
                scope.$apply();
            }, 10000);

            var iframeResize = function () {
                var bodyText = $('.bodytext')[0];
                element.find('iframe').each(function(i) {
                    this.width = '100%';
                    this.height = bodyText.clientWidth * 0.65;;
                });
            };

            $window.onresize = function () {
                getBounds();
                iframeResize();
                scope.$apply();
            };

            var init = function(data) {
                $timeout(function() {
                    getBounds();
                    iframeResize();
                    if (Modernizr.touch) {
                        setDraggable(element[0]);
                    } else {
                        $window.onscroll = function() {
                            scrollActions();
                        };
                    }

                    jwHandle(data);
                }, 0);
            };

            // JW player video handling & VideoPlaza
            var jwHandle = function(data) {
                $.each($("video"), function(key, item) {
                    var playerConfig = {
                        primary: 'html5',
                        controlbar: 'over',
                        file: $(item).attr("src"),
                        image: $(item).attr("poster"),
                        width: "100%",
                        height: $(".bodytext").width() * 0.55,
                        advertising: {
                            client: "vast",
                            "schedule":{
                                "preroll":{
                                    "tag":getVideoPlazaTag($(item).attr("src"), data.title, data.tags[0].name, "p"),
                                    "offset":"pre"
                                },
                                "postroll":{
                                    "tag":getVideoPlazaTag($(item).attr("src"), data.title, data.tags[0].name, "po"),
                                    "offset":"post"
                                }
                            },
                            "skipoffset":"4"
                        },
                        // test
                        // playlist: "http://www.bt.dk.bond.u.net/webtv-player/mrss/38133/0/playlist.xml?mobile=false",
                        playlist: $(item).attr("data-playlist")+"?mobile=false",
                        related: {
                            // test
                            // file:"http://www.bt.dk.bond.u.net/webtv-player/mrss/38133/13/playlist.xml?mobile=false",
                            dimensions: "120x70",
                            file: $(item).attr("data-related")+"?mobile=false",
                            onclick:"play",
                            heading:"Relaterede Videoer"
                        },
                        gemius_stream_tracking:{
                            id:"d7LlPwL5ETHGAZ1Uhj.SP7eP73wwyBtydZ52gInthsX.W7",// need the right one (new)
                            hitcollector:"pro.hit.gemius.pl"
                        },
                        streamsense: {
                            loggingEnabled: false
                        }
                    };

                    var playerItem  = jwplayer(item).setup(playerConfig);

                    // Store player configuration in jwPlayer object (hack for jw6ss)
                    playerItem.config = playerConfig;

                    // Streamsense tracking with jw player plugin jw6ss
                    JW6SS.setupUdm("http://int.sitestat.com/berlingske/stiften/s?");
                    JW6SS.observeAll();
                });
            };

            // Prepare VideoPlaza url "tag" for JWPlayer advertising
            var getVideoPlazaTag    = function(videoUrl, videoTitle, tag, tt) {
                var vpConfig    = {
                    rt:"vast_2.0",
                    pf:"html5",

                    // cv stands for carrier version and is the current version of the sdk the integration uses
                    cv:"h5_1.0.12.15.1",
                    t:tag,
                    s:"stiften.dk",

                    // cf tells us if this is a long or short clip (depending on cliplength in Karbon)
                    cf:"short_form",
                    ci: videoUrl + "-" + videoTitle,
                    vwt:"610",
                    vht:"407",

                    // tt is ticket type, p stads for preroll, po postroll, m is midroll etc
                    tt:tt,

                    // st has to do with toggling non-vast2.0 supported tracking events
                    // (our own ticket protocol used in our sdk's supports more tracking events then vast does)
                    st:"0:0,3,4,10,20:1,91,100",
                    rnd:Math.ceil( Math.random() * 100000000000000)
                };

                var vpUrl       = "http://dk-berlingske.videoplaza.tv/proxy/distributor/v2?";
                // Test account
                // vpUrl           = "http://dk-berlingske-dev.videoplaza.tv/proxy/distributor/v2?";

                return vpUrl + $.param(vpConfig);
            };
        }
    };
});
