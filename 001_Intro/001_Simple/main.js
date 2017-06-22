function User(name){
    this.name = name;
    this.sayHello = () => {
        console.log('Hello ', this.name);
    };
}

var Jhon = new User('John');

Jhon.sayHello();