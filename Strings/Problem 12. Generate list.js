/*Write a function that creates a HTML <ul> using a template for every HTML <li>.
The source of the list should be an array of elements.
Replace all placeholders marked with –{…}– with the value of the corresponding property of the object*/

function stringFormat() {
	var string = arguments[0];
	var object = arguments[1];
	for(var property in object){
		var stringToReplace = '-{' + property + '}-';
		while(string.indexOf(stringToReplace) > -1) {
			string = string.replace(stringToReplace, object[property]);
		}
	}
	return string;
};

function generateList(array, template) {
	var ul = '<ul>\n',
		li = '';
	for (var i = 0, length2 = array.length; i < length2; i++) {
		li += '<li>';
		li += stringFormat(template, array[i]);
		li += '</li>\n';
		ul += li;
		li = '';
	};
	return ul + '</ul>';
}

var people = [
	{name: 'Peter', age: 14},
	{name: 'Ivan', age: 19},
	{name: 'Antonio', age: 20}
];
var template = '<strong>-{name}-</strong> <span>-{age}-</span>';
var peopleList = generateList(people, template);
console.log(peopleList);