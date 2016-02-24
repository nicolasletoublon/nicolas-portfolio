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

function navigationController($scope, $mdSidenav, $anchorScroll, $location) {
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

    self.goToAnchor = function (anchor, id) {
        var newHash = 'anchor-' + anchor;
        if(id) {
            $mdSidenav(id).toggle().then(function() {
                scroll(newHash, anchor);
            });
        } else {
            scroll(newHash, anchor);
        }
    };

    function scroll(newHash, anchor) {
        if ($location.hash() !== newHash) {
            $location.hash('anchor-' + anchor);
        } else {
            $anchorScroll();
        }
    }
}

angular.module('Navigation', [])
    .directive('navigationDirective', navigationDirective)
    .controller('navigationController', navigationController);