/*Write a function that checks if the element at given position in 
given array of integers is bigger than its two neighbours 
(when such exist).*/

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

var position = 8,
	array = [1,2,3,4,5,6,7,8,9];

console.log(neighboursCheck(position, array));