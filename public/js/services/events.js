//events service used for events REST endpoint
angular.module('mean.events').factory("Events", ['$resource', function($resource) {
    return $resource('events/:eventId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
