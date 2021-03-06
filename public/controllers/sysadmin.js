'use strict';

angular.module('seedApp')
.controller('SysadminController', ['$scope', '$state', 'Person',
  function($scope, $state, Person) {
  	$scope.cerrarSession = function() {
  		$state.go('home')
  	}


  	$scope.persons = [];
    Person.get({}, function(response) {
      $scope.persons = response;
    });

    $scope.item = {};

    $scope.savePerson = function(item) {
      Person.save(item, function(response) {
        $scope.persons.push(response);
      });
    }
  }
]);
