var prepare     = require('./_prepare.js');
var path        = require('path');
var fs          = require('fs');
var Handlebars  = require('handlebars');

module.exports = function (_apiMapPath, _path){
  prepare(_path);
  generate(_apiMapPath, _path);
};

function generate(_apiMapPath, _path) {
  Handlebars.registerHelper('json-hack', function(context) {
    return JSON.stringify(context).split('\"').join('\'');
  });

  Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
  });

  var apiMap = require(path.resolve(process.cwd(), _apiMapPath));
  var templateSource = fs.readFileSync('../templates/main.html').toString();
  var template = Handlebars.compile(templateSource);
  var result = template(apiMap);
  fs.writeFileSync(path.resolve(process.cwd(),_path) + '/index.html', result);
}