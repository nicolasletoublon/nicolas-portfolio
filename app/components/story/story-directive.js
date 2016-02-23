'use strict';

function storyDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/story/story.html",
        bindToController: true,
        controllerAs    : "storyCtrl",
        controller      : 'storyController'
    };
}

function storyController($scope, storyService) {
    var self = this;

    self.stories = storyService.stories;

    self.toppings = [
        { name: 'Pepperoni', wanted: true },
        { name: 'Sausage', wanted: false },
        { name: 'Black Olives', wanted: true },
        { name: 'Green Peppers', wanted: false }
    ];

    self.activateStory = function(story) {
        for(var i = 0; i < self.stories.length; i++) {
            self.stories[i].active = false;
        }
        story.active = true;
    }
}

function storyService() {
    return {
        stories: [
            {
                "name": "Saint Joseph de Tivoli",
                "highligh": "French Scientific Baccalaureat",
                "year": 2007,
                "city": "Bordeaux",
                "country": "France",
                "type": "education",
                "description": "",
                "grade": ""
            },
            {
                "name": "Exia CESI",
                "year": 2012,
                "duration" : "5 years",
                "highligh": "Computer Engineering Degree",
                "city": "Bordeaux",
                "country": "France",
                "type": "education",
                "description":  "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "grade": "Software Engineer",
                "projects": [
                    {
                        "name": "Falcon",
                        "period": "feb-march",
                        "missions": [
                            "jfsodijf oidsfjiosdjfs",
                            "sdfks dfhs dfosihisdho"
                        ],
                        "tools": [
                            "Anglar JS",
                            "NodeJS",
                            "Grunt"
                        ]
                    }
                ]
            },
            {
                "name": "Eurogiciel",
                "year": 2013,
                "highligh": "Full stack developer",
                "duration": "6 months",
                "city": "Bordeaux",
                "country": "France",
                "type": "internship",
                "website": "www.eurogiciel.com",
                "description":  "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "job-title": "Web software engineer",
                "projects": [
                    {
                        "name": "Plan de charges",
                        "description": "dfjdlj gdfkjgldkfkdfgkldglkdfgdflgld",
                        "period": "feb-march",
                        "missions": [
                            "jfsodijf oidsfjiosdjfs",
                            "sdfks dfhs dfosihisdho"
                        ],
                        "tools": [
                            "Anglar JS",
                            "NodeJS",
                            "Grunt"
                        ]
                    }
                ]
            },
            {
                "name": "Eurogiciel",
                "year": 2014,
                "highligh": "Software engineer",
                "city": "Bordeaux",
                "country": "France",
                "type": "job experience",
                "website": "www.eurogiciel.com",
                "description":  "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "job-title": "Web software engineer",
                "projects": [
                    {
                        "name": "Plan de charges",
                        "description": "dfjdlj gdfkjgldkfkdfgkldgldshfkjdshfjk sdfsdh ds fsdh fkjdshfjsdf jksd hkdfgdflgld",
                        "period": "feb-march",
                        "missions": [
                            "jfsodijf oidsfjiosdjfs",
                            "sdfks dfhs dfosihisdho"
                        ],
                        "tools": [
                            "Anglar JS",
                            "NodeJS",
                            "Grunt"
                        ]
                    },
                    {
                        "name": "Aslo",
                        "description": "dfjdlj gdfkjdshfkjdshfjk sdfsdh ds fsdh fkjdshfjsdf jksd hgldkfkdfgkldglkdfgdflgld",
                        "period": "feb-march",
                        "missions": [
                            "jfsodijf oidsfjiosdjfs",
                            "sdfks dfhs dfosihisdho"
                        ],
                        "tools": [
                            "Anglar JS",
                            "NodeJS",
                            "Grunt"
                        ]
                    }
                ]
            },
            {
                "name": "Kronos Canadian Inc.",
                "active": true,
                "highligh": "Front-end engineer",
                "year": 2016,
                "city": "Montreal",
                "country": "Canada",
                "type": "job experience",
                "website": "www.kronos.com",
                "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "job-title": "Web software engineer",
                "projects": [
                    {
                        "name": "Falcon",
                        "period": "feb-march",
                        "missions": [
                            "jfsodijf oidsfjiosdjfs",
                            "sdfks dfhs dfosihisdho"
                        ],
                        "tools": [
                            "Anglar JS",
                            "NodeJS",
                            "Grunt"
                        ]
                    }
                ]
            }
        ]
    }
}

angular.module('Story', [])
    .directive('storyDirective', storyDirective)
    .controller('storyController', storyController)
    .service('storyService', storyService);