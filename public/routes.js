angular.module('routes', [])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
}]);