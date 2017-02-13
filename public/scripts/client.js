var verbose = false; // lets messages be turned off for non-error console.logs

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
    if (searchTerm == undefined) { searchTerm = '';};
    if (verbose) console.log('inside getRandGif', searchTerm);

    GiphyService.getRandomGif(searchTerm).then(function(response) {

    if (verbose) console.log('got a random response!', response);
    defCtrl.imageUrl = response.image_url;
    defCtrl.imageAlt = response.url;
    defCtrl.favButtonTxt = "Favorite this GIF";
    defCtrl.favButtonBool = false;
    }); // closes then.
  };// closes getRandomGif

  defCtrl.getRandomGif(""); // puts the first gif on the page
  // doesn't affect search or random button.

  if (verbose) console.log(defCtrl);


  defCtrl.getFavoriteGiphys = function () {
    if (verbose) console.log('inside client.js getFavs');
    GiphyService.getFavoriteGiphys().then(function (res) {
    if (verbose) console.log('inside client.js favGif res: ', res); // should be all favorite gifs?

    defCtrl.giphyCount = res.length;
    if (verbose) console.log('length', defCtrl.giphyCount);

    }); // close then.
  }; // closes getFavGif

  defCtrl.getFavoriteGiphys(); // gets the count of giphys


  defCtrl.favoriteThisGif = function (giphyToFav) {
    giphyToFav = defCtrl;
    if (verbose) console.log('giphyToFav', giphyToFav);

    GiphyService.favoriteThisGif(giphyToFav).then(function(response) {
    //   defCtrl.pokemonList = response.data.results;
    if (verbose) console.log('got a response from favthisgif!', response);
    defCtrl.favButtonTxt = "Favorited!";
    defCtrl.getFavoriteGiphys();
    defCtrl.favButtonBool = true;
    defCtrl.giphy_comment = "";

    }); // closes then
  }; // closes favoriteThisGif


}); // closes DefaultController

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


app.controller('FavoritesController', function (GiphyService) {
  if (verbose) console.log('FavoritesController is loaded...');

  var favCtrl = this;

  favCtrl.giphyList = []; // array of favorites objects


  favCtrl.getFavoriteGiphys = function () {
    if (verbose) console.log('inside client.js getFavs');
    GiphyService.getFavoriteGiphys().then(function (res) {
      if (verbose) console.log('inside client.js favGif res: ', res); // should be all favorite gifs?

      favCtrl.giphyList = res;
      if (verbose) console.log('length',favCtrl.giphyList.length);
      favCtrl.giphyCount = res.length
    }); // close then.
  }; // closes getFavGif


  favCtrl.getFavoriteGiphys();


  favCtrl.updateFavoriteComment = function (giphyToUpdate ) {
    event.preventDefault();
    if (verbose) console.log('inside client.js update', giphyToUpdate);
    GiphyService.updateFavoriteComment(giphyToUpdate).then(function (res) {
      if (verbose) console.log('inside client.js update res: ', res); // should be all favorite gifs?

      }); // close then.


  }; // closes updateFavoriteComment


  favCtrl.removeGif = function (gifToRemove) {
    event.preventDefault();

    if (verbose)   console.log('inside client.js removeGif', gifToRemove);

    GiphyService.removeGif(gifToRemove).then(favCtrl.getFavoriteGiphys);

    if (verbose) console.log('inside client.js removeGif res: ');

  }; // closes removeGif



}); // closes FavoritesController
