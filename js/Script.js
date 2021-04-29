// main script.
let User = function(name, password) {
    this.name = name;
    this.password = password;
    this.toString = function() {
        return `name : ${this.name}, password: ${this.password}`;
    }
}

let userObj = new User("evram", "1234");
console.log(userObj.toString());


/*Team-member*/
function logger() {
    console.log('My name is Ahmed Sayed');
}

logger();


//ahmed kamel

console.log('hello world');