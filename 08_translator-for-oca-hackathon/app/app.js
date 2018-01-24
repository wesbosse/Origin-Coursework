(function() {

    'use strict';
    var app = angular
        .module('app', ['ui.router']);

    app.config(

        function($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.interceptors.push('mashapeHttpInterceptor');
         
            $urlRouterProvider.otherwise("/main");
            $stateProvider
                .state('main', {
                    url: "/main",
                    templateUrl: "app/partials/main.html"
                })
                .state('main.input', {
                    url: "/InputLanguageLog",
                    templateUrl: "app/partials/input.html"
                })
                .state('main.translated', {
                    url: "/OutputLanguageLog",
                    templateUrl: "app/partials/translated.html"
                })
        });

})();
