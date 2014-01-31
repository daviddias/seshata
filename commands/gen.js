require('colors');
var read    = require('read');
var error   = require('../error');

module.exports = gen;

module.exports.usage =
function usage(name, args) {
  args.
    usage('such-docs gen <json-object-with-docs> [<output-path>]');
};

function gen(args) {


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