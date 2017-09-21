/*************************************
	Utilities
**************************************/
var START = $('#start');
var RESET = $('#reset');

function timeToDegree(time, max) {
	return Math.round(time*360/max);
}
function chrono() {
	clock.time.hundredth += 1;

	if((clock.time.hundredth % 100) == 0) {
		clock.time.seconds++;

	 if((clock.time.seconds % 60) == 0) {
		clock.time.minutes ++;
		} 
	}
	drawClock();
}
function start() {
	START.html('Pause');
	clock.moving = setInterval(chrono, 10);
}
function stop() {
	START.html('Start');
	clearInterval(clock.moving);
	clock.moving = 0;
}
function toggleClock() {
	if(clock.moving == 0) {
		start();
	} else {
		stop();
	} 
}
function reset() {
	clock.time.hundredth = 0;
	clock.time.seconds = 0;
	clock.time.minutes = 0;
	drawClock();
}
START.click(toggleClock);
RESET.click(reset);

function drawClock() {
	clock.hands.hundredth.css('transform', 'rotate(' + timeToDegree(clock.time.hundredth, 100)+'deg)');
	clock.hands.seconds.css('transform', 'rotate(' + timeToDegree(clock.time.seconds, 60)+'deg)');
	clock.hands.minutes.css('transform', 'rotate(' + timeToDegree(clock.time.minutes, 60)+'deg)');

	clock.span.minutes.html(clock.time.minutes % 60);
	clock.span.seconds.html(clock.time.seconds % 60);
	clock.span.hundredth.html(clock.time.hundredth % 100);
}