/*Write a function that checks if a given object contains a given property.*/

var obj = {
	fname: 'Ivan',
	lname: 'Georgiev',
	age: 35,
	address: {
		city: 'Sofia',
		number: '1000'
	}
};

var hasProperty = function(obj, property){
	for(var prop in obj){
		if(prop === property){
			return true;
		};
	};
	return false;
};

console.log(hasProperty(obj, 'age'));