'use strict';

function skillsDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/skills/skills.html",
        bindToController: true,
        controllerAs    : "skills",
        controller      : 'skillsController'
    };
}

function skillsController($scope) {
    var self = this;
}

angular.module('Skills', [])
    .directive('skillsDirective', skillsDirective)
    .controller('skillsController', skillsController);