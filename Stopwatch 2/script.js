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
	span: {},
	moving: 0,
}
// clock.hands.hundredth = document.querySelector('.hundredth');  JavaScriptas
clock.hands.hundredth = $('.hundredth');  //                      JQuery
// clock.hands.seconds = document.querySelector('.seconds');      JavaScriptas
clock.hands.seconds = $('.seconds');  //                          JQuery
// clock.hands.minutes = document.querySelector('.minutes');      JavaScriptas
clock.hands.minutes = $('.minutes');  //                          JQuery


clock.span.hundredth = $('#hundredth_span');
clock.span.seconds = $('#seconds_span');
clock.span.minutes = $('#minutes_span');