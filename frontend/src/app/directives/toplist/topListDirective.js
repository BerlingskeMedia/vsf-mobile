'use strict';


app.directive('stiftenToplist', function($routeParams, TagContentItem, ContentItems, $route, $rootScope) {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/toplist/topListTemplate.html',
        link: function(scope, element, attr) {
            $rootScope.$on('$routeChangeSuccess', function(event, current) {
                if(current.params.tag) {
                    scope.showTagSwitch = 1;
                    scope.topListActiveTag = current.params.tag;
                    scope.topListCtrlTags = 1;
                } else {
                    scope.topListCtrlTags = 0;
                    scope.showTagSwitch = 0;
                }
                scope.loadArticles(scope, TagContentItem, ContentItems);
                scope.mobilePositioner();

            });
            // Filled later with article objects
            scope.topListArticles = null;
            // Strips article title after 55 letters
            scope.articleLetterLimit = 55;
            // Loads this number of articles
            scope.articleCount = attr.count;
            /**
             * Sets tab that gets loaded
             * 1 = liked
             * 2 = disliked
             * 3 = hot
             * default = 3
             * @type {number}
             */
            scope.topListCtrlTab = 3;
            /**
             * 0 = shows articles from all tags
             * 1 = shows tag related articles
             * @type {number}
             */
            scope.topListCtrlTags = 1;
            // 0 = hide | 1 = show
            scope.showTagSwitch = 0;
            //
            scope.tabSwitchPlacer = '';
            //
            // Tag logic
            //
            // for mobile view
            scope.mobilePositioner = function() {
                if(scope.showTagSwitch == 1) {
                    scope.tabSwitchPlacer = '';
                } else {
                    scope.tabSwitchPlacer = 'positionup';
                }
            };
            //switches between all or one tag and loads articles
            scope.switchShowTagStatus = function() {
                if(scope.topListCtrlTags == 0) {
                    scope.topListCtrlTags = 1;
                } else
                    scope.topListCtrlTags = 0;
                // load articles
                scope.loadArticles(scope, TagContentItem, ContentItems);
            };
            //
            // Tab logic
            //
            // returns true||false
            scope.tabIsSet = function(Tab) {
                return (scope.topListCtrlTab === Tab);
            };
            //Switches Tabs
            scope.switchTabs = function() {
                switch(scope.topListCtrlTab) {
                    case 1:
                        return scope.tab = 'upvotes';
                        break;
                    case 2:
                        return scope.tab = 'downvotes';
                        break;
                    case 3:
                        return  scope.tab = 'published';
                        break;
                    default:
                        return scope.tab = 'upvotes';
                }
            };
            // sets tab and loads articles
            scope.setTab = function(Tab) {
                scope.topListCtrlTab = Tab;
                scope.switchTabs();
                // load articles
                scope.loadArticles(scope, TagContentItem, ContentItems);
            };
            // // // // // // // // // // // // // // // // //
            /**
             * Loads articles
             * @param scope
             * @param TagContentItem
             * @param ContentItems
             */
            scope.loadArticles = function(scope, TagContentItem, ContentItems) {
                this.topListArticles = null;
                if(scope.topListCtrlTags == 0 || scope.showTagSwitch == 0) {
                    this.topListArticles = ContentItems.get({trimitems: "yes", 'pagesize' : scope.articleCount, 'sortby': scope.switchTabs()});
                } else {
                    this.topListArticles = scope.topListArticles = TagContentItem.get({trimitems: "yes", 'tag': scope.topListActiveTag, 'pagesize' : scope.articleCount, 'sortby': scope.switchTabs() });
                }
                scope.topListArticles = this.topListArticles;
            };
            scope.loadArticles(scope, TagContentItem, ContentItems);
        }
    };
});
