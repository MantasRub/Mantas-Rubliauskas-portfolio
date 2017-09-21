/*************************************
	Utilities
**************************************/
// var START = document.getElementById('start'); taip rasosi su JavaScriptu
var START = $('#start'); // Taip su                             JQuery 
// var RESET = document.getElementById('reset');                JavaScriptas
var RESET = $('#reset'); //                                     JQuery




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
// clock.hands.hundredth.style.transform = 'rotate('+timeToDegree(clock.time.hundredth, 100)+'deg)';   JavaScriptas
clock.hands.hundredth.css('transform', 'rotate(' + timeToDegree(clock.time.hundredth, 100)+'deg)'); //    JQuery
// clock.hands.seconds.style.transform = 'rotate('+timeToDegree(clock.time.seconds, 60)+'deg)';        JavaScriptas
clock.hands.seconds.css('transform', 'rotate(' + timeToDegree(clock.time.seconds, 60)+'deg)');  //        JQuery
// clock.hands.minutes.style.transform = 'rotate('+timeToDegree(clock.time.minutes, 60)+'deg)';        JavaScriptas
clock.hands.minutes.css('transform', 'rotate(' + timeToDegree(clock.time.minutes, 60)+'deg)'); //         JQuery
}

function start() {
	// START.innerHTML = 'Pause'; JavaScriptas
	START.html('Pause'); //  JQuery
	clock.moving = setInterval(chrono, 10);
}
function stop() {
	// START.innerHTML = 'Start'; JavaScriptas
	START.html('Start'); //  JQuery
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

// clock.hands.hundredth.style.transform = 'rotate('+timeToDegree(clock.time.hundredth, 100)+'deg)';   JavaScriptas
clock.hands.hundredth.css('transform', 'rotate(' + timeToDegree(clock.time.hundredth, 100)+'deg)'); //    JQuery
// clock.hands.seconds.style.transform = 'rotate('+timeToDegree(clock.time.seconds, 60)+'deg)';        JavaScriptas
clock.hands.seconds.css('transform', 'rotate(' + timeToDegree(clock.time.seconds, 60)+'deg)');  //        JQuery
// clock.hands.minutes.style.transform = 'rotate('+timeToDegree(clock.time.minutes, 60)+'deg)';        JavaScriptas
clock.hands.minutes.css('transform', 'rotate(' + timeToDegree(clock.time.minutes, 60)+'deg)'); //         JQuery
}

// START.addEventListener('click', toggleClock);  JavaScriptas
START.click(toggleClock); //                      Jquery
// RESET.addEventListener('click', reset);        JavaScriptas
RESET.click(reset); //                            JQuery