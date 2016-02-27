'use strict';

function projectsDirective() {
    return {
        restrict: "E",
        templateUrl: "components/projects/projects.html",
        bindToController: true,
        controllerAs: "projectController",
        controller: 'projectsController'
    };
}

projectsController.$inject = [];
function projectsController() {
    var self = this;

    var projects = [
        {
            id: 0,
            name: '0',
            subtitle: 'subtitle',
            description: 'description',
            subtitle2: 'subtitle2',
            description2: 'description2',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["react large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 1,
            name: '1',
            subtitle: 'subtitle',
            description: 'description',
            subtitle2: 'subtitle2',
            description2: 'description2',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 2,
            name: '2',
            subtitle: 'subtitle',
            description: 'description',
            subtitle2: 'subtitle2',
            description2: 'description2',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 3,
            name: '3',
            subtitle: 'subtitle',
            description: 'description',
            subtitle2: 'subtitle2',
            description2: 'description2',
            marker: [45.501689, -73.567256], //montreal
            center: [45.501689, -73.567256],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        }
    ];

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
    .directive('projectsDirective', projectsDirective)
    .controller('projectsController', projectsController);