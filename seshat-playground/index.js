var Hapi       = require('hapi');
var options    = require('./options.js');
var config     = require('./config.js');

var server     = module.exports =
  Hapi.createServer(config.port, options);

var routes     = require('./routes');

server.start(function () {
  console.log('Server started at: ' + server.info.uri);
});