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
      'ngTouch'
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
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/search/:searchphrase', {
            templateUrl: 'app/pages/searchPage/searchPageTemplate.html',
            controller: 'SearchController'
        })
        .when('/:tag/:articleid', {
            templateUrl: 'app/pages/articlePage/articlePageTemplate.html',
            controller: 'ArticleController'
        })
        .when('/:tag', {
            templateUrl: 'app/pages/listPage/listPageTemplate.html',
            controller: 'ListController'
        })
        .when('/404', {
            templateUrl: 'app/pages/404Page/404PageTemplate.html',
            controller: 'fourofourController'
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
  });
