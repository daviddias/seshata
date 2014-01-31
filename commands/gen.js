require('colors');
var read     = require('read');
var error    = require('../error');
var generate = require('../modules/generate.js');

module.exports = gen;

module.exports.usage =
function usage(name, args) {
  args.
    usage('such-docs gen <api-map-path> [<output-path>]');
};

function gen(args) {
  console.log('→ Gen API Docs'.yellow);



  apiMapPath(function(_apiMapPath) {
    if (! _apiMapPath) {
      error('Needs an api map');
    }
    path(function(_path) {
      generate(_apiMathPath, _path);
    });
  });


  function apiMapPath(cb) {
    var _apiMapPath = args._[0];
    if (_apiMapPath) {
      return cb(_apiMapPath);
    }

    read({
      prompt: 'apimap:'
    }, function(err, _apiMapPath) {
      cb(_apiMapPath);
    });
  }

  function path(cb) {
    var _path = args._[1];
    if (! _path) {
      return cb('public');
    }
    cb(_path);
  }























//   username(function(username) {
//     if (! username) error('Needs user name');
//     password(function(password) {
//       if (! password) error('Needs password');

//       doSignup(username, password, args.invite, function(err) {
//         if (err) error(err);
//         console.log('Signed up successfully'.green);
//         login({_: [ username, password ]});
//       });
//     });
//   });

//   function username(cb) {
//     var username = args._[0];
//     if (username) return cb(username);

//     read({
//       prompt: 'Email:'
//     }, function(err, username) {
//       cb(username);
//     });
//   }

//   function password(cb) {
//     var password = args._[1];
//     if (password) return cb(password);

//     read({
//       prompt: 'Password:',
//       silent: true
//     }, function(err, password) {
//       cb(password);
//     });
//   }

// }

// function doSignup(username, password, invite, cb) {
//   request.post({
//     uri: '/user',
//     json: {
//       username: username,
//       password: password,
//       invite: invite
//     }
//   }, cb);
}