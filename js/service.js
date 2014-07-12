angular.module('LibraryService', [])
.factory('LibraryService', function($http, $filter) {
  var cart = [];
  var items = [
    { image: "books.jpg", title: "A bunch of books"},
    { image: "coat.jpg", title: "Nice coat" },
    { image: "bike.jpg", title: "Fixie Bike" },
    { image: "dvd.jpg", title: "DVD"},
    { image: "crockpot.jpg", title: "Crockpot"},
    { image: "tent.jpg", title: "Tent"}
  ];

  var addToCart = function(item) {
  	cart.push(item);
  };

  var filterItems = function(query) {
	items = $filter('filter')(items, { title: query });
  };

  return {
  	addToCart: addToCart,
  	getCart: function() { return cart },
  	getItems: function() { return items },
  	filterItems: filterItems
  }
});
