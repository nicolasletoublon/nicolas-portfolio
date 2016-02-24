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
        $mdSidenav(id).toggle();
    };
}

angular.module('Profile', [])
    .directive('profileDirective', profileDirective)
    .controller('profileController', profileController);