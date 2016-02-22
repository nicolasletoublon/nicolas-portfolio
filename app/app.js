angular
    .module('Application', ['ngMaterial', 'Header', 'Navigation', 'Profile', 'Story', 'Contact', 'Skills', 'Footer'])
    .config(function ($mdThemingProvider, $mdIconProvider) {
    }).controller('ApplicationController', function ($scope, $timeout, $mdSidenav, $log) {
});