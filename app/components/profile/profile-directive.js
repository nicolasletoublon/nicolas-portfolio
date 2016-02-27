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

profileController.$inject = ["$mdSidenav", "$window"];
function profileController($mdSidenav, $window) {
    var self = this;

    self.togglePicture = function(id) {
        $('.picture-container-side').css('padding-top', $window.scrollY + 110);
        $mdSidenav(id).toggle();
    };
}

angular.module('Profile', [])
    .directive('profileDirective', profileDirective)
    .controller('profileController', profileController);