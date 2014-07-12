angular.module('controllers', [])
.controller('MainCtrl', function($scope, $rootScope, LibraryService) {
  $scope.search = function() {
    LibraryService.filterItems($scope.query);
    $rootScope.$broadcast('items-changed');
  };
})

.controller('DashboardCtrl', function($scope, $rootScope, $location, LibraryService) {
  $scope.items = LibraryService.getItems();

  $rootScope.$on('items-changed', function(event, args) {
    $scope.items = LibraryService.getItems();
  });

  $scope.checkout = function(item) {
    LibraryService.addToCart(item)
    $location.path("/checkout")
  };
})

.controller('CheckoutCtrl', function($scope, LibraryService) {
  $scope.cart = LibraryService.getCart();
  console.log($scope.cart);
});
