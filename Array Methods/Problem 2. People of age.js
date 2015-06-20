/*Write a function that checks if an array of person contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)*/

function greaterThan18(person) {
	return person.age >= 18;
};

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

console.log('Are everybody older than 18 - ' + people.every(greaterThan18));