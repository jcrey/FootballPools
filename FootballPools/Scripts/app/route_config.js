angular
    .module('app')
    .config(config);

angular.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'PartialViews/Dashboard/dashboard.html',
            controller: 'dashboardController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}