var theApp = angular.module('theApp',[]);

theApp.controller("todoCtrl",['$scope', function($scope) {

	var priorityList = {"High Priority" : '1', "Medium Priority" : '2', "Low Priority" : '3'};

	$scope.priorityList = priorityList;
	
	$scope.name = "";
	$scope.priority = '';
	$scope.sort = 'priority';
	$scope.toDoArray = [];

	$scope.text = 'name';
  	$scope.reverse = true;

  	$scope.order = function(text) {
    $scope.reverse = ($scope.text === text) ? !$scope.reverse : false;
    $scope.text = text;
	};
	

	$scope.buttonAdd = function() {
		var newNode = {name: $scope.name, priority: $scope.priority};
		$scope.toDoArray.push(newNode);
		$scope.name = "";
	};

	$scope.getClassInfo = function(pr) {
		switch (pr) {
			case '1': 
				return'danger';
			case '2': 
				return 'warning';
			case '3': 
				return 'info';
		}
	};
}]);
