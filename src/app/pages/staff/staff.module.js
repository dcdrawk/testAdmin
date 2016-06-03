/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.staff', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('staff', {
          url: '/staff',
          template : '<ui-view></ui-view>',
          title: 'Staff',
          abstract: true,
          sidebarMeta: {
            icon: 'group',
            order: 1,
          },
        })
        .state('staff.list', {
          url: '/list',
          templateUrl: 'app/pages/staff/views/staff-list.html',
          title: 'Staff List',
          controller: 'StaffListCtrl',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('staff.edit', {
          url: '/edit',
          templateUrl: 'app/pages/staff/views/staff-edit.html',
          title: 'New Staff',
          controller: 'StaffEditCtrl',
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
