var prepare     = require('./_prepare.js');
var path        = require('path');
var fs          = require('fs');
var Handlebars  = require('handlebars');

module.exports = function (_apiMapPath, _path){
  prepare(_path);
  generate(_apiMapPath, _path);

};


function generate(_apiMapPath, _path) {
  // feed each api call into main and then generate partial-nav.html

  var apiMap = require(path.resolve(process.cwd(), _apiMapPath));
  console.log(apiMap);

  var templateSource = fs.readFileSync('../templates/main.html').toString();
  var template = Handlebars.compile(templateSource);
  var result = template(apiMap);

  // console.log(result);

  // console.log(path.resolve(process.cwd(),_path));
  fs.writeFileSync(path.resolve(process.cwd(),_path) + '/index.html', result);
 

}



// var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
//              "{{kids.length}} kids:</p>" +
//              "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
// var template = Handlebars.compile(source);

// var data = { "name": "Alan", "hometown": "Somewhere, TX",
//              "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
// var result = template(data);