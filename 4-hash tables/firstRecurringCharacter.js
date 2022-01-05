/* 
array = [2,5,1,2,3,5,1,2,];
it should return 2
*/

// using Set
function firstRecurringCharacter(arr) {
	let set = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (!set.has(arr[i])) {
			set.add(arr[i]);
		} else {
			return arr[i];
		}
	}
	return undefined;
} //O(n)

// using object
function firstRecurringCharacter1(arr) {
	let map = {}
	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]] !== undefined) {
			return arr[i];
		} else {
      map[arr[i]] = i
    }
	}
	return undefined;
}


console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2]));
console.log(firstRecurringCharacter([2, 5, 4, 1]));
console.log(firstRecurringCharacter([2, 5, 4, 3, 1, 3, 4]));
console.log(firstRecurringCharacter([]));
console.log("firstRecurringCharacter1: ", firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2]));
