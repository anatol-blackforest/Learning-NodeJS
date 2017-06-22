const EventEmitter = require('events').EventEmitter;

let Pisda = new EventEmitter();

Pisda.on('lizat', (text) => {
    console.log(text);
});

Pisda.lizat = function (text) {
    this.emit('lizat', text);
};

module.exports = Pisda;