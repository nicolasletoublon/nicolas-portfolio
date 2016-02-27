'use strict';

function contactDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/contact/contact.html",
        bindToController: true,
        controllerAs    : "contact",
        controller      : 'contactController'
    };
}

contactController.$inject = [];
function contactController() {
    var self = this;

    self.user = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
}

angular.module('Contact', [])
    .directive('contactDirective', contactDirective)
    .controller('contactController', contactController);