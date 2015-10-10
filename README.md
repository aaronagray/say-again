### Installing say-again

```bash
npm install say-again
```

# Usage

```javascript
var say = require('say-again');

// no callback, fire and forget
say.speak('Alex', 'whats up, dog?');

// use default voice in System Preferences
say.speak(null, 'Hello!');

// no callback, fire and forget
say.speak('Cellos', 'whats up, dog?');

// output some text to the console as the callback
say.speak('Good News', 'whats up, dog?', function () {
     console.log('text to speech complete');
});


// try using translate.js with say.js
var translate = require('translate');

translate.text('Yo quero tacos por favor', function(result){
     say.speak('Alex', result);
});
```

## Voices
### girls
- Agnes
- Kathy
- Princess
- Vicki
- Victoria

### guys
- Albert
- Alex
- Bruce
- Fred
- Junior
- Ralph

### others
- Bad News
- Bahh
- Bells
- Boing
- Bubbles
- Cellos
- Deranged
- Good News
- Hysterical
- Pipe Organ
- Trinoids
- Whisper
- Zarvox

### Requirements

Mac OS
