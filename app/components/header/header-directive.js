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

headerController.$inject = ["$scope"];
function headerController($scope) {
    var self = this;
}

angular.module('Header', [])
    .directive('headerDirective', headerDirective)
    .controller('headerController', headerController);