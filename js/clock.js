// alert('test');

/*
author: Riley Eyrich
date: 4/26/22
title: clock
*/

/*
FUNCTIONS TO DISPLAY CURRENT TIME ON CLOCK FACE
*/
window.onload = dispClock;

//defining variables
var dispMin  = document.getElementById('mins');
var dispHrs  = document.getElementById('hrs');
var dispAmPm = document.getElementById('amPM');

var now    = new Date();
var hrs    = now.getHours();
var mins   = now.getMinutes();
var sec    = now.getSeconds();

//sync interval with current time
var offSet = ((60 - sec) * 1000);
var startTime = setTimeout(refresh, offSet);

//setting the interval to retrieve time
function refresh() {
    dispClock();
    setInterval(dispClock, 60000);
}

//display clock in hr/min format
function dispClock(){
var now = new Date();
//console.log(now);
var hour = now.getHours();
var min = now.getMinutes();
//set to AM/PM format
if(hour > 12){
    var hour = hour - 12;
    dispAmPm.innerHTML = "PM";
}else if(hour == 0){
    var hour = 12;
    dispAmPm.innerHTML = "AM";
}else{
    dispAmPm.innerHTML = "AM";
}

dispHrs.innerHTML = hour;
//display minutes in 2 digit format
if (min < 10){
    dispMin.innerHTML = '0' + min;
}else{
    dispMin.innerHTML = min;
}
}

/*
FUNCTIONS TO SET ALARM
*/
