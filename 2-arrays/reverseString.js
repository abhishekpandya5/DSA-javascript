console.log('======reverseString.js=======')
const str = 'Hi My name is Abhishek';
// kehsihbA si eman yM iH

function reverse1(str) {
	const strArray = str.split('');
  let revStr = '';
	for (let i = strArray.length - 1; i >= 0; i--) { // O(n)
		revStr += strArray[i];
	}
  console.log(revStr);
}
reverse1(str);

function reverse2(str) {
	console.log(str.split('').reverse().join(''));
}
reverse2(str);

const reverse3 = str => {
	console.log([...str].reverse().join(''));
}
reverse3(str);

function reverse4(str) {
  if(!str || typeof str != 'string' || str.length < 2 ) return str;

  const reversed = [];

  for(let i = str.length-1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  console.log(reversed.join(''));
}

reverse4(str);










/* slice can be used for array copying */