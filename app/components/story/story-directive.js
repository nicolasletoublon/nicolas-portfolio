'use strict';

function storyDirective() {
    return {
        restrict: "E",
        templateUrl: "components/story/story.html",
        bindToController: true,
        controllerAs: "storyCtrl",
        controller: 'storyController'
    };
}

storyController.$inject = ["$scope", "storyService", "$mdMedia", "$mdDialog", "$mdSidenav", "$window"];
function storyController($scope, storyService, $mdMedia, $mdDialog, $mdSidenav, $window) {
    var self = this;

    self.showAdvanced = function (ev, story) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: dialogController,
            templateUrl: 'components/story/templates/' + story.template + '.tmpl.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen,
            locals: {story: story}
        });

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    self.toggleMenu = function(id) {
        $mdSidenav(id).toggle();
    };
    self.showPanel = function(id, story) {
        self.story = story;
        $('.story-container-side').css('padding-top', $window.scrollY + 40);
        $mdSidenav(id).toggle();
    };

    self.stories = storyService.stories;

    self.keypress = function ($event, story) {
        if ($event.keyCode === 13) self.activateStory(story)
    };

    self.activateStory = function (story) {
        for (var i = 0; i < self.stories.length; i++) {
            self.stories[i].active = false;
            self.stories[i].focus = false;
        }
        story.focus = true;
        story.active = true;
    };
}

sidePanelController.$inject = ["$scope", "$mdDialog", "$mdMedia"];
function sidePanelController($scope, $mdDialog, $mdMedia) {

    $timeout(function () {
        var el = $('md-dialog');
        el.css('position', 'fixed');
        el.css('top', '10%');
        el.css('left', '10%');
    });

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}

dialogController.$inject = ["$scope", "$mdDialog", "$timeout"];
function dialogController($scope, $mdDialog, $timeout, story) {

    $scope.story = story;

    $timeout(function () {
        var el = $('md-dialog');
        el.css('position', 'fixed');
        el.css('top', '10%');
        el.css('left', '10%');
    });

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

}

storyService.$inject = [];
function storyService() {
    return {
        stories: [{
            "name": "Saint Joseph de Tivoli",
            "template": "tivoli",
            "highligh": "French Scientific Baccalaureat",
            "year": 2007,
            "city": "Bordeaux",
            "country": "France",
            "type": "education",
            "shortDescription": "",
            "grade": ""
        }, {
            "name": "Exia CESI",
            "template": "exia",
            "year": 2012,
            "duration": "5 years",
            "highligh": "Computer Engineering Degree",
            "city": "Bordeaux",
            "country": "France",
            "type": "education",
            "shortDescription": "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "grade": "Software Engineer",
            "projects": [{
                "name": "Falcon",
                "period": "feb-march",
                "missions": ["jfsodijf oidsfjiosdjfs", "sdfks dfhs dfosihisdho"],
                "tools": ["Anglar JS", "NodeJS", "Grunt"]
            }]
        }, {
            "name": "Eurogiciel",
            "template": "eurogiciel-intern",
            "year": 2013,
            "highligh": "Full stack developer",
            "duration": "6 months",
            "city": "Bordeaux",
            "country": "France",
            "type": "internship",
            "website": "www.eurogiciel.com",
            "shortDescription": "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "job-title": "Web software engineer",
            "projects": [{
                "name": "Plan de charges",
                "description": "dfjdlj gdfkjgldkfkdfgkldglkdfgdflgld",
                "period": "feb-march",
                "missions": ["jfsodijf oidsfjiosdjfs", "sdfks dfhs dfosihisdho"],
                "tools": ["Anglar JS", "NodeJS", "Grunt"]
            }]
        }, {
            "name": "Eurogiciel",
            "template": "eurogiciel-job",
            "year": 2014,
            "highligh": "Software engineer",
            "city": "Bordeaux",
            "country": "France",
            "type": "job experience",
            "website": "www.eurogiciel.com",
            "shortDescription": "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "job-title": "Web software engineer",
            "projects": [{
                "name": "Plan de charges",
                "description": "dfjdlj gdfkjgldkfkdfgkldgldshfkjdshfjk sdfsdh ds fsdh fkjdshfjsdf jksd hkdfgdflgld",
                "period": "feb-march",
                "missions": ["jfsodijf oidsfjiosdjfs", "sdfks dfhs dfosihisdho"],
                "tools": ["Anglar JS", "NodeJS", "Grunt"]
            }, {
                "name": "Aslo",
                "description": "dfjdlj gdfkjdshfkjdshfjk sdfsdh ds fsdh fkjdshfjsdf jksd hgldkfkdfgkldglkdfgdflgld",
                "period": "feb-march",
                "missions": ["jfsodijf oidsfjiosdjfs", "sdfks dfhs dfosihisdho"],
                "tools": ["Anglar JS", "NodeJS", "Grunt"]
            }]
        }, {
            "name": "Kronos Canadian Inc.",
            "template": "kronos",
            "active": true,
            "highligh": "Front-end engineer",
            "year": 2016,
            "city": "Montreal",
            "country": "Canada",
            "type": "job experience",
            "website": "www.kronos.com",
            "shortDescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "job-title": "Web software engineer",
            "projects": [{
                "name": "Falcon",
                "period": "feb-march",
                "missions": ["jfsodijf oidsfjiosdjfs", "sdfks dfhs dfosihisdho"],
                "tools": ["Anglar JS", "NodeJS", "Grunt"]
            }]
        }]
    }
}

angular.module('Story', [])
    .directive('storyDirective', storyDirective)
    .controller('storyController', storyController)
    .service('storyService', storyService);