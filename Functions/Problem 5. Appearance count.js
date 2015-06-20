/*Write a function that counts how many times given number appears in given array.
Write a test function to check if the function is working correctly.*/

function counter(number, array) {
	var i,
		count = 0;
	for(i in array){
		if(array[i] === number){
			++count;
		};
	};

	return count;
};

function test(number, array, expectedOutput) {
	if(counter(number, array) === expectedOutput){
		return true;
	};
	return false;
};

var number = 10,
	array = [1,2,3,10,10,14,54,10,54,10,30,7],
	expectedOutput = 4;

console.log(test(number, array, expectedOutput));