var prepare = require('./_prepare.js');
var path    = require('path');

module.exports = function (_apiMapPath, _path){
  prepare(_path);
  generate(_apiMapPath, _path);

};


function generate(_apiMapPath, _path) {
  // feed each api call into main and then generate partial-nav.html


  var apiMap = require(path.resolve(process.cwd(), _apiMapPath));
  console.log(apiMap);

}