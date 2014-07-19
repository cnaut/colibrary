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
      templateUrl: "<%= asset_path('partials/dashboard.html') %>",
      controller: "DashboardCtrl"
    })
    .state('library', {
      url: "/library",
      templateUrl: "<%= asset_path('partials/library.html') %>",
      controller: "LibraryCtrl"
    })
    .state('profile', {
      url: "/profile/:userId",
      templateUrl: "<%= asset_path('partials/profile.html') %>",
      controller: "ProfileCtrl"
    })
    .state('checkout', {
        url: "/checkout",
        templateUrl: "<%= asset_path('partials/checkout.html') %>",
        controller: "CheckoutCtrl"
    });
});
