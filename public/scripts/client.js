var verbose = false; // lets messages be turned off for non-error console.logs

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

app.controller('DefaultController', function (GiphyService) {
  if (verbose) console.log('DefaultController is loaded!');
}); // closes DefaultController

app.controller('FavoritesController', ['GiphyService', function (GiphyService) {
  if (verbose) console.log('FavoritesController is loaded...');

  var ctrl = this;

  var giphyList = []; // array of favorites objects

// TODO // get the list of favorites?

  ctrl.getFavoriteGiphys = function () {
  if (verbose) console.log('inside client.js getFavs');
  GiphyService.getFavoriteGiphys().then(function (res) {
if (verbose)   console.log('inside client.js favGif res: ', res); // should be all favorite gifs?
    // do something else? a message to the dom?
  }); // close then.
}; // closes getFavGif
  //
  //
  // ctrl.removeGif = function (gifToRemove) {
  // if (verbose)   console.log('inside client.js removeGif', gifToRemove);
  //   GiphyService.removeGif(gifToRemove).then(function (res) {
  // if (verbose)   console.log('inside client.js removeGif res: ', res);
  //     // do something else? a message to the dom?
  //   }); // close then.
  // }; // closes removeGif



}]); // closes FavoritesController
