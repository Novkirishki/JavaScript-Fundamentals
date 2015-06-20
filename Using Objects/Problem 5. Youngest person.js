/*Write a function that finds the youngest person in a given array of people and prints his/hers full name
Each person has properties firstname, lastname and age.*/

var youngest = function(people) {
	var minAge = 120,
		index = 0;
	for(var i in people){
		if(people[i].age < minAge){
			minAge = people[i].age;
			index = i;
		};
	};
	return people[index].firstname + ' ' + people[index].lastname;
};

//test
var people = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Hristo', lastname: 'Stoichkov', age: 49},
  { firstname : 'John', lastname: 'Snow', age: 22},
  ];

console.log(youngest(people));