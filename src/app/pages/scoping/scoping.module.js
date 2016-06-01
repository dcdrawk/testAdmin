/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.scoping', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('scoping', {
          url: '/scoping',
          template : '<ui-view></ui-view>',
          title: 'Scoping',
          abstract: true,
          sidebarMeta: {
            icon: 'location_searching',
            order: 2,
          },
        })
        .state('scoping.list', {
          url: '/list',
          templateUrl: 'app/pages/claims/scoping-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('scoping.edit', {
          url: '/edit',
          templateUrl: 'app/pages/claims/scoping-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });
  }
})();
