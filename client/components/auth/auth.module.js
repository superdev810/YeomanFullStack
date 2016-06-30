'use strict';

angular.module('testprojectApp.auth', ['testprojectApp.constants', 'testprojectApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
