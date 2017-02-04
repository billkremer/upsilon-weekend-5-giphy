var app = angular.module('goodGiphyApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/pages/main.html',
    controller: 'DefaultController as defaultCtrl',
  }).when('/favorites', {
    templateUrl: 'views/pages/favorites.html',
    controller: 'FavoritesController as favoritesCtrl'
  })  // .when takes two parameters: 1 route as a string, 2 object literal with options.

  $locationProvider.html5Mode(true);
}); // closes app.config

app.controller('DefaultController', function () {
  console.log('DefaultController is loaded!');
});

app.controller('FavoritesController', function () {
  console.log('FavoritesController is loaded...');
})
