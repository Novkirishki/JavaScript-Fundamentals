var a = 2;
var b = 5;
var c = -3;
var D = (b*b - 4*a*c);
var x1, x2;

if (D < 0) {
	console.log('no real roots');
} 
else if (D == 0) {
	x1=x2=(-b / (2 * a));
	console.log('x1=x2=' + x1);
}
else {
	x1 = (-b + Math.sqrt(D)) / (2 * a);
	x2 = (-b - Math.sqrt(D)) / (2 * a);
	console.log('x1=' + x1 + " x2=" + x2);
};
