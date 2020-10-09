var dwFilters = angular.module('dwFilters', []);

dwFilters.controller('policyList', function ($scope, $http) {
  $http.get('data.json').success(function(data) {
    $scope.policies = data;
  });
});