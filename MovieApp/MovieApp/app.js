angular.module('movieApp', ['ui.router', 'ngResource', 'indexController', 'indexService']);

angular.module('movieApp').config(function ($stateProvider) {
    $stateProvider.state('movies', {
        url: '/movies',
        templateUrl: 'Views/movies.html',
        controller: 'indexController'
    });
}).run(function ($state) {
    $state.go('movies');
});