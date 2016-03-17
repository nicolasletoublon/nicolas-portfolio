'use strict';
var angular = require('angular');
require('ngMap');

function projectsDirective() {
    return {
        restrict: "E",
        templateUrl: require('./projects.html'),
        bindToController: true,
        controllerAs: "projectController",
        controller: 'projectsController'
    };
}

projectsController.$inject = [];
function projectsController() {
    var self = this;
    var projects = require('./projects.json');

    self.apiKey = 'AIzaSyC49hRYpSCphd8z1Ahc8ThR4O_jlNOg9QA';

    self.previousProject = function () {
        var id = self.project.id - 1;
        if (id === -1) id = projects.length - 1;

        self.project = projects[id];
    };

    self.nextProject = function () {
        var id = self.project.id + 1;
        if (id === projects.length) id = 0;

        self.project = projects[id];
    };

    self.project = projects[0];
}

angular.module('Projects', ['ngMap'])
    .directive('projects', projectsDirective)
    .controller('projectsController', projectsController);