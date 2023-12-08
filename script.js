const age = document.getElementById("age");
const birthday = new Date("Jan 25, 2008 22:55:00");

function calcAge() {
	var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function updateAge() {
    age.innerHTML = calcAge();
}

setInterval(updateAge, 315.57);
