/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.inventory', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('inventory', {
          url: '/inventory',
          template : '<ui-view></ui-view>',
          title: 'Inventory',
          abstract: true,
          sidebarMeta: {
            icon: 'drafts',
            order: 6,
          },
        })
        .state('inventory.list', {
          url: '/list',
          templateUrl: 'app/pages/claims/inventory-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('inventory.edit', {
          url: '/edit',
          templateUrl: 'app/pages/claims/inventory-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });
  }
})();
