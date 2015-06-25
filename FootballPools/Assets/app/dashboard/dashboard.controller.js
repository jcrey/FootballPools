define(['appModule'], function () {
   
    angular
    .module('app')
    .controller('dashboardController', controller);

    angular.$inject = ['$scope'];

    function controller($scope) {
        $scope.name = "hello world";
    }

});