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

footerController.$inject = [];
function footerController() {
}

angular.module('Footer', [])
    .directive('footerDirective', footerDirective)
    .controller('footerController', footerController);