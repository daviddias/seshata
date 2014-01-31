var fs = require('fs');

var files = fs.readdirSync(__dirname);
files = files.filter(function(file) {
  return file !== 'index.js';
});

var commands = files.map(function(file) {
  return file.substring(0, file.lastIndexOf('.js'));
});

exports.list =
function list() {
  return commands;
};

exports.module =
function module(command) {
  return require('./' + command);
};