'use strict';
var angular = require('angular');

function rightProfileDirective() {
    return {
        restrict: "E",
        templateUrl: require('./right-profile.html')
    };
}

angular.module('RightProfile', [])
    .directive('rightProfile', rightProfileDirective);