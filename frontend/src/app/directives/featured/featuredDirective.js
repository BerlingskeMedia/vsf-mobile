'use strict';


app.directive('stiftenFeatured', function($routeParams, ForsideContent, $route, $rootScope) {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/featured/featuredTemplate.html',
        link: function(scope, element, attr) {
          
            var frontpageContent = ForsideContent.get();
            frontpageContent.$promise.then(function(){
              $rootScope.article = frontpageContent.items[0];
              
            });
          

        }
    };
});
