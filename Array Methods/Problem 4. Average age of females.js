/*Write a function that calculates the average age of all females, extracted from an array of persons
Use Array#filter
Use only array methods and no regular loops (for, while)*/

function Person(fname, lname, age, gender) {
	this.firstname = fname;
	this.lastname = lname;
	this.age = age;
	this.gender = gender;
};

var people = [
	new Person('Ivan', 'Petrov', 23, false),
	new Person('Aleks', 'Iliev', 21, false),
	new Person('Borqna', 'Misheva', 43, true),
	new Person('Svetlin', 'Kostov', 53, false),
	new Person('Hristo', 'Todorov', 76, false),
	new Person('Milka', 'Shokoladova', 14, true),
	new Person('Mitio', 'Krika', 37, false),
	new Person('Niki', 'Qvorov', 19, false),
	new Person('Milica', 'Kostadinova', 23, true),
	new Person('Ralica', 'Georgieva', 28, true),
];

function averageFemaleAge(people) {
	var ages = people.filter(female).map(takeAge);
	var count = ages.length;
	var ageSum = ages.reduce(sum);
	return ageSum/count;
};

function female(person) {
	return person.gender;
};

function takeAge(person) {
	return person.age;
};

function sum(prev, cur) {
	return prev + cur;
};

console.log('The average age of females is: ' + averageFemaleAge(people));