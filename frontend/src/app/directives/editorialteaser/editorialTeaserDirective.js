'use strict';

app.directive('stiftenEditorialSingleTeaser', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/editorialteaser/editorialSingleTeaserTemplate.html',
    };
});
app.directive('stiftenEditorialListTeaser', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/editorialteaser/editorialListTeaserTemplate.html'
    };
});