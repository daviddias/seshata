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
    return JSON.stringify(context);
  });

  // augment the .html
  var apiMap = require(path.resolve(process.cwd(), _apiMapPath));
  var templateSource = fs.readFileSync('../templates/main.html').toString();
  var template = Handlebars.compile(templateSource);
  var result = template(apiMap);
  fs.writeFileSync(path.resolve(process.cwd(),_path) + '/index.html', result);


  // bundle the js with keys if needed
  if (!apiMap.auth) {
    return;
  } else {
    //hacky hacky, kids don't take this as a good example
    fs.writeFileSync(
      path.join(__dirname, '..', '/assets/js/auth.js'),
      'auth = ' + JSON.stringify(apiMap.auth) + ';'
    );
  }
}