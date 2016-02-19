angular
    .module('Application', [])
    .directive('Navigation')
    .controller('NavigationController', function ($scope, $anchorScroll, $location, $timeout, $mdSidenav) {

        $scope.toggleRight = function() {
            $mdSidenav('right').toggle();
        };
        $scope.isOpenRight = function () {
            return $mdSidenav('right').isOpen();
        };


        $scope.goToAnchor = function (x) {
            var newHash = 'anchor-' + x;
            if ($location.hash() !== newHash) {
                $location.hash('anchor-' + x);
            } else {
                $anchorScroll();
            }
        };

        $scope.close = function () {
            $mdSidenav('right').close();
        };
    })