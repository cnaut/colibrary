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
      templateUrl: "assets/partials/dashboard.html",
      controller: "DashboardCtrl"
    })
    .state('library', {
      url: "/library",
      templateUrl: "assets/partials/library.html",
      controller: "LibraryCtrl"
    })
    .state('profile', {
      url: "/profile/:userId",
      templateUrl: "assets/partials/profile.html %>",
      controller: "ProfileCtrl"
    })
    .state('checkout', {
        url: "/checkout",
        templateUrl: "assets/partials/checkout.html",
        controller: "CheckoutCtrl"
    });
});
