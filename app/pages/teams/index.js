'use strict';

angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teams', {
        templateUrl: 'pages/teams/index.html',
        controller: 'TeamsIndexController',
        title: 'Teams',
        trackEvent: 'View Team Index'
      });
  })
  .controller('TeamsIndexController', function ($scope, $location, $api, $pageTitle) {
    $pageTitle.set("Teams");

    $scope.teams = $api.featured_teams();
  });
