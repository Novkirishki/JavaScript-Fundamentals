var sequence = [3, 5, 8, 14, 1, 0, -9, 42, 100, -33];
var min = sequence[0];
var max = sequence[0];

for (var i of sequence) {
	if (i < min) {
		min = i;
	};

	if (i > max) {
		max = i;
	};
};

console.log('min = ' + min);
console.log('max = ' + max);