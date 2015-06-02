/*******************************************************************************
 * This file is part of the stiften package.
 *
 * (c) Berlingske Media A/S
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*******************************************************************************/

/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name stiftenDkApp
 * @description
 * # stiftenDkApp
 *
 * Main module of the application.
 */

var app = angular
  .module('mStiftenDkApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'LocalStorageModule',
      'flipsnap'
  ])
  .constant(
      'DOMAIN',
      'stiften.dk'
  )
  .constant(
      'BACKEND_ADDRESS',
      'http://stiften.dk'
  )
  .constant('config', appConfig)
  .config(function ($routeProvider, $locationProvider, $httpProvider, localStorageServiceProvider) {
    $routeProvider
        .when('/test', {
            templateUrl: 'app/pages/testPage/testPageTemplate.html',
            controller: 'TestController'
        })
        .when('/seneste', {
            templateUrl: 'app/pages/latestPage/latestPageTemplate.html',
            controller: 'LatestController'
        })
        .when('/søg', {
            templateUrl: 'app/pages/searchPage/searchPageTemplate.html',
            controller: 'SearchController'
        })
        .when('/:tag/:articleid', {
            // We use this hack to load different template based on Bond content types.
            template: '<div stiften-spinner ng-show="contentLoading"></div><article ng-include="templateUrl"></article>',
            controller: 'StoryController'
        })
        .when('/404', {
            templateUrl: 'app/pages/404Page/404PageTemplate.html',
            controller: 'fourofourController'
        })
        .when('/:tag', {
            templateUrl: 'app/pages/listPage/listPageTemplate.html',
            controller: 'ListController'
        })
        .when('/', {
            templateUrl: 'app/pages/frontPage/frontPageTemplate.html',
            controller: 'FrontpageController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('!');

    localStorageServiceProvider.setPrefix('stm');
  })
  .config( [
      '$compileProvider',
      function( $compileProvider )
      {
          // Allow sms-links
          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sms):/);
      }
  ]);