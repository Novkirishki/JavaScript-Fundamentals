/*Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach
Use only array methods and no regular loops (for, while)*/

function Person(fname, lname, age, gender) {
	this.firstname = fname;
	this.lastname = lname;
	this.age = age;
	this.gender = gender;
};

var people = [
	new Person('Ivan', 'Petrov', 13, false),
	new Person('Aleks', 'Iliev', 21, false),
	new Person('Borqna', 'Misheva', 43, true),
	new Person('Svetlin', 'Kostov', 53, false),
	new Person('Hristo', 'Todorov', 16, false),
	new Person('Milka', 'Shokoladova', 14, true),
	new Person('Mitio', 'Krika', 17, false),
	new Person('Niki', 'Qvorov', 19, false),
	new Person('Milica', 'Kostadinova', 23, true),
	new Person('Ralica', 'Georgieva', 28, true),
];

function underaged(people, age) {
	people.filter(under(age)).forEach(print);
};

function under(age) {
	return function (person) {
		return person.age < age;
	};
};

function print(person) {
	console.log(person);
};

underaged(people,18);