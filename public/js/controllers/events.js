angular.module('mean.events').controller('EventsController',
  ['$scope', '$routeParams', '$location', 'Global', 'Events',
    function ($scope, $routeParams, $location, Global, Events) {
    $scope.global = Global;

    $scope.create = function() {
        var Event = new Events({
            Name: this.name,
            DateFrom: this.dateFrom,
            Price: this.price,
            Venue: this.venue,
            Description: this.Description
        });

        Event.$save(function(response) {
            console.log(response);
            $location.path("events/" + response.id);
        });

        this.name = "";
        this.dateFrom = "";
        this.Price = "";
        this.venue = "";
        this.Description = "";
    };

    $scope.remove = function(Event) {
        if (Event) {
            Event.$remove();

            for (var i in $scope.events) {
                if ($scope.events[i] == Event) {
                    $scope.events.splice(i, 1);
                }
            }
        }
        else {
            $scope.Event.$remove();
            $location.path('events');
        }
    };

    $scope.update = function() {
        var Event = $scope.Event;
        if (!Event.updated) {
            Event.updated = [];
        }
        Event.updated.push(new Date().getTime());

        Event.$update(function() {
            $location.path('events/' + Event.id);
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
            $scope.Event = event;
        });
    };
}]);
