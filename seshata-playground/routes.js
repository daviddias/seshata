var server  = require('./index.js');
var path    = require('path');
var users   = require('./test-data/users.json');
var buzzard = require('./_auth.js');


server.route({
  method: 'GET',
  path: '/{path*}',
  config : {
    handler: {
      directory: function() {
        var staticAssetsPath = path.join('./public');
        return {
          path: staticAssetsPath,
          listing: true,
          index: true
        };
      }()
    }
  }
});

server.route({
  method: 'GET',
  path: '/api/user',
  handler: function(request, reply) {
    console.log('This route uses buzzard auth');
    buzzard.auth(request, function(err, credentials, attributes){
      if (err) {
        console.log('buzzard error', err);
      }
      reply(users);
    });
  }
});

server.route({
  method: 'GET',
  path: '/api/user/{user_id}',
  handler: function(request, reply) {
    console.log('This route uses buzzard auth');
    buzzard.auth(request, function(err, credentials, attributes){
      if (err) {
        console.log('buzzard error', err);
      }
      for (var i=0;i<users.length;i++) {
        if (request.params.user_id === users[i].username){
          reply(users[i]);
          return;
        }
      }
      reply('user not found').code(404);
    });
  }
});

server.route({
  method: 'GET',
  path: '/api/user/auth',
  handler: function(request, reply) {
    console.log('This route offers credentials');
    reply({
      id: 'user1',
      key: 'kkkeeeyyy1',
      algorithm: 'sha1'
    });
  }
});


server.route({
  method: 'POST',
  path: '/api/user',
  handler: function(request, reply) {
    console.log(request.payload);
    reply(users);
  }
});

server.route({
  method: 'PUT',
  path: '/api/user',
  handler: function(request, reply) {
    console.log(request.payload);
    reply(users);
  }
});

server.route({
  method: 'DELETE',
  path: '/api/user',
  handler: function(request, reply) {
    console.log(request.payload);
    reply(users);
  }
});
