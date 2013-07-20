var http = require('http'),
  util = require('util');

var Restish = function(options) {
  var port = options.port;
  var routes = options.routes;

  var server = http.createServer(function(req, res) {

    var obj = {};

    for (var key in routes) {
      if (req.url.match(key)) {
        if ( !options.silent )
        console.log('Restish matches on key:', key);
        obj = routes[key];
      }
    }

    var response = JSON.stringify(obj);

    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Length': response.length,
      'Content-Type': 'application/json'
    });

    res.write(response);
    res.end();

  });

  server.timeout = 10000;

  server.listen(port, function() {
    if ( !options.silent )
    console.log("Restish Listening on Port:" + port);
  });
}

module.exports = Restish;