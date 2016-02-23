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

function navigationController($scope, $anchorScroll, $location) {
    var self = this;

    self.sections = [
        {name: 'home', icon: 'home'},
        {name: 'profile', icon: 'profile'},
        {name: 'skills', icon: 'skills'},
        {name: 'projects', icon: 'projects'},
        {name: 'stories', icon: 'stories'},
        {name: 'contact', icon: 'contact'}
    ];

    self.goToAnchor = function (x) {
        var newHash = 'anchor-' + x;
        if ($location.hash() !== newHash) {
            $location.hash('anchor-' + x);
        } else {
            $anchorScroll();
        }
    };
}

angular.module('Navigation', [])
    .directive('navigationDirective', navigationDirective)
    .controller('navigationController', navigationController);