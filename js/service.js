angular.module('LibraryService', [])
.factory('LibraryService', function($http) {
  var cart = [];

  var addToCart = function(item) {
  	cart.push(item);
  }

  return {
  	addToCart: addToCart,
  	getCart: function() { return cart }
  }
});
