/*Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
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

function groupByFirstLetter(people) {
	var grouped = people.reduce(group,{});
	console.log(grouped);
};

function group(arr, person) {
	var key = person.firstname.charAt(0);
	if(arr[key]){
		arr[key].push(person);
	}else{
		arr[key] = [person];
	};
	return arr;
};

groupByFirstLetter(people);
