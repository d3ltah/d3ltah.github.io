const age = document.getElementById("age");

function daysBetweenDates(d1, d2) {
	var diffDays, oneDay;
	oneDay = 24 * 60 * 60 * 1000;
	diffDays = (d2 - Date.parse(d1)) / oneDay;
	return diffDays;
}

function updateAge() {
    age.innerHTML = (daysBetweenDates("Jan 25, 2008 22:55:00", new Date()) / 365).toFixed(8);
}

setInterval(updateAge, 315.57);
