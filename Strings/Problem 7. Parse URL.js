/*Write a script that parses an URL address given in the format: [protocol]:
//[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
Return the elements in a JSON object.*/

function urlExtract(url) {
	var string = '',
		result = {};
	for(var i = 0, length1 = url.length; i < length1; i++){
		if(url[i] == ':'){
			result.protocol = string;
			string = '';
			i += 2;
		}else if (i == url.indexOf('/', 8)){
			result.server = string;
			string = '';
		} else {
			string += url[i];
		}
	}
	result.resource = string;
	return result;
}

var url = 'http://telerikacademy.com/Courses/Courses/Details/239';
console.log(urlExtract(url));