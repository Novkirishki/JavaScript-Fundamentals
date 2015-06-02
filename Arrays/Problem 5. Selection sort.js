/*Sorting an array means to arrange its elements in increasing order.
Write a script to sort an array.
Use the selection sort algorithm: Find the smallest element,
move it at the first position, find the smallest from the rest, move it at the second position, etc.*/

var array = [3, 14, 7, 21, 0, 4, -6, 5, 5];
var min;
var index = 0;

for (var i = 0; i < array.length; i++) {
	min = array[i];
	for(var j = i; j < array.length; j++) {
		if (array[j] <= min) {
			min = array[j];
			index = j;
		};
	};
	array[index] = array[i];
	array[i] = min;
};

for(var i in array) {
	console.log(array[i]);
}