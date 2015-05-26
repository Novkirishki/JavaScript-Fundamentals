var a = 2;
var b = -2;
var c = 0;
var result;

if (a === 0 || b === 0 || c === 0) {
	result = 0;
}
else if (a > 0) {
	if (b > 0) {
		if (c > 0) {
			result = '+';
		} 
		else{
			result = '-';
		};
	} 
	else {
		if (c > 0) {
			result = '-';
		} 
		else{
			result = '+';
		};
	};
} 
else {
	if (b > 0) {
		if (c > 0) {
			result = '-';
		} 
		else{
			result = '+';
		};
	} 
	else {
		if (c > 0) {
			result = '+';
		} 
		else{
			result = '-';
		};
	};
};

console.log(result);