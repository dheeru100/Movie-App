angular.module('movieApp', []).factory('indexService', function ($resource) {
    return $resource('http://www.omdbapi.com/?t=id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});