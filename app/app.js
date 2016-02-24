angular
    .module('Application', ['ngMaterial', 'Header', 'Navigation', 'Profile', 'Story', 'Contact', 'Skills', 'Footer', 'Frameworks', 'Interest'])
    .config(function ($mdThemingProvider, $mdIconProvider) {
        /*// Extend the red theme with a few different colors
        var neonGreyMap = $mdThemingProvider.extendPalette('grey', {
            '500': '262729'
        });
        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('neonGrey', neonGreyMap);
        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default')
            .primaryPalette('neonGrey');*/

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

    }).controller('ApplicationController', function ($scope, $timeout, $mdSidenav, $log) {
});