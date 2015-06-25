define([], function () {
    angular
     .module('app')
     .config(config);

    angular.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Assets/app/dashboard/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
});