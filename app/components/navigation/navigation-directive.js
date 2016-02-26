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

navigationController.$inject = ["$scope",  "$mdSidenav", "$window"];
function navigationController($scope, $mdSidenav, $window) {
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
        var margin = 50;
        var position = $('#toolbar-nav')[0].offsetTop + $('#toolbar-nav')[0].offsetHeight + 30;

        if($window.scrollY <= position) margin = 0;

        $('.menu-container-side').css('margin-top', $window.scrollY + margin);
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
    .value('duScrollOffset', 50)
    .directive('navigationDirective', navigationDirective)
    .controller('navigationController', navigationController);