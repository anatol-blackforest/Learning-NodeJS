'use strict'

const file = require('./writeInfo.js');

let f = new file();

f.onWrite = function(){
    console.log('data was wrote!');
}

f.writeToFile('some text')