function Person(name, gender) {

	this.name = name;  // this.name = name; gali buti ir taip this.name = vardas;
	this.gender = gender;
}
Person.prototype.print = function() {
	console.log('Mano vardas yra ' + this.name + ' ir as esu ' + this.gender);
}

function Triangle(a, b) {
	this.a = a;
	this.b = b;
	this.c = this.getC();
	this.perimeter = this.getPerimeter();
}
//Setters'iai
Triangle.prototype.setA = function(a) {
	this.a = a;
	this.c = this.getC();
	this.perimeter = this.getPerimeter();
}
Triangle.prototype.setB = function(b) {
	this.b = b;
	this.c = this.getC();
	this.perimeter = this.getPerimeter();
}
Triangle.prototype.setC = function(c) {
	this.c = c;
	this.perimeter = this.getPerimeter();
}

//Getters'iai
 Triangle.prototype.getC = function() {
 	var c = Math.sqrt(this.a*this.a + this.b*this.b); 
 	return c;
 }

Triangle.prototype.getPerimeter = function() {
	var perimeter = this.a + this.b + this.c;
	return perimeter;
}

function Square(a) {
	this.a = a;
	this.area = this.getArea();
	this.perimeter = this.getPerimeter();
	this.diagonals = this.getDiagonals();
}
Square.prototype.getArea = function() {
	var area = this.a * this.a;
	return area;
}
Square.prototype.getPerimeter = function() {
	var perimeter = this.a + this.a + this.a + this.a;
	return perimeter;
}
Square.prototype.getDiagonals = function() {
	var diagonals = Math.sqrt(this.a * this.a + this.a *this.a);
	return diagonals;
}
Square.prototype.setA = function(a) {
	this.a = a;
	this.area = this.getArea();
	this.perimeter = this.getPerimeter();
	this.diagonals = this.getDiagonals();

}

function Circle(r) {
	this.r = r;
	this.area = this.getArea();
	this.diameter = this.getDiameter();
	this.length = this.getLength();
}

Circle.prototype.getArea = function() {
	var area = 3.14*(this.r * this.r);  
	return area;
}
Circle.prototype.getDiameter = function() {
	var diameter = this.r * 2;
	return diameter;
}
Circle.prototype.getLength = function() {
	var length = 2*3.14*this.r;
	return length;
}
Circle.prototype.setR = function(r) {
	this.r = r;
	this.area = this.getArea();
	this.diameter = this.getDiameter();
	this.length = this.getLength();
}

function Rectangle(a, b) {
	this.a = a;
	this.b = b;
	this.calculate();
}

Rectangle.prototype.calculate = function() {
	this.area = this.getArea();
	this.perimeter = this.getPerimeter();
	this.c = this.getDiagonals();
}
Rectangle.prototype.getArea = function() {
	var area = this.a * this.b;
	return area;
}
Rectangle.prototype.getPerimeter = function() {
	var perimeter = this.a *2 + this.b*2;
	return perimeter;
}
Rectangle.prototype.getDiagonals = function() {
	var c = Math.sqrt(this.a * this.a + this.b * this.b);
	return c;
}
Rectangle.prototype.setA = function(a) {
    this.a = a;
    this.calculate();
}
Rectangle.prototype.setB = function(b) {
    this.b = b;
    this.calculate();
}
