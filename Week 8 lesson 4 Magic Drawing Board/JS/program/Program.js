function Program() {
	this.pen = new Pen();
	this.canvas = new Canvas(this.pen);
	this.colorPicker = new ColorPicker(this.pen);
	this.start();
}

Program.prototype.start = function() {
	$('.pen-color').on('click', this.onColorSelect.bind(this));
	$('.pen-thickness').on('click', this.onThicknessSelect.bind(this));
	$('.trash').on('click', this.onTrashSelect.bind(this));	
	$('.pcker').on('click', this.onPicker.bind(this));
}

Program.prototype.onColorSelect = function(event) {
	var color = $(event.target).data('color');
	this.pen.color = color;
}

Program.prototype.onThicknessSelect = function(event) {
	var size = $(event.target).data('thickness');
	this.pen.size = size;
}

Program.prototype.onTrashSelect = function(event) {
	this.canvas.context.clearRect(0, 0, 900, 500);
}
Program.prototype.onPicker = function(event) {
	$('#picker').toggle();
}