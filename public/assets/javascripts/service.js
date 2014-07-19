angular.module('LibraryService', [])
.factory('LibraryService', function($http, $filter) {
  var cart = [];
  var users = [
  	{ id: 1, age: chance.age(), rating: chance.integer({ min: 0, max: 5 }), city: chance.city(), state: chance.state(), name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
  	{ id: 2, age: chance.age(), rating: chance.integer({ min: 0, max: 5 }), city: chance.city(), state: chance.state(), name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
  	{ id: 3, age: chance.age(), rating: chance.integer({ min: 0, max: 5 }), city: chance.city(), state: chance.state(), name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
	{ id: 4, age: chance.age(), rating: chance.integer({ min: 0, max: 5 }), city: chance.city(), state: chance.state(), name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
 	{ id: 5, age: chance.age(), rating: chance.integer({ min: 0, max: 5 }), city: chance.city(), state: chance.state(), name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() },
  	{ id: 6, age: chance.age(), rating: chance.integer({ min: 0, max: 5 }), city: chance.city(), state: chance.state(), name: chance.name(), pickupSpot: chance.address(), pickupSpotLat: chance.latitude(), pickupSpotLong: chance.longitude() }
  ];

  var items = [
    { image: "bike.jpg", title: "Fixie Bike", user: users[2] },
    { image: "books.jpg", title: "A bunch of books", user: users[0] },
    { image: "coat.jpg", title: "Nice coat", user: users[1] },
    { image: "bike1.jpg", title: "Fixie Bike", user: users[4] },
    { image: "dvd.jpg", title: "DVD", user: users[3] },
    { image: "bike2.jpg", title: "Pickup Truck", user: users[3] },
    { image: "crockpot.jpg", title: "Crockpot", user: users[4] },
    { image: "bike3.jpg", title: "Pickup Truck", user: users[2] },
    { image: "tent.jpg", title: "Tent", user: users[5] },
    { image: "coffeemachine.jpg", title: "Coffee Machine", user: users[5] },
    { image: "bike4.jpg", title: "Pickup Truck", user: users[2] },
    { image: "blender.jpg", title: "Blender", user: users[5] },
    { image: "colander.jpg", title: "Colander", user: users[3] },
    { image: "backpack.jpg", title: "Backpack", user: users[3] },
    { image: "bike5.jpg", title: "Pickup Truck", user: users[5] },
    { image: "truck.jpg", title: "Pickup Truck", user: users[2] },
    { image: "bike6.jpg", title: "Pickup Truck", user: users[2] },
  ];

  var library = [
    { image: "tent.jpg", title: "Tent", user: users[5] },
    { image: "coffeemachine.jpg", title: "Coffee Machine", user: users[5] },
    { image: "blender.jpg", title: "Blender", user: users[5] },
  ]

  var addToCart = function(item) {
  	cart.push(item);
  };

  var addItem = function(title) {
  	library.push({ image: "dvd.jpg", title: title });
  };

  var filterItems = function(query) {
	items = $filter('filter')(items, { title: query });
  };

  var getUser = function(id) {
  	return _.find(users, function(user) { return user.id == id } );
  }

  var getItems = function(id) {
  	if(!id) { return items; }
  	return _.filter(items, function(item) { return item.user.id == id } );
  }

  return {
  	addToCart: addToCart,
  	addItem: addItem,
  	getCart: function() { return cart },
  	getLibrary: function() { return library },
  	getUser: getUser,
  	getItems: getItems,
  	filterItems: filterItems
  }
});
