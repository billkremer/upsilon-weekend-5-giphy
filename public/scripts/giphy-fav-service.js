var verbose = true; // lets messages be turned off for non-error console.logs

// var pg = require("pg");
// var config = { database: "upsilon_giphy_favs" };
// var pool = new pg.Pool(config);

  var giphyGetParams = { params: {api_key: 'dc6zaTOxFJmzC', limit: '1'} };

app.service('GiphyService', function ($http) {

  if (verbose) console.log('got to service!');

  var apiUrl = '//api.giphy.com/v1/gifs/random'; // random also lets the user have a searchterm, using 'tag'

  var giphyGetParams = { params: {api_key: 'dc6zaTOxFJmzC', limit: '1'} };


  this.getRandomGif = function (searchTerm) {
    giphyGetParams.params.tag = searchTerm;
    if (verbose) console.log('tag', giphyGetParams.params.tag);
      return $http.get(apiUrl , giphyGetParams).then(function(response) {
      //   defCtrl.pokemonList = response.data.results;
     if (verbose) console.log('got a random response!', response);
    //  console.log(response.data.data.image_url);
      return response.data.data;
      // ...imageAlt = response.data.data.url;
    }).catch(function(err) {
      console.log('error getting random data from API :', err);
    });
  }; // close get random


  this.favoriteThisGif = function (giphyToFav) {
    if (verbose) console.log('giphyToFav-service', giphyToFav);
    // return the promise to the caller
    return $http.post('/favgifs/gifPOST', giphyToFav ).then(function(response) {
      //   ctrl.pokemonList = response.data.results;
if (verbose) console.log('any response?',response);

  return response;

    }).catch(function(err) {
      console.log('error getting response from favthisgif :', err);
    });
  }; // closes getFavoriteGiphys



  this.getFavoriteGiphys = function () {

    // return the promise to the caller
    return $http({
      url: '/favgifs',
      type: 'GET'
    }).then(function(response) {
      //   ctrl.pokemonList = response.data.results;
if (verbose) console.log('any response?',response.data);

  return response.data;

    }).catch(function(err) {
      console.log('error getting response  :', err);
    });
  }; // closes getFavoriteGiphys



  this.updateFavoriteComment = function (giphyToUpdate) {
      // console.log('got a bit further... id: ', giphyToUpdate.id, giphyToUpdate, '/favgifs/'+ giphyToUpdate.id);
      // var dataObjToSend = {temp: giphyToUpdate}

      return $http.put('/favgifs/'+ giphyToUpdate.id, giphyToUpdate ).then(function(response) {
        //   ctrl.pokemonList = response.data.results;
  if (verbose) console.log('any response from update?', response);

    return response.config.data;

      }).catch(function(err) {
        console.log('error getting random data from API :', err);
      });

  }; // closes updateFavoriteComment


  this.removeGif = function (giphyToRemove) {
      console.log('got a bit further...delete id: ', giphyToRemove.id, giphyToRemove, '/favgifs/'+ giphyToRemove.id);
      // var dataObjToSend = {temp: giphyToUpdate}

      return $http.delete('/favgifs/'+ giphyToRemove.id)
      .then(function(response) {
 if (verbose) console.log('any response from delete?', response);
    // var returnObj = {response: 'OK Yo'};
   return response;

      }).catch(function(err) {
        console.log('error getting random data from API :', err);
      });

  }; // closes updateFavoriteComment

});// sevice closer
