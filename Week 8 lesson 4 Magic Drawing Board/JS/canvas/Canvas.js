function Canvas(pen) {
	this.canvas = document.querySelector('#canvas');
	this.context = this.canvas.getContext('2d');
	this.curent_location = null;
	this.is_drawing = false;
	this.pen = pen;

	this.canvas.addEventListener('mousedown', this.OnMouseDown.bind(this));
	this.canvas.addEventListener('mouseup', this.OnMouseUp.bind(this));
	this.canvas.addEventListener('mouseleave', this.OnMouseLeave.bind(this));
	this.canvas.addEventListener('mousemove', this.OnMouseMove.bind(this));
}

Canvas.prototype.OnMouseMove = function(event) {
	var location = this.getLocation(event);

	if (this.is_drawing) {
		this.pen.config(this.context);
		this.context.beginPath();
		this.context.moveTo(this.curent_location.x, this.curent_location.y);
		this.context.lineTo(location.x, location.y);
		this.context.closePath();
		this.context.stroke();
		this.curent_location = location;
	}
}
Canvas.prototype.OnMouseLeave = function(event) {
	this.is_drawing = false;
}

Canvas.prototype.OnMouseUp = function(event) {
	this.is_drawing = false;
}

Canvas.prototype.OnMouseDown = function(event) {
	this.is_drawing = true;
	this.curent_location = this.getLocation(event);
}

Canvas.prototype.getLocation = function(event) {
	var rectangle = this.canvas.getBoundingClientRect();
	var location = {
		x: event.clientX - rectangle.left,
		y: event.clientY - rectangle.top
	}
	return location;
}