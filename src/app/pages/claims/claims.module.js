/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.claims', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('claims', {
          url: '/claims',
          template : '<ui-view></ui-view>',
          title: 'Claims',
          abstract: true,
          sidebarMeta: {
            icon: 'ion-document',
            order: 2,
          },
        })
        .state('claims.list', {
          url: '/list',
          templateUrl: 'app/pages/claims/claims-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('claims.edit', {
          url: '/edit',
          templateUrl: 'app/pages/claims/claims-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });
  }
})();
