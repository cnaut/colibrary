angular.module('sharinglibrary', [
  'ui.router',
  'controllers',
])
.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('dashboard', {
      url: "/",
      templateUrl: "partials/dashboard.html",
      controller: "DashboardCtrl"
    })
    .state('checkout', {
        url: "/checkout",
        templateUrl: "partials/checkout.html",
        controller: "CheckoutCtrl"
    });
});
