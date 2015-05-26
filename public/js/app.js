angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'mean.events']);

angular.module('mean.system', []);
angular.module('mean.articles', ['ngSanitize']);
angular.module('mean.events', []);
