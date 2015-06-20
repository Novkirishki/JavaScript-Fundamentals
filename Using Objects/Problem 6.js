/*Write a function that groups an array of people by age, first or last name.
The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
Use function overloading (i.e. just one function)*/

var group = function(array, key) {
	var grouped = {};
	if(key === 'age'){
		for(var i in array){
			if(!grouped[array[i].age]){
				grouped[array[i].age] = [array[i]];
			}else{
				grouped[array[i].age].push(array[i]); 
			};
		};
	} else if (key === 'firstname'){
		for(var i in array){
			if(!grouped[array[i].firstname]){
				grouped[array[i].firstname] = [array[i]];
			}else{
				grouped[array[i].firstname].push(array[i]); 
			};
		};
	} else if (key === 'lastname'){
		for(var i in array){
			if(!grouped[array[i].lastname]){
				grouped[array[i].lastname] = [array[i]];
			}else{
				grouped[array[i].lastname].push(array[i]); 
			};
		};
	};
	return grouped;
}

//test
var people = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Hristo', lastname: 'Stoichkov', age: 49},
  { firstname : 'John', lastname: 'Snow', age: 22},
  { firstname : 'John', lastname: 'Beagel', age: 32},
  { firstname : 'Peter', lastname: 'Snow', age: 49},
  ];

var groupedByAge = group(people, 'age');

console.log(groupedByAge);