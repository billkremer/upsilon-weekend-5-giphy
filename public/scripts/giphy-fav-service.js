var verbose = true; // lets messages be turned off for non-error console.logs

// var pg = require("pg");
// var config = { database: "upsilon_giphy_favs" };
// var pool = new pg.Pool(config);

  var giphyGetParams = { params: {api_key: 'dc6zaTOxFJmzC', limit: '1'} };

app.service('GiphyService', function ($http) {

  console.log('got to service!');

  var apiUrl = '//api.giphy.com/v1/gifs/random'; // random also lets the user have a searchterm, using 'tag'

  var giphyGetParams = { params: {api_key: 'dc6zaTOxFJmzC', limit: '1'} };


  this.getRandomGif = function (searchTerm) {
    giphyGetParams.params.tag = searchTerm;
    console.log('tag', giphyGetParams.params.tag);
      return $http.get(apiUrl , giphyGetParams).then(function(response) {
      //   defCtrl.pokemonList = response.data.results;
     console.log('got a random response!', response);
    //  console.log(response.data.data.image_url);
      return response.data.data;
  //    defCtrl.imageAlt = response.data.data.url;
    }).catch(function(err) {
      console.log('error getting random data from API :', err);
    });
  }; // close get random





  this.getFavoriteGiphys = function () {
    // return the promise to the caller

    return $http({
      url: '/favgifs/getfavs',
      type: 'GET'
    }).then(function(response) {
      //   ctrl.pokemonList = response.data.results;
console.log('any response?',response.data);

  return response.data;

    }).catch(function(err) {
      console.log('error getting random data from API :', err);
    });
  }; // closes getFavoriteGiphys



  this.updateFavoriteComment = function (giphyToUpdate) {
      // console.log('got a bit further... id: ', giphyToUpdate.id, giphyToUpdate, '/favgifs/'+ giphyToUpdate.id);
      // var dataObjToSend = {temp: giphyToUpdate}

      return $http.put('/favgifs/'+ giphyToUpdate.id, giphyToUpdate ).then(function(response) {
        //   ctrl.pokemonList = response.data.results;
  console.log('any response from update?', response);

    return response.config.data;

      }).catch(function(err) {
        console.log('error getting random data from API :', err);
      });

  }; // closes updateFavoriteComment




  // router.get("/current", function(req, res) {  // getting the current list of todos
  //   pool.connect(function(err, client, done) {
  //     if (err) {
  //       console.log("Error connecting to database", err);
  //       res.sendStatus(500);
  //       done(); // returns the connection
  //     } else {
  //       client.query( "SELECT * FROM giphy_favs WHERE task_completed IS NULL ORDER BY task_due ASC", function(err, result) {
  //         done();
  //         if (err) {
  //           console.log("Error querying DB", err);
  //           res.sendStatus(500);
  //         } else {
  //           if (verbose) console.log("Got info from DB", result.rows);
  //           res.send(result.rows);
  //         };
  //       });  // closes client query
  //     }; // closes initial else
  //   }); // closes pool.connection
  // }); // closes get



  this.removeGif = function () {
    // return the promise to the caller
    // return $http.delete()

  } // closes removeGif







  // this.getAllPokemon = function () {
  // // return the promise to the caller
  //   return $http.get(API + '/pokemon').then(function(response){
  //     console.log('Got a response from the API', response);
  //     return response.data.results; // returned on resolution of promise
  //   }).catch(function(err){
  //     console.log('Error getting info from API', err);
  //   });
  // }; // closes getAllPokemon
  //
  // this.getOnePokemon = function (pokemon) {
  //   return $http.get(pokemon.url).then(function(response){
  //     console.log('Pokemon info', response.data);
  //     var foundPokemon = response.data;
  //     return foundPokemon.sprites.front_default; // should be an image
  //   }).catch(function(err){
  //     console.log('Error getting info from API', err);
  //   });
  // }; // closes getOnePokemon


});// sevice closer
