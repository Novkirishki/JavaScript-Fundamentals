/*Write functions for working with shapes in standard Planar coordinate system.
Points are represented by coordinates P(X, Y)
Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
Calculate the distance between two points.
Check if three segment lines can form a triangle.*/

function Point(x, y) {
	this.x = x;
	this.y = y; 
};

function Line(A, B) {
	this.a = A;
	this.b = B;
	this.length = function() {
		return Math.sqrt(Math.pow(this.a.x - this.b.x, 2) + Math.pow(this.a.y - this.b.y, 2));
	};
};

function distance(A, B) {
	return Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2));
};

function canMakeTriangle(line1, line2, line3) {
	var a = line1.length(),
		b = line2.length(),
		c = line3.length();

	if((a + b < c) || (b + c < a) || (a + c < b)) {
		return false;
	};
	return true;
};

var a = new Point(0,0);
var b = new Point(2,2);
var c = new Point(0,2);

console.log('The distance between A(0,0) and B(2,2) is ' + distance(a,b));

var line1 = new Line(a,b);
var line2 = new Line(a,c);
var line3 = new Line(b,c);

console.log(canMakeTriangle(line1, line2, line3));