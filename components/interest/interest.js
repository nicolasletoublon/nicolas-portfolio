'use strict';
var angular = require('angular');

function interestDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/interest/interest.html",
        bindToController: true,
        controllerAs    : "interest",
        controller      : 'interestController'
    };
}

interestController.$inject = [];
function interestController() {
    
}

angular.module('Interest', [])
    .directive('interest', interestDirective)
    .controller('interestController', interestController);