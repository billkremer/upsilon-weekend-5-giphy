var verbose = false; // lets messages be turned off for non-error console.logs

var express = require("express");
var router = express.Router();


var pg = require("pg");

var config = { database: "upsilon_giphy_favs" };

// initialize connection Pool
// think of as 'how I connect to DB'
var pool = new pg.Pool(config);




router.get("/", function(req, res) {  // getting the favorited Gifs

  console.log('giphydb get!');
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to database", err);
      res.sendStatus(500);
      done(); // returns the connection
    } else {
      client.query( "SELECT * FROM giphy_favs;", function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
          if (verbose) console.log("Got info from DB", result.rows);
          res.send(result.rows);
        };
      });  // closes client query
    }; // closes initial else
  }); // closes pool.connection
}); // closes get


module.exports = router;
