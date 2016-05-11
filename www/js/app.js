FitNotApp = angular.module('FitNot', ['ionic', 'ngCordova'])

FitNotApp.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

FitNotApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider


        .state('dashboard', {
            url: "/dashboard",
            templateUrl: 'templates/dashboard.html',
            controller: 'dashboardCtrl'
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dashboard');
});