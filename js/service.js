angular.module('LibraryService', [])
.factory('LibraryService', function($http, $filter) {
  var cart = [];
  var users = [
  	{ id: 1, name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() }
  ]

  var items = [
    { image: "books.jpg", title: "A bunch of books", user: users[0] },
    { image: "coat.jpg", title: "Nice coat", user: users[0] },
    { image: "bike.jpg", title: "Fixie Bike", user: users[0] },
    { image: "dvd.jpg", title: "DVD", user: users[0] },
    { image: "crockpot.jpg", title: "Crockpot", user: users[0] },
    { image: "tent.jpg", title: "Tent", user: users[0] }
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
