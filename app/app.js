angular
    .module('Application', ['ngMaterial', 'Header', 'Navigation', 'Profile'])
    .config(function ($mdThemingProvider, $mdIconProvider) {
    }).controller('ApplicationController', function ($scope, $timeout, $mdSidenav, $log) {
});