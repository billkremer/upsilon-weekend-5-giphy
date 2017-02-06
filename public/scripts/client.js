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
    if (searchTerm == undefined) { searchTerm = ' ';};
    if (verbose) console.log('inside gRandG', searchTerm);

    GiphyService.getRandomGif(searchTerm).then(function(response) {
    //   defCtrl.pokemonList = response.data.results;
    if (verbose) console.log('got a random response!', response);
    defCtrl.imageUrl = response.image_url;
    defCtrl.imageAlt = response.url;
  }); // closes then.
};// closes getRandomGif

defCtrl.getRandomGif("robot dancing"); // puts the first gif on the page


console.log(defCtrl);


defCtrl.favoriteThisGif = function (giphyToFav) {
    giphyToFav = defCtrl;
    if (verbose) console.log('giphyToFav', giphyToFav);

    GiphyService.favoriteThisGif(giphyToFav).then(function(response) {
    //   defCtrl.pokemonList = response.data.results;
    if (verbose) console.log('got a response from favthisgif!', response);
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

    }); // close then.
  }; // closes getFavGif

favCtrl.getFavoriteGiphys();

favCtrl.updateFavoriteComment = function (giphyToUpdate ) {
  event.preventDefault();
  if (verbose) console.log('inside client.js update', giphyToUpdate);
  GiphyService.updateFavoriteComment(giphyToUpdate).then(function (res) {
    if (verbose) console.log('inside client.js update res: ', res); // should be all favorite gifs?

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
