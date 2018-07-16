var testingApp = angular.module("testingApp", []);

testingApp.controller("testingController", [
  "$rootScope",
  "$scope",
  function($rootScope, $scope) {
    $scope.title = "Testing AngularJS Application";

    $scope.destinations = [];

    $scope.newDestination = {
      city: undefined,
      country: undefined
    };

    $scope.addDestination = function() {
      $scope.destinations.push({
        city: $scope.newDestination.city,
        country: $scope.newDestination.country
      });
    };

    $scope.removeDestination = function(index) {
      $scope.destinations.splice(index, 1);
    };
  }
]);
