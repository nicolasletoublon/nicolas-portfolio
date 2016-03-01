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

    self.form = {
        name: "contact_form_name",
        email: "contact_form_email",
        subject: "contact_form_subject",
        message: "contact_form_message"
    }
}

angular.module('Contact', [])
    .directive('contactDirective', contactDirective)
    .controller('contactController', contactController);