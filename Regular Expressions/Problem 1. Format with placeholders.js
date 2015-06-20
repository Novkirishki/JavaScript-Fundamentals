/*Write a function that formats a string. The function should have placeholders, as shown in the example
Add the function to the String.prototype*/

String.prototype.format = function(options) {
	var string = this.toString();
	for(var prop in options){
		var stringToReplace = '#{' + prop + '}';
		string = string.replace(new RegExp(stringToReplace, 'g'), options[prop]);
	}
	return string;
}

var options = {name: 'John', age: 13};
console.log('My name is #{name} and I am #{age}-years-old'.format(options));