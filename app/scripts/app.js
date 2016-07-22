'use strict';

/**
 * @ngdoc overview
 * @name angularMy3App
 * @description
 * # angularMy3App
 *
 * Main module of the application.
 */
angular
  .module('angularMy3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'myCtrl',
        controllerAs: 'main'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      // .when('/contactMe',{
      //   templateUrl: 'views/contactme.html',
      //   controller:'ContactMeCtrl',
      //   controllerAs: 'contact'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
