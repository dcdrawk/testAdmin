/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.subcontractors', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('subcontractors', {
          url: '/subcontractors',
          template : '<ui-view></ui-view>',
          title: 'Subcontractors',
          abstract: true,
          sidebarMeta: {
            icon: 'build',
            order: 7,
          },
        })
        .state('subcontractors.list', {
          url: '/list',
          templateUrl: 'app/pages/claims/subcontractors-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('subcontractors.edit', {
          url: '/edit',
          templateUrl: 'app/pages/claims/subcontractors-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });
  }
})();
