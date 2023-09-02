const AgeTicker = document.getElementById("age-ticker");

var dob = new Date("01/25/2008");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
const Age = Math.abs(year - 1970);

AgeTicker.innerHTML = Age;

setTimeout(() => {
    for (let i = 0; i <= Age; i++) {
        setTimeout(() => {AgeTicker.innerHTML = i}, 40 * i);
    }
}, 300);
    