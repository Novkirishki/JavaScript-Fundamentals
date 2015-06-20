/*Write a function that replaces non breaking white-spaces in a text with &nbsp;*/

function nbspReplace(text) {
	return text.replace(/ /g, '&nbsp;');	
}

var text = 'Pesho otiva do magazina.';
console.log(nbspReplace(text));