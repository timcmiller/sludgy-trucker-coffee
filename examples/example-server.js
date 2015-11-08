var http = require('http');
var router = require(__dirname + '/../lib/router.js');
var server = require(__dirname + '/../lib/server.js');


//setting up a route for a GET request
router.get('/finecupofcoffee', function(req, res){
  console.log('get request');
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('wow, so awesome, such framework');
  res.end();
});

//setting up a route for a POST request
router.post('/finecupofcoffee', function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/json'});
  res.write('{"Hello": "World"}');
  res.end();
});

//a GET request for a 404 page
router.get('/cantgetnosatisfaction', function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('not found');
  res.end();
});

server.listen(3000);
