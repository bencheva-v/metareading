angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Новини",
        "link": "articles"
    }, {
        "title": "Създай новина",
        "link": "articles/create"
    }, {
      "title": "Създай събитие",
      "link": "events/create"
    }];

    $scope.isCollapsed = false;
}]);
