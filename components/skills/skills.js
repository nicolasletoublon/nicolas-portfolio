'use strict';
var angular = require('angular');

function skillsDirective() {
    return {
        restrict        : "E",
        templateUrl     : require('./skills.html'),
        bindToController: true,
        controllerAs    : "skillsCtrl",
        controller      : 'skillsController'
    };
}

skillsController.$inject = [];
function skillsController() {
    var self = this;

    self.skills = require('./skills.json');

}

angular.module('Skills', [])
    .directive('skills', skillsDirective)
    .controller('skillsController', skillsController);