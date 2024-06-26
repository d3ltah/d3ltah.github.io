const time = document.getElementById("time");
const temp = document.getElementById("temp");

const timeUpdate = () => {
	const now = new Date();
	time.innerHTML = now.toLocaleTimeString("en-US", {
		timeZone: "Europe/London",
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
	});
};

fetch(
	"https://api.open-meteo.com/v1/forecast?latitude=51.646&longitude=-3.745&current=temperature_2m&timezone=Europe%2FLondon&forecast_days=1"
)
	.then((response) => response.json())
	.then((json) => {
		console.log(json);
		temp.innerHTML = Math.round(json.current.temperature_2m) + "°C";
	});

timeUpdate();
setInterval(timeUpdate, 1000);
