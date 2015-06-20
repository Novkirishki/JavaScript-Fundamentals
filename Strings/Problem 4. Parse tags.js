/*You are given a text. Write a function that changes the text in all regions:

<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing(random)*/

function parser(text) {
	var result = '',
		inMixcase = false,
		inLower = false,
		inUpper = false;
	for(var i = 0, length1 = text.length; i < length1; i++){
		if(text[i] == '<'){
			switch(text.substring(i+1, i+8)){
				case 'mixcase':
					inMixcase = true;
					inLower = false;
					inUpper = false;
					i+=8;
					break;
				case 'lowcase':
					inMixcase = false;
					inLower = true;
					inUpper = false;
					i+=8;
					break;
				case 'upcase>':
					inMixcase = false;
					inLower = false;
					inUpper = true;
					i+=7;
					break;
				case '/upcase':
					inUpper = false;
					i+=8;
					break;
				case '/mixcas':
					inMixcase = false;
					i+=9;
					break;
				case '/lowcas':
					inLower = false;
					i+=9;
					break;
				default:
					break;
			}
		}else{
			if(inLower){
				result += text[i].toLowerCase();
			}else if (inUpper){
				result += text[i].toUpperCase();
			} else if (inMixcase) {
				if(Math.round(Math.random())){
					result += text[i].toLowerCase();
				}else{
					result += text[i].toUpperCase();
				}
			} else {
				result += text[i];
			}
		}
	}
	return result;
}

var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>any<upcase>th</upcase>ing</lowcase> else.';

console.log(parser(text));