/*Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".*/

function extractPalindromes(text) {
	var result = [];
	var words = text.split(/(?:,| )+/);
	for(var i in words){
		if(checkPalindrom(words[i])){
			result.push(words[i]);
		}
	}
	return result;
}

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

var text = "ABBA is the greatest band of all time";
console.log(extractPalindromes(text));