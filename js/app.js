angular.module('sharinglibrary', [
  'ui.router',
  'ui.bootstrap',
  'google-maps',
  'LibraryService',
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
    .state('library', {
      url: "/library",
      templateUrl: "partials/library.html",
      controller: "LibraryCtrl"
    })
    .state('profile', {
      url: "/profile/:userId",
      templateUrl: "partials/profile.html",
      controller: "ProfileCtrl"
    })
    .state('checkout', {
        url: "/checkout",
        templateUrl: "partials/checkout.html",
        controller: "CheckoutCtrl"
    });
});
