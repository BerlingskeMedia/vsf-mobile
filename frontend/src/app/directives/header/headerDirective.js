'use strict';

app.directive('stiftenHeader', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/header/headerTemplate.html',
        scope: false,
        controller: function($scope, $rootScope) {
            $scope.showToplist = 0;
            $scope.showMenu = 0;
            $scope.socials = appConfig.footer.socials;
            $scope.menuState = 0;
            $scope.toplistState = 0;
            $scope.lockbg = 0;

            $scope.leftmnclk = function () {
                if( $scope.menuState == 0 || $scope.menuState == "diactive") {

                    $scope.menuState = "active";
                    $scope.toplistState = "diactive";
                    $scope.lockbg = 'bglocker';
                } else {
                    $scope.menuState = "diactive";
                    $scope.lockbg = '';
                }
                console.log($scope.lockbg);
            };

            $scope.rightmnclk = function () {
                if($scope.toplistState == 0 || $scope.toplistState == "diactive") {

                    $scope.toplistState = "active";
                    $scope.menuState = "diactive";
                    $scope.lockbg = 'bglocker'
                } else {
                    $scope.toplistState = "diactive";
                    $scope.lockbg = '';
                }

            };

            $scope.status = "first-time-view";
            angular.element(window).bind('scroll', function() {
                if(window.pageYOffset > 0) {
                    $scope.status = 'invisible';
                    $rootScope.scrollstatus = 'scrolled';
                } else {
                    $scope.status = 'visible';
                    $rootScope.scrollstatus = 'unscrolled';
                }
                $scope.$apply();
            });

            $scope.closeMenus = function() {
                if($scope.menuState == 'active' || $scope.toplistState == 'active') {

                    $scope.toplistState = 'diactive';


                    $scope.menuState = 'diactive';

                    $scope.lockbg = '';
                }
            }
        }
    };
});