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

function profileController($scope) {
    var self = this;
}

angular.module('Profile', [])
    .directive('profileDirective', profileDirective)
    .controller('profileController', profileController);