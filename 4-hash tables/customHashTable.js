class HashTable {
	constructor(size) {
		this.data = new Array(size);
		// [['grapes', 10000]]
	}

	_hash(key) {
		// underscore denotes this is a private property
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash; //returns hash code for key
	} // O(1)

	set(key, value) {
		let address = this._hash(key);
		console.log('address: ', address);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		console.log(this.data[address]);
		this.data[address].push([key, value]);
		console.log(this.data);
		return this.data;
	} // O(1)

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					console.log(currentBucket[i][1]);
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	} // O(1)

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50); // we have 50 shelves of memory
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 20);
myHashTable.get('grapes');
myHashTable.get('apples');

console.log(myHashTable.keys());
