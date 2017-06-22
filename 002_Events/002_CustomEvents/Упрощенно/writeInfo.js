const evt = require('events');

let MyEvent = function (){
    this.writeToFile = (text) => {
        this.on('write', () => {
            console.log(text);
        });
        this.emit('write');
    }
}

MyEvent.prototype = new evt.EventEmitter();

module.exports = MyEvent;