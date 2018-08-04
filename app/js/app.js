var myApp = angular.module('webApp', ['ui.router'])

	// UI-Router
	myApp.config(function($stateProvider) {
		var clientState = {
			name: 'client',
			url: '/client',
			templateUrl: 'client.html'
		}
		
		var administratorState = {
			name: 'administrator',
			url: '/administrator',
			templateUrl: 'administrator.html'
		}
		
		$stateProvider.state(clientState);
		$stateProvider.state(administratorState);
	})
	
	// JSON bookmark
	.controller('MainCtrl', function ($scope) {
		$scope.bookmarks = [
			{"id": 0, "title": "angularJS", "url": "http://angularjs.org"},
			{"id": 1, "title": "google", "url": "http://google.com"},
			{"id": 2, "title": "facebook", "url": "http://facebook.com"},
			{"id": 3, "title": "twitter", "url": "http://twitter.com"},
			{"id": 4, "title": "instagram", "url": "http://instagram.com"},
			{"id": 5, "title": "vushuvanka", "url": "http://vushuvanka.if.ua"},
			{"id": 6, "title": "codepen", "url": "http://codepen.io"},
			{"id": 7, "title": "github", "url": "http://github.com"},
			{"id": 8, "title": "some", "url": "http://some.com"}
		];
	
		// CRUD bookmark
		$scope.isCreating = false;
		$scope.isEditing = false;
		
		function starCreating() {
			$scope.isCreating = true;
			$scope.isEditing = false;
		}
		
		function cancelCreating() {
			$scope.isCreating =false;
		}
		
		function startEditing() {
			$scope.isCreating = false;
			$scope.isEditing = true;
		}
		
		function cancelEditing() {
			$scope.isEditing = false;
		}
		
		function shouldShowCreating() {
			return !$scope.isEditing;
		}
	
		function shouldShowEditing() {
			return $scope.isEditing && !$scope.isCreating;
		}
		
		$scope.starCreating = starCreating;
		$scope.cancelCreating = cancelCreating;
		$scope.startEditing = startEditing;
		$scope.cancelEditing = cancelEditing;
		$scope.shouldShowCreating = shouldShowCreating;
		$scope.shouldShowEditing = shouldShowEditing;
	});
;