/*Write a function that formats a string using placeholders.
The function should work with up to 30 placeholders and all types.*/

function stringFormat() {
	var string = arguments[0];
	for (var i = 0, length1 = arguments.length - 1; i < length1; i++) {
		var stringToReplace = '{' + i + '}';
		while(string.indexOf(stringToReplace) > -1) {
			string = string.replace(stringToReplace, arguments[i + 1]);
		}
	};
	return string;
};

var frmt = '{0}, {1}, {0} text {2}';
var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
//str = '1, Pesho, 1 text Gosho'
console.log(str);

