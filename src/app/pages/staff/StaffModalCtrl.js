/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('StaffListModalCtrl', StaffListModalCtrl);

  /** @ngInject */
  function StaffListModalCtrl($scope, $uibModalInstance) {
    // $scope.link = '';
    $scope.ok = function () {
      $uibModalInstance.close();
    };
  }

})();
