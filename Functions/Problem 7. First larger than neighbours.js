/*Write a function that returns the index of the first element in 
array that is larger than its neighbours or -1, if there’s no such element.
Use the function from the previous exercise.*/

function neighboursCheck(position, array) {
	if(position === 0){
		if(array[0] > array[1]) {
			return true;
		};
		return false;
	}else if(position === array.length - 1){
		if(array[position] > array[position - 1]) {
			return true;
		};
		return false;
	} else {
		if(array[position] > array[position - 1] && array[position] > array[position + 1]){
			return true;
		};
		return false;
	}
};

function firstLargerThanNeighbours(array) {
	for(var i = 0, length = array.length; i < length; i++){
		if(neighboursCheck(i, array)){
			return i;
		};
	};
	return -1;
};

var array = [1,2,3,4,5,14,7,8,9,10];

console.log(firstLargerThanNeighbours(array));