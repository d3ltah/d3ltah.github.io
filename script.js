function calculateAge() {
	var diff_ms = Date.now() - new Date(2008, 0, 25).getTime();
	var age_dt = new Date(diff_ms);
	return Math.abs(age_dt.getUTCFullYear() - 1970);
}

window.onload = function () {
	document.getElementById("age").innerHTML = calculateAge();
};
