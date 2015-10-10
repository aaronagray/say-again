#!/usr/bin/env node

'use strict';

var say = require('../');
//
// // no callback, fire and forget
// say.speak('Alex', 'whats up, dog?');
//
// // no callback, fire and forget
// say.speak('Cellos', 'whats up, dog?', 200);

// output some text to the console as the callback
say.speak('Alex', 'whats up, dog?', function () {
  console.log('text to speech complete');
}, 500);
