angular.module('mean.events').controller('EventsController', ['$scope', '$routeParams', '$location', 'Global', 'events', function ($scope, $routeParams, $location, Global, events) {
    $scope.global = Global;

    $scope.create = function() {
        var event = new events({
            Name: this.name
        });

        event.$save(function(response) {
            console.log(response);
            $location.path("events/" + response.id);
        });

        this.name = "";
    };

    $scope.remove = function(event) {
        if (event) {
            event.$remove();

            for (var i in $scope.events) {
                if ($scope.events[i] == event) {
                    $scope.events.splice(i, 1);
                }
            }
        }
        else {
            $scope.event.$remove();
            $location.path('events');
        }
    };

    $scope.update = function() {
        var event = $scope.event;
        if (!event.updated) {
            event.updated = [];
        }
        event.updated.push(new Date().getTime());

        event.$update(function() {
            $location.path('events/' + event.id);
        });
    };

    $scope.find = function() {
        events.query(function(events) {
            $scope.events = events;
        });
    };

    $scope.findOne = function() {
        events.get({
            eventId: $routeParams.eventId
        }, function(event) {
            $scope.event = event;
        });
    };
}]);
