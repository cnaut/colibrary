angular.module('controllers', [])
.controller('DashboardCtrl', function($scope, $location, LibraryService) {
  $scope.items = [
    { image: "books.jpg", title: "A bunch of books"},
    { image: "coat.jpg", title: "Nice coat" },
    { image: "bike.jpg", title: "Fixie Bike" },
    { image: "dvd.jpg", title: "DVD"}
  ];

  $scope.checkout = function(item) {
    LibraryService.addToCart(item)
    $location.path("/checkout")
  }
})

.controller('CheckoutCtrl', function($scope, LibraryService) {
  $scope.cart = LibraryService.getCart();
  console.log($scope.cart);
});
