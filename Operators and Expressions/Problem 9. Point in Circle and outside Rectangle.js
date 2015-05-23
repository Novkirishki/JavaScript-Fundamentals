var x = 1;
var y = 2.5;
var expression = (Math.sqrt(Math.pow(x - 1, 2) + Math.pow(y - 1, 2)) < 3) && (y < -1 || y > 1 || x > 5 || x < -1);
console.log(expression);