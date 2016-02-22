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

function contactController($scope) {
    var self = this;

    self.user = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
}

angular.module('Contact', ['ngMessages'])
    .directive('contactDirective', contactDirective)
    .controller('contactController', contactController);