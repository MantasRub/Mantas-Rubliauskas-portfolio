function Pen() {
	this.color = 'black';
	this.size = 1;
}

Pen.prototype.config = function(context) {
	context.strokeStyle = this.color;
	context.lineWidth = this.size;
}