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
    LibraryService.addToCart(item);
    $location.path("/checkout");
  };
})

.controller('CheckoutCtrl', function($scope, $location, LibraryService) {
  $scope.cart = LibraryService.getCart();
  $scope.opened = true;
  if($scope.cart.length === 0 ) {
    $location.path("/");
    return;
  }

  $scope.map = {
    center: {
        latitude: $scope.cart[0].user.pickupSpotLat,
        longitude: $scope.cart[0].user.pickupSpotLong
    },
    zoom: 8
  };
  $scope.eventDate = new Date();
  $scope.eventTime = new Date();

  $scope.openDP = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
});
