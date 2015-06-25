var require = {
    baseUrl: '/Scripts',
    paths: {
        jquery: 'jquery-1.9.1',
        bootstrap: 'bootstrap',
        underscore: 'underscore',
        utils: 'Utils',
        spinjs: 'spinjs',
        angular: 'angularjs/angular',
        angularRoute: 'angularjs/angular-route',
        appModule: '/Assets/app/app.module',
        routeConfig: '/Assets/app/route_config',
        dashboardController: '/Assets/app/dashboard/dashboard.controller'        
    },
    shim: {
        bootstrap: ['jquery'],
        angularRoute: ['angular'],
        appModule: ['angular', 'angularRoute'],
        routeConfig: ['appModule'],
        dashboardController: ['appModule'],
        
    }
};
