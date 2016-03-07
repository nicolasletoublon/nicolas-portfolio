'use strict';
var angular = require('angular');

function frameworksDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/frameworks/frameworks.html",
        bindToController: true,
        controllerAs    : "frameworks",
        controller      : 'frameworksController'
    };
}

frameworksController.$inject = [];
function frameworksController() {
    var self = this;

    self.littleLogos = [
        {href: "http://ionicframework.com/", image: "ionic", col: 6, row: 2},
        {href: "https://angularjs.org/", image: "angular", col: 2, row: 2},
        {href: "http://stackoverflow.com/questions/796087/make-a-div-into-a-link", image: "react", col: 2, row: 2},
        {href: "http://gruntjs.com/", image: "grunt", col: 2, row: 2},
        {href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3", image: "css3", col: 2, row: 2},
        {href: "https://www.mongodb.org/", image: "mongo", col: 2, row: 2},
        {href: "http://www.material-ui.com/#/", image: "mui", col: 2, row: 2},
        {href: "https://nodejs.org/en/", image: "node", col: 6, row: 2}
    ];

    self.bigLogos = [
        {href: "http://ionicframework.com/", image: "ionic", col: 4, row: 2},
        {href: "https://angularjs.org/", image: "angular", col: 2, row: 2},
        {href: "http://stackoverflow.com/questions/796087/make-a-div-into-a-link", image: "react", col: 2, row: 2},
        {href: "http://gruntjs.com/", image: "grunt", col: 2, row: 2},
        {href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3", image: "css3", col: 2, row: 2},
        {href: "http://www.material-ui.com/#/", image: "mui", col: 2, row: 2},
        {href: "https://nodejs.org/en/", image: "node", col: 4, row: 2},
        {href: "https://www.mongodb.org/", image: "mongo", col: 2, row: 2}
    ];


}

angular.module('Frameworks', [])
    .directive('frameworks', frameworksDirective)
    .controller('frameworksController', frameworksController);