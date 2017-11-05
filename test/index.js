var tap = require('tap');
var test = tap.test;

var pj = require('../index');

test('it parses a handlebars-y string', function (t) {
  var str = "The quick {{color}} {{noun1}} jumps over the lazy {{noun2}}";

  var bits = pj.parse(str);
  t.deepEqual(bits, ['color', 'noun1', 'noun2']);
  t.end();
});

test('it parses a handlebars-y string with multiple single bit types', function (t) {
  var str = "The quick {{color}} {{noun1}} jumps over the lazy {{noun1}}";
  var bits = pj.parse(str);
  t.deepEqual(bits, ['color', 'noun1']);
  t.end();
});

test('it takes a handlebars-y string and compiles the object', function (t) {
  var str = "The quick {{color}} {{noun1}} jumps over the lazy {{noun2}}";
  var obj = {
    color: 'brown',
    noun1: 'fox',
    noun2: 'dog'
  };

  var text = pj.compile(str, obj);
  t.equal(text, 'The quick brown fox jumps over the lazy dog');
  t.end();
});

test('it takes a handlebars-y string and compiles a random object', function (t) {
  var str = "The quick {{black:red:green}} {{cat:dog:mouse:cow}} jumps over the lazy {{stool:house:moon}}";
  
  var text = pj.jumble(str);
  t.notEqual(text, 'The quick brown fox jumps over the lazy dog');
  t.end();
});