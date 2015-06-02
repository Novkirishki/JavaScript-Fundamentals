var arr = [1, 2, 3, 5, 7, 19, 21, 24, 38],
	numberToFind = 24,
	start = 0,
	end = arr.length - 1,
	index = (start + end) / 2 | 0;

while(arr[index] != numberToFind) {
	if(arr[index] < numberToFind) {
		start = index + 1;
	} 
	else {
		end = index - 1;
	};

	index = (start + end) / 2 | 0;
};

console.log("The index of " + numberToFind + " is " + index);


