var verbose = false; // lets messages be turned off for non-error console.logs

// var pg = require("pg");
// var config = { database: "upsilon_giphy_favs" };
// var pool = new pg.Pool(config);

  var giphyGetParams = { params: {api_key: 'dc6zaTOxFJmzC', limit: '1'} };

app.service('GiphyService', function ($http) {

  console.log('got to service!');

  var publicAPIkey = 'dc6zaTOxFJmzC';
  var giphyURL = '//api.giphy.com/v1/gifs/random'



  this.getFavoriteGiphys = function () {
    // return the promise to the caller
    console.log('got a bit further...');
    return $http({
      url: '/favgifs',
      type: 'GET'
    }).then(function(response) {
      //   ctrl.pokemonList = response.data.results;
console.log('any response?',response.data);
      // pool.connect(function(err, client, done) {
      //   if (err) {
      //     console.log("Error connecting to database", err);
      //     res.sendStatus(500);
      //     done(); // returns the connection
      //   } else {
      //     client.query( "SELECT * FROM giphy_favs;", function(err, result) {
      //       done();
      //       if (err) {
      //         console.log("Error querying DB", err);
      //         res.sendStatus(500);
      //       } else {
      //         if (verbose) console.log("Got info from DB", result.rows);
      //         return (result.rows);
      //       };
      //     });  // closes client query
      //   }; // closes initial else
      // }); // closes pool.connection


    //  console.log('got a random response!', response);
    // //  console.log(response.data.data.image_url);
    //   return response.data.data;
  //    ctrl.imageAlt = response.data.data.url;
  return response;

    }).catch(function(err) {
      console.log('error getting random data from API :', err);
    });



    // pool.connect(function(err, client, done) {
    //   if (err) {
    //     console.log("Error connecting to database", err);
    //     res.sendStatus(500);
    //     done(); // returns the connection
    //   } else {
    //     client.query( "SELECT * FROM giphy_favs WHERE task_completed IS NULL ORDER BY task_due ASC", function(err, result) {
    //       done();
    //       if (err) {
    //         console.log("Error querying DB", err);
    //         res.sendStatus(500);
    //       } else {
    //         if (verbose) console.log("Got info from DB", result.rows);
    //         res.send(result.rows);
    //       };
    //     });  // closes client query
    //   }; // closes initial else
    // }); // closes pool.connection


  }; // closes getFavoriteGiphys






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
