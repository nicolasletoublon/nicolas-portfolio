'use strict';

function interestDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/interest/interest.html",
        bindToController: true,
        controllerAs    : "interest",
        controller      : 'interestController'
    };
}

interestController.$inject = ["$scope"];
function interestController($scope) {
    var self = this;

    self.logos = [
        {href: "http://stackoverflow.com/questions/796087/make-a-div-into-a-link", image: "react", col: 2, row: 2},
        {href: "http://gruntjs.com/", image: "grunt", col: 2, row: 2},
        {href: "https://angularjs.org/", image: "angular", col: 2, row: 2},
        {href: "http://ionicframework.com/", image: "ionic", col: 4, row: 2},
        {href: "http://www.material-ui.com/#/", image: "mui", col: 2, row: 2},
        {href: "https://www.mongodb.org/", image: "mongo", col: 2, row: 2},
        {href: "https://nodejs.org/en/", image: "node", col: 4, row: 2},
        {href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3", image: "css3", col: 2, row: 2}
    ];


}

angular.module('Interest', [])
    .directive('interestDirective', interestDirective)
    .controller('interestController', interestController);