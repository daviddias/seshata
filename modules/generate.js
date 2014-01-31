var prepare = require('./_prepare.js');

module.exports = function (_apiMapPath, _path){
  console.log('ALO');
  prepare(_path);
  generate(_apiMapPath, _path);

};


function generate(_apiMapPath, _path) {
  // feed each api call into main and then generate partial-nav.html


}