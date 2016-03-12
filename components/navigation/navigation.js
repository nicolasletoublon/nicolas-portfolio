'use strict';
var angular = require('angular');
require('angular-scroll');
require('../dist/custom-sticky');
var $ = require('jquery');

function navigationDirective() {
    return {
        restrict: "E",
        templateUrl: require('./navigation.html'),
        bindToController: true,
        controllerAs: "navigation",
        controller: 'navigationController'
    };
}

navigationController.$inject = ["$mdSidenav", "$window"];
function navigationController($mdSidenav, $window) {
    var self = this;

    self.sections = [
        {name: 'menu_home', icon: 'home', active: true, anchor: "anchor-home"},
        {name: 'menu_profile', icon: 'person_outline', anchor: "anchor-profile"},
        {name: 'menu_stories', icon: 'timelapse', anchor: "anchor-stories"},
        {name: 'menu_projects', icon: 'format_paint', anchor: "anchor-projects"},
        {name: 'menu_skills', icon: 'palette', anchor: "anchor-skills"}
        /*{name: 'menu_contact', icon: 'contact_mail', anchor: "anchor-contact"}*/
    ];

    self.toggleMenu = function (id) {
        $('.menu-container-side').css('margin-top', $window.scrollY);
        $mdSidenav(id).toggle();
    };

    self.goToAnchorMobile = function (section, id) {
        $mdSidenav(id).toggle().then(function () {
            self.activate(section);
        })
    };

    self.activate = function (section) {
        for (var i = 0; i < self.sections.length; i++) {
            self.sections[i].active = false;
        }

        section.active = true;
    };

    self.activateTop = function () {
        for (var i = 0; i < self.sections.length; i++) {
            self.sections[i].active = false;
        }

        self.sections[1].active = true;
    };

    self.returnTop = function () {

    }
}

angular.module('Navigation', ["duScroll", "customSticky"])
    .value('duScrollDuration', 1000)
    .value('duScrollOffset', 47)
    .directive('navigation', navigationDirective)
    .controller('navigationController', navigationController);