angular.module('movieApp', []).controller('indexController', function ($scope, $state, popupService, $window, indexService) {
    $scope.movies = indexService.query();

}).controller('MovieViewController', function ($scope, $stateParams, indexService) {
    $scope.movie = indexService.get({ id: $stateParams.id });
});