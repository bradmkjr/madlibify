# Madlibify
Create your own [madlibs](https://en.wikipedia.org/wiki/Mad_Libs) word game!

## To use Original Version
```js
var pj = require('phrasejumble');

var text = "The quick {{color1}} {{noun1}} jumps over the lazy {{noun2}}";

// Parse out the fill-in-the-blanks
var blanks = pj.parse(text); 
console.log(blanks); // ["color1", "noun1", "noun2"]

// Fill in the blanks!
var serious = {
  color1: 'brown',
  noun1: 'fox',
  noun2: 'dog'
};
var madlibs = pj.compile(text, serious);
console.log(madlibs); // The quick brown fox jumps over the lazy dog

// Be silly!
var silly = {
  color1: 'blue',
  noun1: 'truck',
  noun2: 'tree'
};
var madlibs = pj.compile(text, silly);
console.log(madlibs); // The quick blue truck jumps over the lazy tree

```

### Version 2
```js
var text = "The quick {{color1:color2:color3}} {{noun1:noun2}} jumps over the lazy {{noun3:noun4:noun5}}";

var jumble = pj.jumble(text);
console.log(jumble); // Randomized Output: The quick color2 noun2 jumps over the lazy noun3

```
