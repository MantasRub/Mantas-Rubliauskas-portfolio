// Date
var br;
br = '<br>'

var today = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[today.getDay()];

document.write('Today is: ' + n + '.' + br)

// Time

var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

document.write('Current time is : ' + hours + ':' + minutes + ':' + seconds + br)


//Celcijai i farengeitus

var farengeit;
var celcijus = prompt('Iveskite celcijus.')
celcijus = parseInt(celcijus);
farengeit = celcijus*9/5+32

document.write('Celsius: ' + celcijus + 'C' + ' to ' + 'Farengeit: ' + farengeit + 'F.')