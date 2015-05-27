//Трябва да се отвори през браузъра за да работи (problem 4.html)

var min,
	max;

//document	
for(var i in document) {
	min = i;
	max = i;
	break;
}

for (var i in document) {
	if (i < min) {
		min = i;
	};

	if (i > max) {
		max = i;
	};
};

console.log('Doccument');
console.log('min - ' + min);
console.log('max - ' + max);

//window
for(var i in window) {
	min = i;
	max = i;
	break;
}

for (var i in window) {
	if (i < min) {
		min = i;
	};

	if (i > max) {
		max = i;
	};
};

console.log('Window');
console.log('min - ' + min);
console.log('max - ' + max);

//navigator
for(var i in navigator) {
	min = i;
	max = i;
	break;
}

for (var i in navigator) {
	if (i < min) {
		min = i;
	};

	if (i > max) {
		max = i;
	};
};

console.log('Navigator');
console.log('min - ' + min);
console.log('max - ' + max);