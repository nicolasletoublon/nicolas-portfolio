'use strict';

function profileDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/profile/profile.html",
        bindToController: true,
        controllerAs    : "profile",
        controller      : 'profileController'
    };
}

function profileController($scope, $mdSidenav, $window) {
    var self = this;

    self.togglePicture = function(id) {
        $('.picture-container-side').css('padding-top', $window.scrollY + 40);
        /*$('.sticked-button').css('top', $window.scrollY + 360);*/
        $mdSidenav(id).toggle();
    };

/*    self.closeSide = function (id) {
        $('.picture-container-side').css('padding-top', 0);
        $('.sticked-button').css('top', '44%');
        $mdSidenav(id).toggle();
    };*/
}

angular.module('Profile', [])
    .directive('profileDirective', profileDirective)
    .controller('profileController', profileController);