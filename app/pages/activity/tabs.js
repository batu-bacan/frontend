'use strict';

angular.module('app')
  .controller('ActivityTabs', function($scope, $location) {
    $scope.tabs = [
      { name: 'Timeline', url: '/activity' },
      { name: 'Bounties', url: '/activity/bounties' },
      { name: 'Fundraisers', url: '/activity/fundraisers' },
      { name: 'Pledges', url: '/activity/pledges' },
      { name: 'Solutions', url: '/activity/solutions' },
      { name: 'Transactions', url: '/activity/transactions' }
    ];
    $scope.is_active = function(url) {
      return url == $location.path();
    };

  });
