/*Write a function that finds all the occurrences of word in a text.
The search can be case sensitive or case insensitive.
Use function overloading.*/

function occurrences(text, word, isCaseSensitive) {
	var caseCheck,
		words,
		count = 0;
	if(text == null || word == null){
		return 0;
	} 
	else if (isCaseSensitive != true && isCaseSensitive != false){
		caseCheck = true;
	} 
	else {
		caseCheck = isCaseSensitive;
	};

	if(caseCheck == true){
		words = text.split(/(?:,| )+/);
	} 
	else {
		words = text.toLowerCase().split(/(?:,| )+/);
		word = word.toLowerCase();
	};

	for(var i = 0, length1 = words.length; i < length1; i++){
		if(words[i] === word){
			++count;
		};
	};

	return count;
};

console.log(occurrences("Banichka sus Sirene, boza, mekici sus sirene", "sirene", true));