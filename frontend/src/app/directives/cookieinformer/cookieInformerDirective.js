'use strict';

app.directive('cookieinformer', function(){
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/cookieinformer/cookieInformerTemplate.html',
        $scope: false,
        controller : function($scope, $cookies) {
	        
	        // Checking if user already clicked the OK button
	        if($cookies.informed) {
		        $scope.statusClass = 'done';
	        }
	        
	        // Handling click on the OK button and hiding the bookmarklet
	        $scope.closeInformer = function() {
		        $scope.statusClass = 'done';
		        document.cookie = 'informed=true; expires=Fri, 3 Aug 2200 00:00:00 UTC; path=/'
            }
        }
    };
});