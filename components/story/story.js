'use strict';
var angular = require('angular');

function storyDirective() {
    return {
        restrict: "E",
        templateUrl: require('./story.html'),
        bindToController: true,
        controllerAs: "storyCtrl",
        controller: 'storyController'
    };
}

storyController.$inject = ["$mdDialog", "$mdSidenav", "$window"];
function storyController($mdDialog, $mdSidenav, $window) {
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

    self.toggleMenu = function (id) {
        $mdSidenav(id).toggle();
    };

    self.showPanel = function (id, story) {
        self.story = story;
        $('.story-container-side').css('padding-top', $window.scrollY + 40);
        $mdSidenav(id).toggle();
    };

    self.stories = require('./stories.json');

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

angular.module('Story', [])
    .directive('story', storyDirective)
    .controller('storyController', storyController);