var server = require('./index.js');
var path   = require('path');
var users  = require('./test-data/users.json');

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
    reply(users);
  }
});

server.route({
  method: 'GET',
  path: '/api/user/{user_id}',
  handler: function(request, reply) {
    for (var i=0;i<users.length;i++) {
      if (request.params.user_id === users[i].username){
        reply(users[i]);
        return;
      }
    }
    reply('user not found').code(404);
  }
});

