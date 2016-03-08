'use strict';
var angular = require('angular');

function headerDirective() {
    return {
        restrict        : "E",
        templateUrl     : require('./header.html'),
        bindToController: true,
        controllerAs    : "header",
        controller      : 'headerController'
    };
}

headerController.$inject = [];
function headerController() {
}

angular.module('Header', [])
    .directive('headerDir', headerDirective)
    .controller('headerController', headerController);