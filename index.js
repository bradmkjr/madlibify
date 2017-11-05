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

pj.build = function (str) {
  var text = str.replace(/{{([^}]+)}}/g, function(match){    
    phrases = _.trim(match, '{}').split('|');
    return phrases[ getRandomRange( 0, phrases.length ) ];
  }); 
  return text;
}

function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}