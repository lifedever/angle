/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){
        
        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/SingleView');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
          .state('app', {
              //url: '/',
              abstract: true,
              resolve: helper.resolveFor('modernizr', 'icons')
          })
          .state('app.singleview', {
              url: '/SingleView',
              title: 'Single View',
              templateUrl: helper.basepath('SingleView/Index')
          })
          .state('app.menuview', {
              url: '/MenuView',
              title: 'Menu View',
              templateUrl: helper.basepath('SingleView/MenuView')
          })
          // 
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // ----------------------------------- 
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();

