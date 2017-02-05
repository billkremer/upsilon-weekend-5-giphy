var verbose = true; // lets messages be turned off for non-error console.logs



var app = angular.module('goodGiphyApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/pages/main.html',
    // controller: 'DefaultController as defaultCtrl', // declard on html
  }).when('/favorites', {
    templateUrl: 'views/pages/favorites.html',
    // controller: 'FavoritesController as favoritesCtrl' // declared on html, dont need here
  })  // .when takes two parameters: 1 route as a string, 2 object literal with options.

  $locationProvider.html5Mode(true);
}); // closes app.config

app.controller('DefaultController', function (GiphyService) {
  if (verbose) console.log('DefaultController is loaded!');

var defCtrl = this;

defCtrl.getRandomGif = function (searchTerm) {
  if (searchTerm == undefined) { searchTerm = ' ';}
console.log('dinside gify', searchTerm);
    GiphyService.getRandomGif(searchTerm).then(function(response) {
    //   defCtrl.pokemonList = response.data.results;
    console.log('got a random response!', response);
    console.log('response',response.image_url);
    defCtrl.imageUrl = response.image_url;
    defCtrl.imageAlt = response.url;
  }); // closes then.

};// closes getRandomGif

defCtrl.getRandomGif("robot dancing");

}); // closes DefaultController

app.controller('FavoritesController', function (GiphyService) {
  if (verbose) console.log('FavoritesController is loaded...');

  var favCtrl = this;

  favCtrl.giphyList = []; // array of favorites objects

// TODO // get the list of favorites?



  favCtrl.getFavoriteGiphys = function () {
  if (verbose) console.log('inside client.js getFavs');
  GiphyService.getFavoriteGiphys().then(function (res) {
if (verbose)   console.log('inside client.js favGif res: ', res); // should be all favorite gifs?

  favCtrl.giphyList = res;

    // do something else? a message to the dom?s
  }); // close then.
}; // closes getFavGif

favCtrl.getFavoriteGiphys();

favCtrl.updateFavoriteComment = function (giphyToUpdate ) {
    event.preventDefault();
  if (verbose) console.log('inside client.js update', giphyToUpdate);
  GiphyService.updateFavoriteComment(giphyToUpdate).then(function (res) {
if (verbose) console.log('inside client.js update res: ', res); // should be all favorite gifs?
// favCtrl.giphyList = res;

// favCtrl.getFavoriteGiphys();

  // do something else? a message to the dom?s
}); // close then.

  // favCtrl.getFavoriteGiphys(); // to update the favorite?

}; // closes updateFavoriteComment



  // favCtrl.removeGif = function (gifToRemove) {
  // if (verbose)   console.log('inside client.js removeGif', gifToRemove);
  //   GiphyService.removeGif(gifToRemove).then(function (res) {
  // if (verbose)   console.log('inside client.js removeGif res: ', res);
  //     // do something else? a message to the dom?
  //   }); // close then.
  // }; // closes removeGif



}); // closes FavoritesController
