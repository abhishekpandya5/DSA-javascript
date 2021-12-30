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

// Optional classes in JS
 
// Reference types
[] === [] // false due to different reference

var obj1 = { value: 10};
var obj2 = obj1.value;
var obj3 = {value: 10};

obj1 === obj2 // true
obj1 === obj3 // false

obj1.value = 15;
obj2.value; // 15

// Context vs scope - wip



