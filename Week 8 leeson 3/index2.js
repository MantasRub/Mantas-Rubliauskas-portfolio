var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var is_drawing = false;
var current_location;
var points = [];
$(document).ready(function() {
	$('#play').click(function(e) {
		e.preventDefault();
		for (var i = 0; i < points.length; i++) {
			if(i == 0) {
				current_location = points[0];
			} else {
				draw(points[i]);
			}
		}
	})
})

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mousemove', onMouseMove);
// canvas.addEventListener('mouseleave', onMouseLeave);

function onMouseMove(event) {
	var location = getLocation(event);
	if (is_drawing) {
		console.log('X:' + location.x + ' Y:' + location.y);
		draw(location);
		
	}
	
}
function drawPoint(location) {
	context.beginPath();
	context.arc(location.x,location.y, 10, 0, 2 * Math.PI);
	context.stroke();

}

function draw(location) {
	context.beginPath();
		context.moveTo(current_location.x, current_location.y);
		context.lineTo(location.x, location.y);
		context.closePath();
		context.stroke();
		current_location = location;
}

function getLocation(event) {
	var rectangle = canvas.getBoundingClientRect();
	var location = {
		x: event.clientX - rectangle.left,
		y: event.clientY - rectangle.top
	};
	return location;
}
function onMouseLeave(event) {
	is_drawing = false;
}

function onMouseDown(event) {
	is_drawing = true;
	current_location = getLocation(event);
	points.push(current_location);
	drawPoint(current_location);
}

function onMouseUp(event) {
	is_drawing = false;
}