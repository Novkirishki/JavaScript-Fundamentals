/*Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find*/

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

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

function findYoungestMale(people) {
	printFullName(people.find(youngest));
};

function printFullName(person) {
	console.log(person.firstname + ' ' + person.lastname);
};

function youngest(person, index, people) {
	var minAge = Math.min.apply(Math, people.filter(takeMales).map(takeAge));
	return (minAge === person.age && (!person.gender));
};

function takeAge(person) {
	return person.age;
};

function takeMales(person) {
	return !person.gender;
};

findYoungestMale(people);