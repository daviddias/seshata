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

function auth(req, cb) {
  function authenticated(err, credentials, attributes) {
    if (err) {
      cb(err);
    } else {
      console.log('user id %s used nonce %s', credentials.id, attributes.nonce);
      cb(null, credentials, attributes);
    }
  }
}


exports = module.exports = buzzard;
exports.auth = auth;