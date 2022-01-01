/* 
lookup - O(1)
append - O(1)  (* sometimes O(n) also)
insert - O(n)
delete - O(n) (using splice)
*/

const strings = ['a','b','c','d'];
// 4 * 4 = 16 bytes of storage

strings[2]; // O(1)

// push
strings.push('e');  //O(1)  (once in a while can be O(n) also.)

//pop
strings.pop(); //remove last item ----- O(1)

// unshift
//add to the beginning
strings.unshift('x');

// strings = ['a', 'b', 'c', 'd']
         		// 0		 1    2    3
// ['x', 'a', 'b', 'c', 'd']
			 // 0		 1    2    3  // loop through every item for indexing ---- O(n)

// splice -- add to specific location or deleting
strings.splice(2, 0, 'test'); // ['x', 'a', 'test', 'b', 'c', 'd'']  ----- O(n/2) ~ O(n)

console.log(strings);

/*
append can be O(n) because in case of dynamic arrays, memory will be allocated to different location and exiting size of array which results in operation of O(n) time complexity.
usually doubles the space.
*/


// ------------------------------------------------------------

 
/* 
----------Primitive types---------

 Primitive types are defined by the programming language like,
1, true, null, undefined, false, any string value

eg. var number = 1;    1 is primitive type or immutable


 --------Reference types or Non primitive types---------
 
 Reference types are not defined by prog lang.
Objects are called the reference types in javascript.
e.g. var obj1 = { value: 10};

*/

[] === [] // false due to different reference types  as Arrays are also Objects in javascript
 
var obj1 = { value: 10};
var obj2 = obj1;         // we are just storing the reference of obj1 in obj2.
var obj3 = {value: 10};

obj1 === obj2 // true
obj1 === obj3 // false

obj1.value = 15;
obj2.value; // 15  (references the same object)