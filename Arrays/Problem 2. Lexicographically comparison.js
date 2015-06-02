//Write a script that compares two char arrays lexicographically (letter by letter).

var arr1 = ['a', 'b', 'c', 'd', 'e'];
var arr2 = ['a', 'b', 'c', 'd', 'f'];
var result = true;

if(arr1.length != arr2.length) {
	result = false;
}
else {
	for(var index in arr1) {
		if(arr1[index] != arr2[index]) {
			result = false;
			break;
		};
	};
};

console.log(result);