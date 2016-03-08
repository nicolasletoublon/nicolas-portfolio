'use strict';
var angular = require('angular');

function footerDirective() {
    return {
        restrict        : "E",
        templateUrl     : require('./footer.html'),
        bindToController: true,
        controllerAs    : "footer",
        controller      : 'footerController'
    };
}

footerController.$inject = [];
function footerController() {}

angular.module('Footer', [])
    .directive('footerDir', footerDirective)
    .controller('footerController', footerController);