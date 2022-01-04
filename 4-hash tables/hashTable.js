// Hash Tables are objects in javascript.
let user = {
  age: 20,
  hobby: "gardening",
  speak: function() {
    console.log("Hello");
  }
}

console.log(user.age); // O(1)
user.id = "12345anjahsj"; // O(1)
user.speak(); // O(1)

// insert, delete, lookup & search in hash tables have O(1).

// Objects can only store keys as strings
// Map in Js can store functions as keys.

// in ES6
const a = new Map();
const b = new Set();