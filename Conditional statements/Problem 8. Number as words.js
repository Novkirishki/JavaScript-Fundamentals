var number = 912;
var words = '';
debugger;

if (number >= 100) {
    switch (number/100 | 0) {
        case 1:
            words += "one hundred";
            break;
        case 2:
            words += "two hundred";
            break;
        case 3:
            words += "three hundred";
            break;
        case 4:
            words += "four hundred";
            break;
        case 5:
            words += "five hundred";
            break;
        case 6:
            words += "six hundred";
            break;
        case 7:
            words += "seven hundred";
            break;
        case 8:
            words += "eight hundred";
            break;
        case 9:
            words += "nine hundred";
            break;
    };
};

if (words != "" && number % 100 != 0) {
    words += " and ";
};

if (number % 100 > 9 && number % 100 < 20) {
	switch (number % 100) {
	    case 10:
	        words += "ten";
	        break;
	    case 11:
	        words += "eleven";
	        break;
	    case 12:
	        words += "twelve";
	        break;
	    case 13:
	        words += "thirteen";
	        break;
	    case 14:
	        words += "fourteen";
	        break;
	    case 15:
	        words += "fifteen";
	        break;
	    case 16:
	        words += "sixteen";
	        break;
	    case 17:
	        words += "seventeen";
	        break;
	    case 18:
	        words += "eighteen";
	        break;
	    case 19:
	        words += "nineteen";
	        break;
	};
}
else {
	switch ((number % 100 )/ 10 | 0) {
	    case 2:
	        words += "twenty ";
	        break;
	    case 3:
	        words += "thirty ";
	        break;
	    case 4:
	        words += "fourty ";
	        break;
	    case 5:
	        words += "fifty ";
	        break;
	    case 6:
	        words += "sixty ";
	        break;
	    case 7:
	        words += "seventy ";
	        break;
	    case 8:
	        words += "eighty ";
	        break;
	    case 9:
	        words += "ninety ";
	        break;
	};

    switch (number % 10) {
        case 1:
            words += "one";
            break;
        case 2:
            words += "two";
            break;
        case 3:
            words += "three";
            break;
        case 4:
            words += "four";
            break;
        case 5:
            words += "five";
            break;
        case 6:
            words += "six";
            break;
        case 7:
            words += "seven";
            break;
        case 8:
            words += "eight";
            break;
        case 9:
            words += "nine";
            break;
    };
};

if (number == 0) {
    console.log("zero");
}
else {
    console.log(words);
};
