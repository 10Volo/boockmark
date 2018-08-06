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

			resetCreateForm();

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

		$scope.starCreating = starCreating;
		$scope.cancelCreating = cancelCreating;
		$scope.startEditing = startEditing;
		$scope.cancelEditing = cancelEditing;


		function shouldShowCreating() {
			return !$scope.isEditing;
		}

		function shouldShowEditing() {
			return $scope.isEditing && !$scope.isCreating;
		}

		$scope.shouldShowCreating = shouldShowCreating;
		$scope.shouldShowEditing = shouldShowEditing;


		function resetCreateForm() {
			$scope.newBookmark = {
				title: '',
				url: ''
			}
		}

		function createBookmark(bookmark) {
			bookmark.id = $scope.bookmarks.length;
			$scope.bookmarks.push(bookmark);

			resetCreateForm();
		}

		$scope.createBookmark = createBookmark;

		$scope.editedBookmark = null;

		function setEditedBookmark(bookmark) {
			$scope.editedBookmark = angular.copy(bookmark);
		}
		
		function updateBookmark(bookmark) {
			var index = _.findIndex($scope.bookmarks, function (b) {
				return b.id == bookmark.id
			});
			$scope.bookmarks[index] = bookmark;
			
			$scope.editedBookmark = null;
			$scope.isEditing = false;
		}
		
		function isSelectedBookmark(bookmarkId) {
			return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
		}

		$scope.setEditedBookmark = setEditedBookmark;
		$scope.updateBookmark = updateBookmark;
		$scope.isSelectedBookmark = isSelectedBookmark;
		
		function deleteBookmark(bookmark) {
			_.remove($scope.bookmarks, function(b) {
				return b.id == bookmark.id;
			})
		}
		
		$scope.deleteBookmark = deleteBookmark;
		
	})
;


