/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.customers', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('customers', {
          url: '/customers',
          template : '<ui-view></ui-view>',
          title: 'Customers',
          abstract: true,
          sidebarMeta: {
            icon: 'ion-ios-people',
            order: 3,
          },
        })
        .state('customers.list', {
          url: '/list',
          templateUrl: 'app/pages/claims/customers-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('customers.edit', {
          url: '/edit',
          templateUrl: 'app/pages/claims/customers-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });
  }
})();
