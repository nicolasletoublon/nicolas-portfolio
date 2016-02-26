window.navigator.languages[0] = "fr";

angular
    .module('Application',
            ['ngMaterial', 'ngSanitize', 'pascalprecht.translate', 'Header', 'Navigation', 'Profile', 'Story', 'Contact', 'Skills', 'Footer', 'Frameworks', 'Interest', 'Projects'])
    .config(["$mdThemingProvider", "$translateProvider", function ($mdThemingProvider, $translateProvider) {

        $translateProvider.registerAvailableLanguageKeys(['en_EN', 'fr_FR'], {
            'en*': 'en_EN', 'fr*': 'fr_FR'
        });
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/locale-', suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider
            .uniformLanguageTag('bcp47')
            .determinePreferredLanguage();

        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50'                  : 'ffebee',
            '100'                 : 'cccdcf',
            '200'                 : 'abacae',
            '300'                 : '919294',
            '400'                 : '666769',
            '500'                 : '1e93a5',
            '600'                 : '1e93a5',
            '700'                 : 'd32f2f',
            '800'                 : 'c62828',
            '900'                 : 'b71c1c',
            'A100'                : 'ff8a80',
            'A200'                : 'ff5252',
            'A400'                : 'ff1744',
            'A700'                : '262729',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors'  : ['50', '100', //hues which contrast should be 'dark' by default
                                     '200', '300', '400', 'A100'],
            'contrastLightColors' : undefined    // could also specify this if default was 'dark'
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('amazingPaletteName', {
                'default': 'A700'
            })
    }])
    .controller('ApplicationController', ['$translate', '$scope', function ($translate, $scope) {

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}]);

