var number = 9999799;
var expression = (Math.abs(number) / 100 | 0) % 10 === 7;
console.log(expression);