var number = 51;
var expression = (number % 2 != 0 || number == 2) && (number % 3 != 0 || number == 3) && (number % 5 != 0 || number == 5) && (number % 7 != 0 || number == 7) && (number != 1);
console.log(expression);