/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.buildings', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('buildings', {
          url: '/buildings',
          template : '<ui-view></ui-view>',
          title: 'Buildings',
          abstract: true,
          sidebarMeta: {
            icon: 'fa fa-building-o',
            order: 6,
          },
        })
        .state('buildings.list', {
          url: '/list',
          templateUrl: 'app/pages/claims/buildings-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('buildings.edit', {
          url: '/edit',
          templateUrl: 'app/pages/claims/buildings-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });
  }
})();
