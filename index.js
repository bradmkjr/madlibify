var hbs = require('handlebars');
var _ = require('lodash');

var pj = module.exports;
  
pj.compile = function (str, obj) {
  var template = hbs.compile(str);
  return template(obj);
}

pj.parse = function (str) {
  var matches = str.match(/{{([^}]+)}}/g);
  var matches = _.unique(matches, true);
  var matches = _.map(matches, function (str) { return _.trim(str, '{}'); });
  return matches;
}

pj.jumble = function (str) {
  var matches = str.match(/{{([^}]+)}}/g);
  var replacements = {};
  var matches = _.map(matches, function (str) { 
  	phrases = _.trim(str, '{}').split(':');
  	var random = phrases[ getRandomRange( 0, phrases.length ) ];
  	replacements[_.trim(str, '{}')] = random;
  });
  return this.compile(str, replacements);
}

function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}