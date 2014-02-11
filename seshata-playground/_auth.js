var Buzzard = require('buzzard').server;
var buzzard = Buzzard(getCredentials);

// stupid example

var credentials = {
  'user1': {
    id: 'user1',
    key: 'kkkeeeyyy1',
    algorithm: 'sha1'
  },

  'user2': {
    id: 'user2',
    key: 'kkkeeeyyy2',
    algorithm: 'sha1'
  }
};

/// cb is error-first
function getCredentials(id, cb) {
  cb(null, credentials[id]);
}


// --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --


function authenticate(req, cb) {
  buzzard.authenticate(req, authenticated);

  function authenticated(err, credentials, attributes) {
    if (err) {
      cb(err);
      // res.statusCode = err.response.code;
      // res.end(err.message);
    } else {
      console.log('user id %s used nonce %s', credentials.id, attributes.nonce);

      // validate nonce...

      cb(null, credentials, attributes);

      // res.end('You have access!!!');
    }
  }
}


exports = module.exports = buzzard;
exports.authenticate = authenticate;