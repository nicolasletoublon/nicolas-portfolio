angular
    .module('Application', ['ngMaterial'])
    .controller('ApplicationController', function ($scope, $timeout, $mdSidenav, $log) {
        /*var firstPosition = null;
        $(window).scroll(function () {
            if (!firstPosition) firstPosition = $('#toolbar-nav')[0].offsetTop;
            if ($(window).scrollTop() > firstPosition) {
                $('#toolbar-nav').addClass('fixedTop');
            } else {
                $('#toolbar-nav').removeClass('fixedTop');
            }
        });*/
    })
    .controller('ToolBarController', function ($scope, $anchorScroll, $location, $timeout, $mdSidenav) {

        $scope.sections = [
            'home',
            'profile',
            'skills',
            'projects',
            'story',
            'contact'
        ];

/*
        $scope.toggleRight = function() {
            $mdSidenav('right').toggle();
        };
        $scope.isOpenRight = function () {
            return $mdSidenav('right').isOpen();
        };
*/


        $scope.goToAnchor = function (x) {
            var newHash = 'anchor-' + x;
            if ($location.hash() !== newHash) {
                $location.hash('anchor-' + x);
            } else {
                $anchorScroll();
            }
        };
/*
        $scope.close = function () {
            $mdSidenav('right').close();
        };*/
    }).controller('SideBarMenuController', function ($scope, $timeout, $mdSidenav, $log) {

    })
    .config(function ($mdThemingProvider, $mdIconProvider) {

    });