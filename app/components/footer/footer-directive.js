'use strict';

function footerDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/footer/footer.html",
        bindToController: true,
        controllerAs    : "footer",
        controller      : 'footerController'
    };
}

footerController.$inject = ["$scope"];
function footerController($scope) {
    var self = this;
}

angular.module('Footer', [])
    .directive('footerDirective', footerDirective)
    .controller('footerController', footerController);