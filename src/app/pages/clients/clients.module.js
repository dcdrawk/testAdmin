/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.clients', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('clients', {
          url: '/clients',
          template : '<ui-view></ui-view>',
          title: 'Clients',
          abstract: true,
          sidebarMeta: {
            icon: 'person',
            order: 0,
          },
        })
        .state('clients.list', {
          url: '/list',
          templateUrl: 'app/pages/claims/clients-edit.html',
          title: 'List',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('clients.edit', {
          url: '/edit',
          templateUrl: 'app/pages/claims/clients-edit.html',
          title: 'Add New',
          sidebarMeta: {
            order: 1,
          },
        });

        // .state('form', {
        //   url: '/form',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: 'Form Elements',
        //   sidebarMeta: {
        //     icon: 'ion-compose',
        //     order: 250,
        //   },
        // })
        // .state('form.inputs', {
        //   url: '/inputs',
        //   templateUrl: 'app/pages/form/inputs/inputs.html',
        //   title: 'Form Inputs',
        //   sidebarMeta: {
        //     order: 0,
        //   },
        // })
  }
})();
