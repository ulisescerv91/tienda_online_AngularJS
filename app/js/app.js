'use strict';

/**
 * @ngdoc overview
 * @name tiendaOnlineApp
 * @description
 * # tiendaOnlineApp
 *
 * Main module of the application.
 */
angular
  .module('tiendaOnlineApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
