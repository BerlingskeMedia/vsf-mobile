/* global Hammer:true */

'use strict';


// TODO: This should be a directive to put on ng-view instead!
app.controller('FrontpageController', function ($rootScope) {
    if ($rootScope.scrollstatus === 'scrolled') {
        window.scrollTo(0,20);
    } else {
        window.scrollTo(0,0);
    }
});
