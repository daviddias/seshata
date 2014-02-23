var prepare     = require('./_prepare.js');
var path        = require('path');
var fs          = require('fs');
var Handlebars  = require('handlebars');
var browserify  = require('browserify');

module.exports = function (_apiMapPath, _path){
  prepare(_path);
  generate(_apiMapPath, _path);
};

function generate(_apiMapPath, _path) {
  Handlebars.registerHelper('json-hack', function(context) {
    if(!context) {
      return '';
    }
    return JSON.stringify(context).split('\"').join('\'');
  });

  Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context, null, 2);
  });

  // augment the .html
  var apiMap = require(path.resolve(process.cwd(), _apiMapPath));
  console.log(path.resolve(__dirname, '../templates/main.html'));
  var templateSource =
  fs.readFileSync(path.resolve(__dirname, '../templates/main.html')).toString();
  var template = Handlebars.compile(templateSource);
  var result = template(apiMap);
  fs.writeFileSync(path.resolve(process.cwd(),_path) + '/index.html', result);

  browserifySeshata();

  function browserifySeshata() {
    // browserify _buzzard.js 
    var b = browserify();
    b.add(path.resolve(__dirname, '_seshata.js'));
    b.bundle().pipe(fs.createWriteStream(path.join(_path, '/js/seshata.js')));
  }
}