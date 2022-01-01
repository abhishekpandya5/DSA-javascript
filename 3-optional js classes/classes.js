/* 
 ---------Context vs scope ----------
 ref: https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/
  Scope is created when we use functions
*/

function test() {
  a = 2;
}
// Here a is not accesible.
// console.log(a); // Reference error: a is not defined.

// Context - tells where we are within the object
// console.log(this); // calling at global scope

// whats the env or object we are in is called context.
function testContext() {
// console.log("this: ", this); // window object
var a = 1;
function innerFunc() {
  var b=2;
  console.log("a: ", a);
}
// console.log("b: ",b);
}
testContext();



const obj4 = {
a: function() {
  console.log(this);
}
}

obj4.a(); // a: { f() }

// instantiation  
class Player {
constructor(name, type) {
  console.log('Player_this: ', this);  //here, "this" is Candidate {}
  this.name = name;
  this.type = type;
}
introduce() {
  console.log(`I am ${this.name} and a ${this.type}`);
}
}

class Candidate extends Player {
constructor(name, type) {
  super(name, type);  // to access parent variables
  console.log('Candidate_this: ', this); // here, "this" is Candidate {name: 'Abhishek', type: 'Cricketer'}
}
play() {
  console.log(`I am a ${this.type}`);
}
}

const candidate1 = new Candidate('Abhishek', 'Cricketer');
const candidate2 = new Candidate('Rahul', 'Footballer');

// Classical Inheritance
/* var Player = function(name, type) {
this.name = name;
this.type = type;
}

Player.prototype.introduce = function() {
console.log(`I am ${this.name} and a ${this.type}`);
}

var candidate1 = new Player('Abhishek', 'Cricketer');
var candidate2 = new Player('Rahul', 'Footballer');

candidate1.play = function() {
console.log(`I am a ${this.type}`);
}
candidate2.play = function() {
console.log(`I am a ${this.type}`);
} */