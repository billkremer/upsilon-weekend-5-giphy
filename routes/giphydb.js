var verbose = true; // lets messages be turned off for non-error console.logs

var express = require("express");
var router = express.Router();


var pg = require("pg");

var config = { database: "upsilon_giphy_favs" };

// initialize connection Pool
// think of as 'how I connect to DB'
var pool = new pg.Pool(config);

var bodyParser = require("body-parser");
router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}));

router.post('/gifPOST', function(req, res) {
// adding a new favorite giphy
  if (verbose) console.log('giphy POST', req.body);

  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to database", err);
      res.sendStatus(500);
      done(); // returns the connection
    } else {
      client.query( 'INSERT INTO giphy_favs (giphy_url, giphy_comment, giphy_alt) VALUES ($1, $2, $3);', [req.body.imageUrl, req.body.giphy_comment, req.body.imageAlt], function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
          if (verbose) console.log("Got put info from DB", result.rows);
          res.send(result.rows);
        };
      });  // closes client query
    }; // closes initial else
  }); // closes pool.connection
}); // closes POST



router.delete('/:id', function(req, res) {  // updating the favorited Gifs
  if (verbose) console.log('giphydb delete!', req.body, 'params', req.params); // you don't send data to a delete!!!

  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to database", err);
      res.sendStatus(500);
      done(); // returns the connection
    } else {
      client.query( 'DELETE FROM giphy_favs WHERE id = $1;', [req.params.id], function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
          if (verbose) console.log("Got delete info from DB");
          res.sendStatus(204);
        };
      });  // closes client query
    }; // closes initial else
  }); // closes pool.connection
}); // closes POST





router.put('/:id', function(req, res) {  // updating the favorited Gifs
  console.log('giphydb PuT!', req.body, 'params', req.params);

  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to database", err);
      res.sendStatus(500);
      done(); // returns the connection
    } else {
      client.query( 'UPDATE giphy_favs SET giphy_comment=$2  WHERE id = $1 RETURNING *', [req.body.id, req.body.giphy_comment ], function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
          if (verbose) console.log("Got put info from DB", result.rows);
          res.send(result.rows);
        };
      });  // closes client query
    }; // closes initial else
  }); // closes pool.connection
}); // closes POST


router.get("/", function(req, res) {  // getting the favorited Gifs

  if (verbose) console.log('giphydb get!');
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to database", err);
      res.sendStatus(500);
      done(); // returns the connection
    } else {
      client.query( "SELECT * FROM giphy_favs ORDER BY id ASC;", function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
    //      if (verbose) console.log("Got get info from DB", result.rows);
          res.send(result.rows);
        };
      });  // closes client query
    }; // closes initial else
  }); // closes pool.connection
}); // closes get


module.exports = router;
