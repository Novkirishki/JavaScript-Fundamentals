//Write a script that finds the maximal increasing sequence in an array.

var array = [3, 2, 3, 4, 2, 2, 4];
var MaxSequence = 1;
var indexOfMaxSequence = 0;
var curSequence = 1;

for (var i = 1; i < array.length; i++) {
	if (array[i] - 1 === array[i-1]) {
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