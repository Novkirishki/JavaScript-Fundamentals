//Write a script that finds the maximal sequence of equal elements in an array.

var array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
var MaxSequence = 1;
var indexOfMaxSequence = 0;
var curSequence = 1;

for (var i = 1; i < array.length; i++) {
	if (array[i] === array[i-1]) {
		++curSequence;
	}
	else {
		if (curSequence > MaxSequence) {
			MaxSequence = curSequence;
			indexOfMaxSequence = i - MaxSequence;
		};		
		curSequence = 1;
	};
};

var result = array.slice(indexOfMaxSequence, indexOfMaxSequence + MaxSequence);
console.log(result.join(', '));