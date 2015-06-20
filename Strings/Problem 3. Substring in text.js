/*Write a JavaScript function that finds how many times a substring is contained in a given text 
(perform case insensitive search).*/

function substringCount(substr, text) {
	var b = text.match(new RegExp(substr, 'g'));
	return b.length;
}

var substring = 'in';
var text = 'The text is as follows: We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';

console.log(substringCount(substring, text));