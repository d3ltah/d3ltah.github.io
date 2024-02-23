var birthdate = new Date("Jan 25 2008");
var cur = new Date();
var diff = cur - birthdate;

document.getElementById("age").innerHTML = Math.floor(diff / 31557600000);

function updateTime() {
	var d = new Intl.DateTimeFormat("en-GB", {
		hour: "numeric",
		minute: "numeric",
	});
	document.getElementById("local-time").innerHTML = d.format();
}

updateTime();
setInterval(updateTime, 1000);

const trackName = document.getElementById("track-name");
const artistName = document.getElementById("artist-name");
const albumName = document.getElementById("album-name");
const albumCover = document.getElementById("spot-album-cover");
const isPlaying = document.getElementById("spot-playing");

function updateSpotifyWidget() {
	fetch(
		"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bbqbeanburger&api_key=786ecc4a87d38105baee228090b1d19c&limit=1&extended=1&format=json"
	)
		.then((response) => response.json())
		.then((jsonString) => {
			const track = jsonString.recenttracks.track[0];
			trackName.innerHTML = track.name;
			artistName.innerHTML = "by " + track.artist.name;
			albumName.innerHTML =
				track.album["#text"] == track.name ? "" : "on " + track.album["#text"];
			albumCover.src = track.image[3]["#text"];
			isPlaying.innerHTML =
				"@attr" in track ? "▷ now playing" : "↺ last played";
		});
}

updateSpotifyWidget();
setInterval(updateSpotifyWidget, 1200);

fetch("https://api.api-ninjas.com/v1/counter/?id=d3smellsoftangerines&hit=true", {
	headers: { "X-Api-Key": "oMQdq+BBFVRrNcrZukVJQg==5CYS8gJyM8BES8Q7" },
})
	.then((response) => response.json())
	.then((jsonString) => {
		document.getElementById("visits").innerHTML = "#" + jsonString.value.toString().replace(
			/\B(?=(\d{3})+(?!\d))/g,
			","
		);
	});

document.addEventListener("mousemove", (event) => {
	// get the current position of the cursor on the screen as a px value
	var cursorX = event.clientX;
	var cursorY = event.clientY;
	document.documentElement.style.setProperty("--cursor-x", cursorX + "px");
	document.documentElement.style.setProperty("--cursor-y", cursorY + "px");
});

const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleIcon = themeToggleBtn.querySelector("i");

function applyTheme() {
	if (window.localStorage.getItem("theme") === "dark") {
		document.documentElement.style.setProperty("--bg-colour", "#1a1a1a");
		document.documentElement.style.setProperty("--body-colour", "#faf1f1");
		themeToggleIcon.classList.remove("fa-mug-hot");
		themeToggleIcon.classList.add("fa-martini-glass");
	} else {
		document.documentElement.style.setProperty("--bg-colour", "#faf1f1");
		document.documentElement.style.setProperty("--body-colour", "#1a1a1a");
		themeToggleIcon.classList.remove("fa-martini-glass");
		themeToggleIcon.classList.add("fa-mug-hot");
	}
}

function toggleTheme() {
	window.localStorage.setItem(
		"theme",
		window.localStorage.getItem("theme") === "dark" ? "light" : "dark"
	);
	applyTheme();
}
