/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accounting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('accounting', {
          url: '/accounting',
          template : '<ui-view></ui-view>',
          title: 'Accounting',
          abstract: true,
          sidebarMeta: {
            icon: 'account_balance',
            order: 3,
          },
        })
        .state('accounting.timesheets', {
          url: '/timesheets',
          title: 'Timesheets',
          sidebarMeta: {
            order: 1,
          },
        })
        .state('accounting.generalcosts', {
          url: '/generalcosts',
          title: 'General Costs',
          sidebarMeta: {
            order: 2,
          },
        })
        .state('accounting.suppliesused', {
          url: '/suppliesused',
          title: 'Supplies Used',
          sidebarMeta: {
            order: 3,
          },
        })
        .state('accounting.salesinvoices', {
          url: '/salesinvoices',
          title: 'Sales Invoices',
          sidebarMeta: {
            order: 4,
          },
        })
  }
})();
