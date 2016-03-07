'use strict';
var angular = require('angular');

function storyDirective() {
    return {
        restrict: "E",
        templateUrl: "components/story/story.html",
        bindToController: true,
        controllerAs: "storyCtrl",
        controller: 'storyController'
    };
}

storyController.$inject = ["storyService", "$mdDialog", "$mdSidenav", "$window"];
function storyController(storyService, $mdDialog, $mdSidenav, $window) {
    var self = this;

    self.showAdvanced = function (ev, story) {
        $mdDialog.show({
            controller: dialogController,
            templateUrl: 'components/story/templates/' + story.template + '.tmpl.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true,
            locals: {story: story}
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

dialogController.$inject = ["$scope", "$mdDialog", "$timeout", "story"];
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
            "name": "stories_story_1_firm",
            "template": "tivoli",
            "highligh": "stories_story_1_highlight",
            "year": 2007,
            "localisation": "stories_story_1_localisation",
            "type": "stories_story_1_type",
            "shortDescription": "stories_story_1_description",
            "grade": "",
            "typeId": "edu",
            "icon": "school"
        }, {
            "name": "stories_story_2_firm",
            "template": "exia",
            "year": 2012,
            "duration": "5 years",
            "highligh": "stories_story_2_highlight",
            "localisation": "stories_story_2_localisation",
            "type": "stories_story_2_type",
            "shortDescription": "stories_story_2_description",
            "grade": "Software Engineer",
            "typeId": "edu",
            "icon": "school",
            "projects": [{
                "name": "Falcon",
                "period": "feb-march",
                "missions": ["jfsodijf oidsfjiosdjfs", "sdfks dfhs dfosihisdho"],
                "tools": ["Anglar JS", "NodeJS", "Grunt"]
            }]
        }, {
            "name": "stories_story_3_firm",
            "template": "eurogiciel-intern",
            "year": 2013,
            "highligh": "stories_story_3_highlight",
            "duration": "6 months",
            "localisation": "stories_story_3_localisation",
            "type": "stories_story_3_type",
            "website": "www.eurogiciel.com",
            "shortDescription": "stories_story_3_description",
            "job-title": "Web software engineer",
            "typeId": "stage",
            "icon": "account_circle",
            "projects": [{
                "name": "Plan de charges",
                "description": "dfjdlj gdfkjgldkfkdfgkldglkdfgdflgld",
                "period": "feb-march",
                "missions": ["jfsodijf oidsfjiosdjfs", "sdfks dfhs dfosihisdho"],
                "tools": ["Anglar JS", "NodeJS", "Grunt"]
            }]
        }, {
            "name": "stories_story_4_firm",
            "template": "eurogiciel-job",
            "year": 2014,
            "highligh": "stories_story_4_highlight",
            "localisation": "stories_story_4_localisation",
            "type": "stories_story_4_type",
            "website": "www.eurogiciel.com",
            "shortDescription": "stories_story_4_description",
            "job-title": "Web software engineer",
            "typeId": "job",
            "icon": "work",
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
            "name": "stories_story_5_firm",
            "template": "kronos",
            "active": true,
            "highligh": "stories_story_5_highlight",
            "year": 2016,
            "localisation": "stories_story_5_localisation",
            "type": "stories_story_5_type",
            "website": "www.kronos.com",
            "shortDescription": "stories_story_5_description",
            "job-title": "Web software engineer",
            "typeId": "job",
            "icon": "work",
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
    .directive('story', storyDirective)
    .controller('storyController', storyController)
    .service('storyService', storyService);