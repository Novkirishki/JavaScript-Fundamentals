/*Write a JavaScript function to check if in a given expression the brackets are put correctly.*/

function checkBrackets(expr) {
	var counter = 0;
	for(var i = 0, length1 = expr.length; i < length1; i++) {
		if(expr[i] == '('){
			++counter;
		}else if (expr[i] == ')'){
			if (counter > 0) {
				--counter;
			} else {
				return false;
			}
		}
	}
	return counter == 0;
}

console.log(checkBrackets('((a+b)/5-d)'));
console.log(checkBrackets(')(a+b))'));
console.log(checkBrackets('(a+b) + 8*((a-b)'));
console.log(checkBrackets('(a-v)*((a-s) + b)'));