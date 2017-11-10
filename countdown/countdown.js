var endTimestamp = [
	[new Date(1504612800000), "It begins..."],
	[new Date(1514005200000), "Have a break."],
    [new Date(1514091600000), "On Chistmas Eve..."],
	[new Date(1514178000000), "Oh Christmas tree,<br>oh Christmas tree..."],
	[new Date(1516971600000), "Your examination is ready."],
	[new Date(1520658000000), "Have another break."],
	[new Date(1529668800000), "Your other examination<br>is ready."],
	[new Date(1530209100000), "It is finished."],
];

var daysInMs = 1000 * 60 * 60 * 24;
var hoursInMs = 1000 * 60 * 60;
var minutesInMs = 1000 * 60;

var timerIndex = 0;

function updateTime() {
	var timeUntil = endTimestamp[timerIndex][0].getTime() - new Date().getTime();
	var until = document.getElementById("until");
	
	if(timeUntil <= 0) {
		until.innerHTML = 'Since '+endTimestamp[timerIndex][0].toLocaleString()+'<br>'+endTimestamp[timerIndex][1];
		timeUntil = new Date().getTime() - endTimestamp[timerIndex][0].getTime();
	}
	else {	
		until.innerHTML = 'Until '+endTimestamp[timerIndex][0].toLocaleString()+'<br>'+endTimestamp[timerIndex][1];
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
	if(Math.floor(millisUntil) != 1) millis.textContent = millis.textContent + 's';
}

function changeTimerSelect(change) {
	timerIndex += change;
	
	if(timerIndex < 0) timerIndex = endTimestamp.length - 1;
	else if(timerIndex >= endTimestamp.length) timerIndex = 0;
	
	var timerCount = document.getElementById("timerCount");
	if(timerCount != null)
	timerCount.innerText = "Timer {0}/{1}".replace("{0}", (timerIndex+1).toString()).replace("{1}", endTimestamp.length.toString());
}

window.setInterval(updateTime, 1);
