//Write a script that finds the most frequent number in an array.
var array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

array.sort(function(a,b){
	return a - b;
});

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

console.log(array[indexOfMaxSequence] + ' (' + MaxSequence + ' times)');