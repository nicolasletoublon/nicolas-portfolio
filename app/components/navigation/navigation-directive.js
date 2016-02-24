'use strict';

function navigationDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/navigation/navigation.html",
        bindToController: true,
        controllerAs    : "navigation",
        controller      : 'navigationController'
    };
}

function navigationController($scope, $mdSidenav, $anchorScroll, $location, $window) {
    var self = this;

    self.sections = [
        {name: 'home', icon: 'home'},
        {name: 'profile', icon: 'person_outline'},
        {name: 'skills', icon: 'palette'},
        {name: 'stories', icon: 'timelapse'},
        {name: 'contact', icon: 'contact_mail'}
    ];

    self.toggleMenu = function(id) {
        $mdSidenav(id).toggle();
    };

    self.goToAnchor = function (x, id) {
        var newHash = 'anchor-' + x;
        if ($location.hash() !== newHash) {
            $location.hash('anchor-' + x);
/*
            var id2 = 'anchor-' + x;
            $(id2).offsetTop
*/


            $mdSidenav(id).toggle();
            //$window.scroll(300);
        } else {
            $anchorScroll();
            $mdSidenav(id).toggle();
        }
    };
}

angular.module('Navigation', [])
    .directive('navigationDirective', navigationDirective)
    .controller('navigationController', navigationController);