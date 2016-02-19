'use strict';

function headerDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/header/header.html",
        bindToController: true,
        controllerAs    : "header",
        controller      : 'headerController'
    };
}

function headerController() {
    var self = this;
}

angular.module('Header', [])
    .directive('headerDirective', headerDirective)
    .controller('headerController', headerController);