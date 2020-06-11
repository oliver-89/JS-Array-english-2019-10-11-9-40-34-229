// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array)

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var a2 = a.map(e => 2 * e);
console.log(a2)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

console.log(colors.toString().replace(/,/g, " "));
console.log(colors.toString().replace(/,/g, "+"));
console.log(colors.toString())

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(a, b) {
	return b - a;
}
var a2 = a.sort(compare);
console.log(a2)

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
	if(!arr.length) return;
	if(arr.length === 1) return arr[0];
	var res = {};
	
	for(var i = 0, l = arr.length; i < l; i++) {
		if(!res[arr[i]]) {
			res[arr[i]] = 1;
		} else {
			res[arr[i]]++;
		}
	}
	
	var keys = Object.keys(res);
	var maxNum = 0,
		maxEle;
	for(var i = 0, l = keys.length; i < l; i++) {
		if(res[keys[i]] > maxNum) {
			maxEle = keys[i];
		}
	}
	return maxEle;
}

console.log(findMost(a))