function reverse(number) {
	return Number(number.toString().split('').reverse().join(''));
};

var number = 123.45;
console.log(reverse(number));