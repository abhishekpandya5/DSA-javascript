class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return this; // this returns the array
	}

	shiftItems(index) {  // O(n) linear time
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1]; //loop running upto length-1 due to this statement.
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('1');
newArray.push('2');
newArray.push('3');
newArray.push('4');
newArray.push('5');
// newArray.pop();
newArray.delete(2);
console.log(newArray);
