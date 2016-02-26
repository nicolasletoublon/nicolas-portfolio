'use strict';

function projectsDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/projects/projects.html",
        bindToController: true,
        controllerAs    : "projectCtrl",
        controller      : 'projectsController'
    };
}

projectsController.$inject = ["$scope", "$interval", "$timeout"];
function projectsController($scope, $interval, $timeout) {
    var self = this;

    self.projects = [
        {
            name: 'ttoo',
            subtitle: '',
            description: 'dsf',
            subtitle2: '',
            description2: '',
            coords: {
                x: '',
                y: ''
            },
            zoom: 12,
            technos1 : ["node large", "angular ", "css3"],
            technos2 : ["node", "angular", "css3"]


        }
    ];


    self.map = { center: { latitude: 44.859671, longitude: -0.675391 }, zoom: 10 };
    self.marker = {
        id: 0,
        coords: {
            latitude: 44.859671, longitude: -0.675391
        },
        options: {
            draggable: false
        }
    };

}

angular.module('Projects', ['uiGmapgoogle-maps'])
    .directive('projectsDirective', projectsDirective)
    .controller('projectsController', projectsController);