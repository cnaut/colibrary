angular.module('LibraryService', [])
.factory('LibraryService', function($http, $filter) {
  var cart = [];
  var users = [
  	{ id: 1, name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
  	{ id: 2, name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
  	{ id: 3, name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
	{ id: 4, name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
 	{ id: 5, name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
  ]

  var items = [
    { image: "books.jpg", title: "A bunch of books", user: users[0] },
    { image: "coat.jpg", title: "Nice coat", user: users[1] },
    { image: "bike.jpg", title: "Fixie Bike", user: users[2] },
    { image: "dvd.jpg", title: "DVD", user: users[3] },
    { image: "crockpot.jpg", title: "Crockpot", user: users[4] },
    { image: "tent.jpg", title: "Tent", user: users[5] },
    { image: "coffeemachine.jpg", title: "Coffee Machine", user: users[5] },
    { image: "blender.jpg", title: "Blender", user: users[5] },
  ];

  var library = [
    { image: "tent.jpg", title: "Tent", user: users[5] },
    { image: "coffeemachine.jpg", title: "Coffee Machine", user: users[5] },
    { image: "blender.jpg", title: "Blender", user: users[5] },
  ]

  var addToCart = function(item) {
  	cart.push(item);
  };

  var filterItems = function(query) {
	items = $filter('filter')(items, { title: query });
  };

  var getUser = function(id) {
  	return _.find(users, function(user) { return user.id == id } );
  }

  var getItems = function(id) {
  	return _.find(items, function(item) { return item.user.id == id } );
  }

  return {
  	addToCart: addToCart,
  	getCart: function() { return cart },
  	getItems: function() { return items },
  	getLibrary: function() { return library },
  	getUser: getUser,
  	getItems: getItems,
  	filterItems: filterItems
  }
});
