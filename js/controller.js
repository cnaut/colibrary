angular.module('controllers', [])
.controller('DashboardCtrl', function($scope, $location) {
  $scope.checkout = function() {
    $location.path("/checkout")
  }
})

.controller('CheckoutCtrl', function($scope) {

});
