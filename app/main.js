'use strict';
var angular = require('angular');
var $ = require('jquery');

require('angular-material');
require('angular-translate');
require('angular-sanitize');
require('angular-translate-loader-static-files');

require('../components/header/header.js');
require('../components/navigation/navigation.js');
require('../components/profile/profile.js');
require('../components/profile/right-profile.js');
require('../components/story/story.js');
require('../components/interest/interest.js');
require('../components/skills/skills.js');
require('../components/projects/projects.js');
require('../components/frameworks/frameworks.js');
require('../components/contact/contact.js');
require('../components/footer/footer.js');

require('../assets/styles/css/app.css');

angular
    .module('Application',
        ['ngMaterial', 'ngAria', 'ngSanitize', 'pascalprecht.translate', 'Header', 'Navigation', 'Profile', 'Story', 'Contact', 'Skills', 'Footer', 'Frameworks', 'Interest', 'Projects'])
    .config(["$mdThemingProvider", "$translateProvider", function ($mdThemingProvider, $translateProvider) {

        $translateProvider.translations('en_EN', require('json!../i18n/locale-en_EN'));
        $translateProvider.translations('fr_FR', require('json!../i18n/locale-fr_FR'));
        $translateProvider.preferredLanguage('en_EN');

        $translateProvider.registerAvailableLanguageKeys(['en_EN', 'fr_FR'], {
            'en*': 'en_EN', 'fr*': 'fr_FR'
        });
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider
            .uniformLanguageTag('bcp47')
            .determinePreferredLanguage();

        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'ffebee',
            '100': 'cccdcf',
            '200': 'abacae',
            '300': '919294',
            '400': '666769',
            '500': '1e93a5',
            '600': '1e93a5',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': '262729',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('amazingPaletteName', {
                'default': 'A700'
            })
    }])
    .controller('ApplicationController', ['$translate', '$scope', function ($translate, $scope) {
        var position = 0;

        $(window).scroll(function () {
            if (!position) {
                var toolbar = $('#toolbar-nav')[0];
                position = toolbar.offsetTop + toolbar.offsetHeight + 30;
            }
            if ($(window).scrollTop() > position) {
                $('#toolbar-nav').addClass('navbar-fixed');
            }
            if ($(window).scrollTop() < position) {
                $('#toolbar-nav').removeClass('navbar-fixed');
            }
        });

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    }]);
