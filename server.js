var express =  require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var giphydb = require('./routes/giphydb');
// var giphyAPI = require('./routes/giphyAPI');


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/favgifs', giphydb); // pass through to the giphydb.js route

// app.use(('/getGifs', giphyAPI)); // pass through to the giphyAPI

// send all other requests to index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});


var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Listening on port ', server.address().port);
  console.log('Press Control + C to exit');
});
