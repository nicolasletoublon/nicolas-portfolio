'use strict';

function navigationDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/navigation/navigation.html",
        bindToController: true,
        controllerAs    : "navigation",
        controller      : 'navigationController'
    };
}

navigationController.$inject = ["$scope",  "$mdSidenav", "$anchorScroll", "$location"];
function navigationController($scope, $mdSidenav, $anchorScroll, $location) {
    var self = this;

    self.sections = [
        {name: 'home', icon: 'home', active: true, anchor: "anchor-home"},
        {name: 'profile', icon: 'person_outline', anchor: "anchor-profile"},
        {name: 'stories', icon: 'timelapse', anchor: "anchor-stories"},
        {name: 'projects', icon: 'format_paint', anchor: "anchor-projects"},
        {name: 'skills', icon: 'palette', anchor: "anchor-skills"},
        {name: 'contact', icon: 'contact_mail', anchor: "anchor-contact"}
    ];

    self.toggleMenu = function(id) {
        $mdSidenav(id).toggle();
    };

    self.goToAnchorMobile = function (section, id) {
         $mdSidenav(id).toggle().then(function() {
             self.activate(section);
         })
    };

    self.activate = function(section) {
        for (var i = 0; i < self.sections.length; i++) {
            self.sections[i].active = false;
        }

        section.active = true;
    }
}

angular.module('Navigation', ["duScroll"])
    .value('duScrollDuration', 1000)
    .directive('navigationDirective', navigationDirective)
    .controller('navigationController', navigationController);