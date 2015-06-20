/*Write a JavaScript function that reverses a string and returns it.*/

function rev(string) {
	return string.split('').reverse().join('');
} 

console.log(rev('pesho i gosho'));