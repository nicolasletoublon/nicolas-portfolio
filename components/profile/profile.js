'use strict';
var angular = require('angular');
var $ = require('jquery');

function profileDirective() {
    return {
        restrict: "E",
        templateUrl: require('./profile.html'),
        bindToController: true,
        controllerAs: "profile",
        controller: 'profileController'
    };
}

profileController.$inject = ["$mdSidenav", "$window"];
function profileController($mdSidenav, $window) {
    var self = this;

    self.togglePicture = function (id) {
        $('.picture-container-side').css('padding-top', $window.scrollY + 50);
        $mdSidenav(id).toggle();
    };
}

angular.module('Profile', ['RightProfile'])
    .directive('profile', profileDirective)
    .controller('profileController', profileController);