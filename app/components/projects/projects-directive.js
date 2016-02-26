'use strict';

function projectsDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/projects/projects.html",
        bindToController: true,
        controllerAs    : "projects",
        controller      : 'projectsController'
    };
}

projectsController.$inject = ["$scope", "$interval", "$timeout"];
function projectsController($scope, $interval, $timeout) {
    var self = this;

    self.map = { center: { latitude: 44.859671, longitude: -0.675391 }, zoom: 8 };
    self.marker = {
        id: 0,
        coords: {
            latitude: 44.859671, longitude: -0.675391
        },
        options: {
            draggable: false
        }
    };

    $timeout(function () {
        self.marker.coords = {
            latitude: 42.1451,
            longitude: -100.6680
        };
        $timeout(function () {
            self.marker.coords = {
                latitude: 43.1451,
                longitude: -102.6680
            };
        }, 2000);
    }, 1000);

}

angular.module('Projects', ['uiGmapgoogle-maps'])
    .directive('projectsDirective', projectsDirective)
    .controller('projectsController', projectsController);