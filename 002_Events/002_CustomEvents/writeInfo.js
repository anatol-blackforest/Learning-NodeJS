const evt = require('events');

let MyEvent = function (){
    this.onWrite = null;
    self = this;
    this.writeToFile = function(text){
        self.on('write', this.onWrite)
        console.log('Data start writing!');
        console.log(text);
        self.emit('write');
    }
}

MyEvent.prototype = new evt.EventEmitter();

module.exports = MyEvent;