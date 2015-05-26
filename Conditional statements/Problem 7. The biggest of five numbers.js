var a = 5;
var b = 50;
var c = 12;
var d = 7;
var e = 48;

if (a >= b && a >= c && a >= d && a >= e) {
	console.log(a);
} 
else {
	if (b >= c && b >= d && b >= e) {
		console.log(b);
	} 
	else {
		if (c >= d && c >= e) {
			console.log(c);
		} 
		else {
			if (d >= e) {
				console.log(d);
			} 
			else {
				console.log(e);
			};
		};
	};
};