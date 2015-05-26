var a = 5;
var b = 2;

if (a > b) {
	var buf = b;
	b = a;
	a = buf;
};

console.log(a + " " + b);