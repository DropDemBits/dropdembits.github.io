var endTimestamp = 1498750200000;
var daysInMs = 1000 * 60 * 60 * 24;
var hoursInMs = 1000 * 60 * 60;
var minutesInMs = 1000 * 60;

function doCelebrateText() {
	var center_box = document.getElementsByClassName("center-box")[0];
	center_box.textContent = 'Enjoy the break while it lasts!';
}

function updateTime() {
	var timeUntil = endTimestamp - new Date().getTime();
	if(timeUntil <= 0) doCelebrateText();
	
	var days = document.getElementById("days");
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var millis = document.getElementById("millis");
	
	var daysUntil = timeUntil / daysInMs;
	var hoursUntil = (timeUntil / hoursInMs) % 24;
	var minutesUntil = (timeUntil / minutesInMs) % 60;
	var secondsUntil = (timeUntil / 1000) % 60;
	var millisUntil = timeUntil % 1000;
	
	days.textContent = Math.floor(daysUntil) + ' days,';
	hours.textContent = Math.floor(hoursUntil) + ' hours,';
	minutes.textContent = Math.floor(minutesUntil) + ' minutes,';
	seconds.textContent = Math.floor(secondsUntil) + ' seconds,';
	millis.textContent = 'and ' + Math.floor(millisUntil) + ' milliseconds';
}

window.setInterval(updateTime, 1);
