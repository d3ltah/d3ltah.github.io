var birthdate = new Date("Jan 25 2008");
var cur = new Date();
var diff = cur - birthdate;

document.getElementById("age").innerHTML = Math.floor(diff / 31557600000);

function updateTime() {
	var d = new Intl.DateTimeFormat("en-GB", {
		hour: "numeric",
		minute: "numeric",
		hour12: true
	});
	document.getElementById("local-time").innerHTML = d.format();
}

updateTime();
setInterval(updateTime, 1000);