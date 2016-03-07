'use strict';
var angular = require('angular');
var $ = require('jquery');

function profileDirective() {
    return {
        restrict: "E",
        templateUrl: "components/profile/profile.html",
        bindToController: true,
        controllerAs: "profile",
        controller: 'profileController'
    };
}

profileController.$inject = ["$mdSidenav", "$window"];
function profileController($mdSidenav, $window) {
    var self = this;

    self.togglePicture = function (id) {
        $('.picture-container-side').css('padding-top', $window.scrollY + 110);
        $mdSidenav(id).toggle();
    };
}

function rightProfileDirective() {
    return {
        restrict: "E",
        templateUrl: "components/profile/right-profile.html"
    };
}

angular.module('Profile', [])
    .directive('profile', profileDirective)
    .directive('rightProfile', rightProfileDirective)
    .controller('profileController', profileController);