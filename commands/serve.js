require('colors');
var read    = require('read');
var error   = require('../error');
var nodestatic  = require('node-static');
var http        = require('http');

module.exports = serve;

module.exports.usage =
function usage(name, args) {
  args.
    usage('such-docs serve <path> [port]');
};

function serve(args) {
  console.log('→ Serve'.yellow);
 
  path(function(_path) {
    if (! _path) {
      error('Needs a path');
    }
    
    port(function(_port) {
      if (! _port) {
        _port = 8080;
      }

      var file = new nodestatic.Server(_path);
      http.createServer(function (request, response) {
        request.addListener('end', function () {
            file.serve(request, response);
          }).resume();
      }).listen(_port);
      console.log('→ Serving: '.yellow, _path, ' on: '.yellow, _port);

    });
  });

  function path(cb) {
    var _path = args._[0];
    if (_path) {
      return cb(_path);
    }

    read({
      prompt: 'path to serve:'
    }, function(err, _path) {
      cb(_path);
    });
  }


  function port(cb) {
    var _port = args._[1];
    if (_port) {
      return cb(_port);
    }

    read({
      prompt: 'port to serve:'
    }, function(err, _port) {
      cb(_port);
    });
  }

}