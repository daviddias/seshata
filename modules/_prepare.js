var fs    = require('fs');
var ncp   = require('ncp').ncp;
var path  = require('path');

function createFolder(_path) {
  if (!fs.existsSync(_path)) {
    fs.mkdirSync(_path);
  }
}

function copyAssets(_path) {
  ncp.limit = 16;

  ncp(path.join(__dirname, '..', '/assets/css'),
   path.join(_path, '/css'), function (err) {
    if (err) {
      return console.error(err);
    }
  });

  ncp(path.join(__dirname, '..', '/assets/fonts'),
    path.join(_path, '/fonts'), function (err) {
    if (err) {
      return console.error(err);
    }
  });

  // var jsPath = path.join(_path, '/js');
  // if (!fs.existsSync(jsPath)) {
  //   fs.mkdirSync(jsPath);
  // }

  



  ncp(path.join(__dirname, '..', '/assets/js'),
   path.join(_path, '/js'), function (err) {
    if (err) {
      return console.error(err);
    }
  });

}

module.exports = function prepare(_path) {
  createFolder(_path);
  copyAssets(_path);
};

