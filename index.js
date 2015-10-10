#! /usr/bin/env node

'use strict'

var spawn = require('child_process').spawn,
    child

var say = exports
say.speaker = 'say'

exports.speak = function(voice, text, callback, speed) {
  var commands,
    pipedData

  if (arguments.length < 2) {
    console.log('invalid amount of arguments sent to speak()')
    return
  }

  if (!voice) {
    commands = [ text ]
  } else {
    commands = [ '-v', voice, text]
  }
  if (speed) {
    commands.push('-r', speed)
  }

  var childD = spawn(say.speaker, commands)

  childD.stdin.setEncoding('ascii')
  childD.stderr.setEncoding('ascii')

  childD.stderr.on('data', function(data){ console.log(data) })
  childD.stdout.on('data', function(data){ console.log(data) })


  childD.addListener('exit', function (code, signal) {
    if (code === null || signal !== null) {
      console.log('couldnt talk, had an error ' + '[code: '+ code + '] ' + '[signal: ' + signal + ']')
    }

    if (callback) {
      try {
        callback()
      } catch(err) {
        // noop
      }
    }
  })
}
