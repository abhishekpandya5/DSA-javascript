const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['d', 'y', 'z', 'a'];

function containsCommonItems(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) return true;
		}
	}
	return false;
}
let res = containsCommonItems(array1, array2);
console.log(res);
// Time complexity = O(a*b)
// Space complexity = O(1)

/* ----------------------------------------------------- */

// better approach with Time complexity - O(a+b)

function containsCommonItems2(arr1, arr2) {
	let map = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			map[arr1[i]] = true;
		}
	}

	console.log(map);

	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) return true;
	}
	return false;
}

let res2 = containsCommonItems2(array1, array2);
console.log(res2);

// if both arrays are large then it is better.
//space complexity = O(a) because we are creating an object in memory

/* ----------------------------------------------------- */
// JS soln

function containsCommonItems3(arr1, arr2) {
	return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItems3(array1, array2));

/* -------------------------------------------------------- */
// check pair of numbers whose sum is 8
// [1,2,3,9] sum=8 ----yes
// [1,2,4,4] sum=8 ----no

const arr = [1, 2, 4, 6],
	sum = 8;

function hasPairSum(arr, sum) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === sum) {
				return true;
			}
		}
	}
	return false;
}
console.log('hasPairSum: ', hasPairSum(arr, sum)); //O(n^2)

//better

function hasPairSum2(arr, sum) {
	const mySet = new Set();

	for (let i = 0; i < arr.length; i++) {
		if(mySet.has(arr[i])) {
			return true;
		}
		mySet.add(sum - arr[i]);
	}
	return false;
}
console.log('hasPairSum: ', hasPairSum2(arr, sum)); 
// Time complexity - O(n)
// Space complexity - O(1)


// const arr = [1, 2, 4, 4], [1,2,9,4] - 7 6 -1 4
// 	sum = 8; set = (7,6,4,4)

function a2(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr.includes(8 - arr[i])) {
			console.log('pairs:', arr[i], 8 - arr[i]);
			return;
		}
	}
	return false;
}
a2([1,2,3,4,5]);
