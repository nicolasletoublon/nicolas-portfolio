'use strict';
var angular = require('angular');
function contactDirective() {
    return {
        restrict        : "E",
        templateUrl     : require('./contact.html'),
        bindToController: true,
        controllerAs    : "contact",
        controller      : 'contactController'
    };
}

contactController.$inject = ['$http'];
function contactController($http) {
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
    };

    self.success = false;
    self.error = false;
    self.send = function () {

        var htmlBody = '<div>Name: ' + self.user.name + '</div>' +
            '<div>Email: ' + self.user.email + '</div>' +
            '<div>Message: ' + self.user.body + '</div>' +
            '<div>Date: ' + (new Date()).toString() + '</div>';

        $http({
            url: 'https://api.postmarkapp.com/email',
            method: 'POST',
            data: {
                'From': self.user.email,
                'To': 'letoublon.nicolas@gmail.com',
                'HtmlBody': htmlBody,
                'Subject': self.user.subject
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
            }
        }).success(function (data) {
            console.log(data);
            self.success = true;
            self.user = {};
        }).error(function (data) {
            console.log(data);
            self.error = true;
        });
    }
}

angular.module('Contact', [])
    .directive('contact', contactDirective)
    .controller('contactController', contactController);