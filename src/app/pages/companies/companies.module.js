/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.companies', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('companies', {
          url: '/companies',
          template : '<ui-view></ui-view>',
          title: 'Companies',
          abstract: true,
          sidebarMeta: {
            icon: 'business',
            order: 3,
          },
        })
        .state('companies.list', {
          url: '/list',
          templateUrl: 'app/pages/copmanies/copmanies-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('companies.edit', {
          url: '/edit',
          templateUrl: 'app/pages/copmanies/copmanies-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });
  }
})();
