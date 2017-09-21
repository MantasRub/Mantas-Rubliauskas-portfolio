'use strict';

/*************************************
	Variables init
**************************************/
var clock = {
	hands:{},
	time: {
		hundredth: 0,
		seconds: 0,
		minutes: 0
	},
	moving: 0,
}
// clock.hands.hundredth = document.querySelector('.hundredth');  JavaScriptas
clock.hands.hundredth = $('.hundredth');  //                      JQuery
// clock.hands.seconds = document.querySelector('.seconds');      JavaScriptas
clock.hands.seconds = $('.seconds');  //                          JQuery
// clock.hands.minutes = document.querySelector('.minutes');      JavaScriptas
clock.hands.minutes = $('.minutes');  //                          JQuery
