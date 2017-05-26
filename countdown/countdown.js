var endTimestamp = 1498721400000;
var daysInMs = 1000 * 60 * 60 * 24;
var hoursInMs = 1000 * 60 * 60;
var minutesInMs = 1000 * 60;

function updateTime() {
	var timeUntil = endTimestamp - new Date().getTime();
	if(timeUntil <= 0) {
		var center_box = document.getElementsByClassName("center-box");
		var until = document.getElementById("until");
		
		until.innerHTML = 'Since June 29th, 11:30am<br>Enjoy the break while it lasts!';
		timeUntil = new Date().getTime() - endTimestamp;
	}
	
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
	
	days.textContent = Math.floor(daysUntil) + ' day';
	hours.textContent = Math.floor(hoursUntil) + ' hour';
	minutes.textContent = Math.floor(minutesUntil) + ' minute';
	seconds.textContent = Math.floor(secondsUntil) + ' second';
	millis.textContent = 'and ' + Math.floor(millisUntil) + ' millisecond';
	
	if(Math.floor(daysUntil) != 1) days.textContent = days.textContent + 's';
	if(Math.floor(hoursUntil) != 1) hours.textContent = hours.textContent + 's';
	if(Math.floor(minutesUntil) != 1) minutes.textContent = minutes.textContent + 's';
	if(Math.floor(secondsUntil) != 1) seconds.textContent = seconds.textContent + 's';
	if(Math.floor(millisUntil) != 1) millis.textContent = millis.textContent + 's'
}

window.setInterval(updateTime, 1);
